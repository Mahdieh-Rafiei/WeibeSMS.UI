import {AfterViewChecked, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {errorAnimation} from '../shared/component/animation/error-animation';
import {ConfigService} from '../shared/config.service';
import {AuthSharedService} from './auth-shared.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [
    errorAnimation()
  ],
  encapsulation: ViewEncapsulation.None
})


export class AuthComponent implements OnInit, AfterViewChecked {

  showSpinner=false;

  constructor(private configService: ConfigService,
              private authSharedService: AuthSharedService,
              private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.authSharedService.spinnerStatusChanged.subscribe(res => {
      this.showSpinner = res;
    })
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
}
