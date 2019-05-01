import { Component, OnInit } from '@angular/core';
import {DraftService} from '../draft.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../shared/notification.service';
import _ from 'node_modules/lodash/lodash.js';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

  id:number;
  draft:any = {
    Id:0,
    Title:'',
    MessageText:''
  };

  drafts:any[];
  smsCount:number=0;
  isAddMode:boolean=false;
  localSmsLen:number=0;
  container:number=160;

  constructor(private draftService:DraftService,
              private activatedRoute:ActivatedRoute,
              private notificationService:NotificationService,
              private router:Router) { }

  ngOnInit() {
    let strId = this.activatedRoute.snapshot.paramMap.get('id');
    if (strId == null){
      this.isAddMode = true;
    } else {
      this.id = parseInt(strId);
      this.draftService.getDraft(this.id)
        .subscribe(res=>{
          console.log(res);
          this.draft=res.Data;
          this.onMessageTextChange();
        });
    }

    console.log(this.id);
    console.log(this.isAddMode);

    this.draftService.getAllDrafts(1,1000) //TODO: correct pagination
    //TODO: use an api to resolve only names
      .subscribe(res => {
        this.drafts = res.Data.Items;
        console.log(this.drafts);
      });
  }

  addOrUpdateDraft(){
    if (this.isAddMode){
      this.draftService.addDraft(this.draft.Title,this.draft.MessageText)
        .subscribe(res =>{
          this.notificationService.success('Template saved successfully','');
          this.router.navigateByUrl('draft-list');
        });
    } else {
      this.draftService.modifyDraft(this.draft.Id,this.draft.Title,this.draft.MessageText)
        .subscribe(res=>{
          this.notificationService.success('Template saved successfully','');
          this.router.navigateByUrl('draft-list');
        });
    }
  }

  addSegment(type:number){
    let expression = '';

    switch (type) {
      case 1:{
        expression = '#FirstName#';
        break;
      }

      case 2:{
        expression = '#LastName#';
        break;
      }

      case 3:{
        expression = '#Mobile#';
        break;
      }
    }
    this.draft.MessageText = this.draft.MessageText.concat(` ${expression}`);
    this.onMessageTextChange();
  }

  onMessageTextChange(){

    let len = this.draft.MessageText.length;
    this.container = 153;

    if (len == 0){
      this.smsCount = 0;
      this.localSmsLen = len;
      this.container = 160;
    } else if(len <= 160){
      this.smsCount = 1;
      this.localSmsLen = len;
      this.container = 160;
    }else if(len > 160 && len <= 360 ){
      this.smsCount = 2;
      this.localSmsLen = len - 160;
      this.container = 146;
    }
    else if(len > 360 && len < 459){
      this.smsCount = 3;
      this.localSmsLen = len - 360

    }else {
      this.smsCount = 4 + Math.floor ((len - 459) / 153);
      this.localSmsLen = (len - 459) % 153;
    }
  }

  test(e){
    let selectedId = e.target.value;
    let selectedDraft = _.find(this.drafts,d=>d.Id == selectedId);
    this.draft.MessageText = selectedDraft.MessageText;
  }
}
