import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {InfoGetInterface} from './models/info-get.interface';
import {CountryInterface} from '../../../../../shared/models/country.interface';
import {SharedService} from '../../../../../shared/service/shared.service';
import {DataCountryInterface} from '../../../../../shared/models/data-country.interface';
import {NotificationService} from '../../../../../shared/notification.service';
import {UserAccountService} from '../../user-account.service';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
    profileForm: FormGroup;
  infoData: InfoGetInterface;
    countries: DataCountryInterface[];
    genders = [{title: 'Unknown', value: 1},
        {title: 'Female', value: 2},
        {title: 'Male', value: 3}];
    imageUrl: string = null;

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private uas: UserAccountService,
                private notificationService: NotificationService,
                private shs: SharedService) {
        this.route.data
            .subscribe((data: { info: InfoGetInterface }) => {
                this.infoData = data.info;
            });
        this.getCountry();
    }

    ngOnInit() {
        this.createForm();
        this.fillProfile(this.profileForm);
    }

    getCountry() {
        this.shs.getCountry()
            .subscribe((res: CountryInterface) => this.countries = res.data);
    }


    createForm() {
        this.profileForm = this.fb.group({
            firstName: [null, Validators.compose([Validators.required, Validators.maxLength(20)])],
            lastName: [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
            companyName: [null],
            gender: [''],
            defaultPrefixNumberId: [''],
            countryId: [''],
            birthday: [null]
        });
    }

    fillProfile(profileForm) {
        this.imageUrl = this.infoData.data.image ? this.infoData.data.image : null;
        profileForm.patchValue({
            firstName: this.infoData.data.firstName,
            lastName: this.infoData.data.lastName,
            companyName: this.infoData.data.companyName,
            email: this.infoData.data.email,
            gender: this.infoData.data.gender,
            defaultPrefixNumberId: this.infoData.data.defaultPrefixNumberId,
            countryId: this.infoData.data.countryId,
            birthday: new Date(this.infoData.data.birthDay * 1000),
        });
    }

    submit() {
        if (this.profileForm.valid) {
            const payload = this.profileForm.value;
            payload['gender'] = +payload['gender'];
            if (this.profileForm.value.birthday) {
                const date = new Date(this.profileForm.value.birthday).getTime() / 1000;
                payload['birthday'] = date;
            }
            this.uas.modifyProfile(payload)
                .subscribe(res => {
                    this.notificationService.success('Update profile successfully', '');
                });
        }
    }

}
