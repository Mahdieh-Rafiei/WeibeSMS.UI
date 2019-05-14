import {Component, OnInit} from '@angular/core';
import {DraftService} from '../draft.service';
import _ from 'node_modules/lodash/lodash.js';
import {DraftInterface} from '../draft/models/draft.interface';
import {RemoveDraftInterface} from '../draft/models/remove-draft.interface';

@Component({
  selector: 'app-draft-list',
  templateUrl: './draft-list.component.html',
  styleUrls: ['./draft-list.component.css']
})
export class DraftListComponent implements OnInit {

  drafts: any[] = [];
  pageNumber: number = 1;
  pageSize: number = 10;
  totalItemsCount: number;
  phrase = '';

  constructor(private draftService: DraftService) {
  }

  ngOnInit() {
    this.getAllDrafts();
  }

  getAllDrafts() {
    this.draftService.getAllDrafts(this.pageNumber, this.pageSize, this.phrase)
      .subscribe((res: DraftInterface) => {
        console.log(res.data);
        res.data.items.forEach((i: any) => {
          this.totalItemsCount = res.data.totalItemsCount;
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
      .subscribe((res: RemoveDraftInterface) => {
        console.log(res);
        _.remove(this.drafts, d => d.id === draft.id);
      });
  }


  getDataWithSearch() {
    this.pageNumber = 1;
    this.getAllDrafts();
  }

  doPaging(e) {
    this.pageNumber = e;
    this.getAllDrafts();
  }

}
