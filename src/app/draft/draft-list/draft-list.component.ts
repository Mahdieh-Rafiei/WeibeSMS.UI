import { Component, OnInit } from '@angular/core';
import {DraftService} from '../draft.service';
import _ from 'node_modules/lodash/lodash.js';

@Component({
  selector: 'app-draft-list',
  templateUrl: './draft-list.component.html',
  styleUrls: ['./draft-list.component.css']
})
export class DraftListComponent implements OnInit {

  drafts:any[] = [];
  pageNumber:number;
  pageSize:number;

  constructor(private draftService:DraftService) { }

  ngOnInit() {
    this.draftService.getAllDrafts(this.pageNumber,this.pageSize)
      .subscribe(res => {
        console.log(res.Data);
        res.Data.Items.forEach(i=>{
          console.log(i);
          this.drafts.push({
            Id:i.Id,
            MessageText:i.MessageText,
            Title:i.Title,
            Summary:i.MessageText.substring(0,30)
          });
        });
        console.log(this.drafts);
      });
  }

  removeDraft(draft){
    this.draftService.removeDraft(draft.Id)
      .subscribe(res=>{
        console.log(res);
        _.remove(this.drafts,d=>d.Id == draft.Id);
      });
  }

}
