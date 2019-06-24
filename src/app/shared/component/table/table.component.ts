import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PagingModelInterface} from './models/paging-model.interface';
import {TableConfigInterface} from './models/table-config.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() tableConfig: TableConfigInterface;
  @Input() headersName: string[];
  @Input() collection: any[];
  @Input() pagingModel: PagingModelInterface;
  @Output() pagingModelChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemRemoved: EventEmitter<any> = new EventEmitter<any>();
  @Output() editItemClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  doPaging(e) {
    this.pagingModel.pageNumber = e;
    this.pagingModelChanged.emit();
  }

  removeItem(index:number,item:any){
    this.itemRemoved.emit({index:index,item:item});
  }

  showItem(item:any){
    this.itemSelected.emit({item:item});
  }

  editItem(index:number,item:any){
    this.editItemClicked.emit({index:index,item:item});
  }
}
