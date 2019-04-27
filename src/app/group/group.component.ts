import { Component, OnInit } from '@angular/core';
import {GroupService} from './group.service';
import {ActivatedRoute, Router} from '@angular/router';
import {assertNumber} from '@angular/core/src/render3/assert';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groups:any;
  id:string;

  constructor(private groupService:GroupService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
      this.groups = this.groupService.getGroup(this.id);
  }
}
