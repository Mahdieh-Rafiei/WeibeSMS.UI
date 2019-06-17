import {Component, OnInit} from '@angular/core';
import {NumbersService} from '../numbers.service';
import {DataLineInterface} from './models/data-line.interface';
import {CountryInterface} from '../../../../shared/models/country.interface';
import {DataCountryInterface} from '../../../../shared/models/data-country.interface';
import {SharedService} from '../../../../shared/service/shared.service';
import {AddUserLineInterface} from './models/add-user-line.interface';
import {Router} from '@angular/router';
import {CacheObject} from '../../../../shared/models/cache-object';

@Component({
  selector: 'app-buy-numbers-show',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit {


  hasAutoExtension:boolean;
  lines: DataLineInterface[];
  selectedCountryId:number = 89;
  selectedLine:DataLineInterface;
  //TODO: using cached data
  countries: DataCountryInterface[];

  constructor(private numbersService: NumbersService,
              private sharedService: SharedService,
              private route: Router) {
  }

  ngOnInit() {

    this.sharedService.getCountries().subscribe(res=>{
      this.countries = res.data;
    });
  }

  getLines(){
    this.numbersService.getLines(this.selectedCountryId)
      .subscribe(res => {
        this.lines = res.data;
        console.log(this.lines);
      });
  }

  countryChanged(e){
    this.selectedCountryId = e.target.value;
    this.getLines();
  }

  buyLine(){
    //TODO: disable if credit is not enough!
    let addUserLine:AddUserLineInterface = {lineId:this.selectedLine.id,hasAutoExtension:this.hasAutoExtension};
    this.numbersService.buyLine(addUserLine)
      .subscribe(res=>{
        this.numbersService.mode='yourNumbers';
         this.route.navigateByUrl('lines/my-lines')
      });
  }
}
