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
        console.log(res.data);
        res.data.items.forEach(i=>{
          console.log(i);
          this.drafts.push({
            id:i.id,
            messageText:i.messageText,
            title:i.title,
            summary:i.messageText.substring(0,30)
          });
        });
        console.log(this.drafts);
      });
  }

  removeDraft(draft){
    this.draftService.removeDraft(draft.id)
      .subscribe(res=>{
        console.log(res);
        _.remove(this.drafts,d=>d.id == draft.id);
      });
  }

}
