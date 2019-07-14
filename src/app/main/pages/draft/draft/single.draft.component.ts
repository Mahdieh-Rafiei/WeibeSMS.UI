import {Component, OnInit} from '@angular/core';
import {DraftService} from '../draft.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../../../shared/notification.service';
import {errorAnimation} from '../../../../shared/component/animation/error-animation';
import {DraftInterface} from './models/draft.interface';
import {AddDraftInterface} from './models/add-draft.interface';
import {AddDraftResponseInterface} from './models/add-draft-response.interface';
import {EditDraftInterface} from './models/edit-draft.interface';
import {EditDraftResponseInterface} from './models/edit-draft-response.interface';
import {GetDraftResponseInterface} from './models/get-draft-response.interface';

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
  draft: DraftInterface = {
    messageText: '',
    title: '',
    id: 0
  };

  isAddMode = false;
  titleValue = false;
  saveTried = false;
  isMaxLenValid = true;

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

      this.draftService.getDraft(parseInt(strId))
        .subscribe((res: GetDraftResponseInterface) => {
          this.draft = res.data;
        });
    }
  }

  addOrUpdateDraft() {
    this.saveTried = true;
    if (!this.draft.title) {
      return;
    }
    if (!this.draft.messageText) {
      return;
    }

    if (!this.isMaxLenValid) {
      return;
    }

    if (this.isAddMode) {
      const payload: AddDraftInterface = {
        title: this.draft.title,
        messageText: this.draft.messageText
      };
      this.draftService.addDraft(payload)
        .subscribe((res: AddDraftResponseInterface) => {
          this.notificationService.success('Template saved successfully', '');
          this.router.navigateByUrl('draft/list');
        });
    } else {
      const payload: EditDraftInterface = {
        title: this.draft.title,
        messageText: this.draft.messageText
      };
      this.draftService.modifyDraft(this.draft.id, payload)
        .subscribe((res: EditDraftResponseInterface) => {
          this.notificationService.success('Template saved successfully', '');
          this.router.navigateByUrl('draft/list');
        });
    }
  }

  setDraft(draft: DraftInterface) {
    this.draft.messageText = draft.messageText;
    if (this.isAddMode || this.draft.title.length == 0) {
      this.draft.title = draft.title;
    }
  }

  setMessageText(messageText){
    this.draft.messageText = messageText;
  }

}
