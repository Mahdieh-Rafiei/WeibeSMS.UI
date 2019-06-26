import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
import {errorAnimation} from '../../../../shared/component/animation/error-animation';
import {UtilityService} from '../../../../shared/utility.service';

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
        title: '',
        messageText: ''
    };

    drafts: any[];
    smsCount: number = 0;
    isAddMode: boolean = false;
    localSmsLen: number = 0;
    container: number = 160;
    totalSize = 1377;
    titleValue: boolean = false;
    messageValue: boolean = false;
    hasDoubleChar = false;
    maxLenError = false;

    constructor(private draftService: DraftService,
                private activatedRoute: ActivatedRoute,
                private notificationService: NotificationService,
                private router: Router,
                private utilityService: UtilityService) {
    }

    ngOnInit() {
        const strId = this.activatedRoute.snapshot.paramMap.get('id');
        if (strId == null) {
            this.isAddMode = true;
        } else {
            this.id = parseInt(strId);
            this.getDraft(this.id, true);
        }

        console.log(this.id);
        console.log(this.isAddMode);

        this.getAllDrafts();
    }

    getDraft(id, useTitle: boolean) {
        this.draftService.getDraft(id)
            .subscribe((res: GetDraftInterface) => {
                console.log(res);
                this.draft.messageText = res.data.messageText;
                this.draft.title = useTitle ? res.data.title : this.draft.title;
                this.draft.id = res.data.id;
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
            return;
        }
        if (!this.draft.messageText) {
            this.messageValue = true;
            return;
        }

        if (!this.isMaxLenValid())
            return;

        if (this.isAddMode) {
            const payload: AddDraftInterface = {
                Title: this.draft.title,
                MessageText: this.draft.messageText
            };
            this.draftService.addDraft(payload)
                .subscribe((res: AddDraftResponseInterface) => {
                    this.notificationService.success('Template saved successfully', '');
                    this.router.navigateByUrl('draft/list');
                });
        } else {
            const payload: EditDraftInterface = {
                Title: this.draft.title,
                MessageText: this.draft.messageText
            };
            this.draftService.modifyDraft(this.draft.id, payload)
                .subscribe((res: EditDraftResponseInterface) => {
                    this.notificationService.success('Template saved successfully', '');
                    this.router.navigateByUrl('draft/list');
                });
        }
    }

    addSegment(type: number) {
        let expression = '';

        debugger;
        if (!this.isMaxLenValid())
            return;

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
        this.hasDoubleChar = this.utilityService.containsNonLatinCodepoints(this.draft.messageText);
        this.totalSize = this.hasDoubleChar ? 603 : 1377;
        const repeatingContainerSize = this.hasDoubleChar ? 67 : 153;
        const firstContainerSize = this.hasDoubleChar ? 70 : 160;
        const secondContainerSize = this.hasDoubleChar ? 134 : 306;
        const thirdContainerSize = this.hasDoubleChar ? 201 : 459;

        let len = this.draft.messageText.length;
        this.container = repeatingContainerSize;
        this.localSmsLen = len;

        if (len == 0) {
            this.smsCount = 0;
            // this.localSmsLen = len;
            this.container = firstContainerSize;
        } else if (len <= firstContainerSize) {
            this.smsCount = 1;
            // this.localSmsLen = len;
            this.container = firstContainerSize;
        } else if (len > firstContainerSize && len <= secondContainerSize) {
            this.smsCount = 2;
            // this.localSmsLen = len - 160;
            this.container = secondContainerSize - firstContainerSize;
        } else if (len > secondContainerSize && len < thirdContainerSize) {
            this.smsCount = 3;
            // this.localSmsLen = len - 360;

        } else {
            this.smsCount = 3 + Math.floor((len - thirdContainerSize) / repeatingContainerSize);
            // this.localSmsLen = (len - 459) % 153;
        }
    }


    selectTemplate(event) {
        this.getDraft(event.target.value, false);
    }

    isMaxLenValid() {
        let isValid = true;
        if (this.hasDoubleChar) {
            if (this.draft.messageText.length > 603) {
                this.maxLenError = true;
                isValid = false;
            }
        } else {
            if (this.draft.messageText.length >= 1377) {
                this.maxLenError = true;
                isValid = false;
            }
        }

        return isValid;
    }
}
