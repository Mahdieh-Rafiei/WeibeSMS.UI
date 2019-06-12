import {Component, OnInit} from '@angular/core';
import {DraftService} from '../draft.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../../../shared/notification.service';
import _ from 'node_modules/lodash/lodash.js';
import {DraftInterface} from './models/draft.interface';
import {AddDraftResponseInterface} from './models/add-draft-response.interface';
import {AddDraftInterface} from './models/add-draft.interface';
import {GetDraftInterface} from './models/get-draft.interface';
import {EditDraftResponseInterface} from './models/edit-draft-response.interface';
import {EditDraftInterface} from './models/edit-draft.interface';
import {errorAnimation} from "../../../../shared/component/animation/error-animation";

@Component({
  selector: 'app-draft',
  templateUrl: './single.draft.component.html',
  styleUrls: ['./single.draft.component.scss'],
    animations: [
        errorAnimation()
    ],
})
export class SingleDraftComponent implements OnInit {

  id: number;
  draft: any = {
    Id: 0,
    Title: '',
    messageText: ''
  };

  drafts: any[];
  smsCount: number = 0;
  isAddMode: boolean = false;
  localSmsLen: number = 0;
  container: number = 160;

  titleValue: boolean = false;
  messageValue: boolean = false;

  constructor(private draftService: DraftService,
              private activatedRoute: ActivatedRoute,
              private notificationService: NotificationService,
              private router: Router) {
  }

  ngOnInit() {
    const strId = this.activatedRoute.snapshot.paramMap.get('id');
    if (strId == null) {
      this.isAddMode = true;
    } else {
      this.id = parseInt(strId);
      this.getDraft(this.id);
    }

    console.log(this.id);
    console.log(this.isAddMode);

    this.getAllDrafts();
  }

  getDraft(id) {
    this.draftService.getDraft(id)
      .subscribe((res: GetDraftInterface) => {
        console.log(res);
        this.draft = res.data;
        this.onMessageTextChange();
      });
  }

  getAllDrafts() {
    this.draftService.getAllDrafts(1, 1000, '') // TODO: correct pagination
    // TODO: use an api to resolve only names
      .subscribe((res: DraftInterface) => {
        this.drafts = res.data.items;
        console.log(this.drafts);
      });
  }

  addOrUpdateDraft() {
    if (!this.draft.title) {
      this.titleValue = true;
    }
    if (!this.draft.messageText) {
      this.messageValue = true;
      return;
    }
    if (this.isAddMode) {
      const payload: AddDraftInterface = {
        Title: this.draft.title,
        MessageText: this.draft.messageText
      };
      this.draftService.addDraft(payload)
        .subscribe((res: AddDraftResponseInterface) => {
          this.notificationService.success('Template saved successfully', '');
          this.router.navigateByUrl('draft-list');
        });
    } else {
      const payload: EditDraftInterface = {
        Title: this.draft.title,
        MessageText: this.draft.messageText
      };
      this.draftService.modifyDraft(this.draft.id, payload)
        .subscribe((res: EditDraftResponseInterface) => {
          this.notificationService.success('Template saved successfully', '');
          this.router.navigateByUrl('draft-list');
        });
    }
  }

  addSegment(type: number) {
    let expression = '';

    switch (type) {
      case 1: {
        expression = '#FirstName#';
        break;
      }

      case 2: {
        expression = '#LastName#';
        break;
      }

      case 3: {
        expression = '#Mobile#';
        break;
      }
    }
    this.draft.messageText = this.draft.messageText.concat(` ${expression}`);
    this.onMessageTextChange();
  }

  onMessageTextChange() {

    let len = this.draft.messageText.length;
    this.container = 153;

    if (len == 0) {
      this.smsCount = 0;
      this.localSmsLen = len;
      this.container = 160;
    } else if (len <= 160) {
      this.smsCount = 1;
      this.localSmsLen = len;
      this.container = 160;
    } else if (len > 160 && len <= 360) {
      this.smsCount = 2;
      this.localSmsLen = len - 160;
      this.container = 146;
    }
    else if (len > 360 && len < 459) {
      this.smsCount = 3;
      this.localSmsLen = len - 360;

    } else {
      this.smsCount = 4 + Math.floor((len - 459) / 153);
      this.localSmsLen = (len - 459) % 153;
    }
  }

  assignReadyTemplate(e) {
    let selectedId = e.target.value;
    let selectedDraft = _.find(this.drafts, d => d.Id == selectedId);
    this.draft.messageText = selectedDraft.messageText;
  }

  selectTemplate(event) {
    this.getDraft(event.target.value);
  }
}
