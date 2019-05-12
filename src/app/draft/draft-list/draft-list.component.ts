import {Component, OnInit} from '@angular/core';
import {DraftService} from '../draft.service';
import _ from 'node_modules/lodash/lodash.js';
import {DraftInterface} from '../draft/models/draft.interface';

@Component({
  selector: 'app-draft-list',
  templateUrl: './draft-list.component.html',
  styleUrls: ['./draft-list.component.css']
})
export class DraftListComponent implements OnInit {

  drafts: any[] = [];
  pageNumber: number = 1;
  pageSize: number = 10;

  constructor(private draftService: DraftService) {
  }

  ngOnInit() {
    this.getAllDrafts();
  }

  getAllDrafts() {
    this.draftService.getAllDrafts(this.pageNumber, this.pageSize)
      .subscribe((res: DraftInterface) => {
        console.log(res.data);
        res.data.items.forEach((i: any) => {
          console.log(i);
          this.drafts.push({
            id: i.id,
            messageText: i.messageText,
            title: i.title,
            summary: i.messageText.substring(0, 30)
          });
        });
        console.log(this.drafts);
      });
  }

  removeDraft(draft) {
    this.draftService.removeDraft(draft.id)
      .subscribe(res => {
        console.log(res);
        _.remove(this.drafts, d => d.id === draft.id);
      });
  }

}
