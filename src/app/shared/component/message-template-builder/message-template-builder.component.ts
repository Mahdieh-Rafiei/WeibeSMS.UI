import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UtilityService} from '../../utility.service';
import {DraftInterface} from '../../../main/pages/draft/draft/models/draft.interface';
import {DraftService} from '../../../main/pages/draft/draft.service';
import {GetDraftResponseInterface} from '../../../main/pages/draft/draft/models/get-draft-response.interface';
import {GetDraftsResponseInterface} from '../../../main/pages/draft/draft/models/get-drafts-response.interface';

@Component({
  selector: 'app-message-template-builder',
  templateUrl: './message-template-builder.component.html',
  styleUrls: ['./message-template-builder.component.scss']
})

export class MessageTemplateBuilderComponent implements OnInit {

  hasDoubleChar = false;
  isMaxLenValid = true;
  container = 160;
  totalSize = 1377;
  localSmsLen = 0;
  smsCount = 0;
  drafts: any[];
  needRequiredError = false;

  @Input() messageText = '';
  @Output() draftLoaded: EventEmitter<DraftInterface> = new EventEmitter<DraftInterface>();
  @Output() maxLenValidated: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() messageTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(private utilityService: UtilityService,
              private draftService: DraftService) {
  }

  ngOnInit() {
    this.getAllDrafts();
  }

  onMessageTextChange() {
    this.hasDoubleChar = this.utilityService.containsNonLatinCodepoints(this.messageText);
    this.totalSize = this.hasDoubleChar ? 603 : 1377;
    const repeatingContainerSize = this.hasDoubleChar ? 67 : 153;
    const firstContainerSize = this.hasDoubleChar ? 70 : 160;
    const secondContainerSize = this.hasDoubleChar ? 134 : 306;
    const thirdContainerSize = this.hasDoubleChar ? 201 : 459;

    const len = this.messageText.length;
    this.container = repeatingContainerSize;
    this.localSmsLen = len;

    if (len == 0) {
      this.smsCount = 0;
      this.container = firstContainerSize;
    } else if (len <= firstContainerSize) {
      this.smsCount = 1;
      this.container = firstContainerSize;
    } else if (len > firstContainerSize && len <= secondContainerSize) {
      this.smsCount = 2;
      this.container = secondContainerSize - firstContainerSize;
    } else if (len > secondContainerSize && len < thirdContainerSize) {
      this.smsCount = 3;

    } else {
      this.smsCount = 3 + Math.floor((len - thirdContainerSize) / repeatingContainerSize);
    }

    this.messageTextChanged.emit(this.messageText);
    this.maxLenValidating();
  }

  addSegment(type: number) {
    let expression = '';

    if (!this.isMaxLenValid) {
      return;
    }

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
    this.messageText = this.messageText.concat(` ${expression}`);
    this.onMessageTextChange();
  }

  setNeedRequiredErrorIn(){
    this.needRequiredError = false;
  }

  setNeedRequiredErrorOut(){
    this.needRequiredError = this.messageText.length == 0;
  }

  maxLenValidating() {
    if (this.hasDoubleChar) {
      if (this.messageText.length > 603) {
        this.isMaxLenValid = false;
      } else {
        this.isMaxLenValid = true;
      }
    } else {
      if (this.messageText.length >= 1377) {
        this.isMaxLenValid = false;
      } else {
        this.isMaxLenValid = true;
      }
    }
    this.maxLenValidated.emit(this.isMaxLenValid);
  }

  getAllDrafts() {
    this.draftService.getAllDrafts(1, 1000, '') // TODO: correct pagination
    // TODO: use an api to resolve only names
      .subscribe((res: GetDraftsResponseInterface) => {
        this.drafts = res.data.items;
      });
  }

  selectTemplate(event) {
    this.getDraft(event.target.value);
  }

  getDraft(id) {
    this.draftService.getDraft(id)
      .subscribe((res: GetDraftResponseInterface) => {
        this.messageText = res.data.messageText;
        this.draftLoaded.emit(res.data);
        this.onMessageTextChange();
      });
  }
}
