import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-side-nav-admin',
  templateUrl: './side-nav-admin.component.html',
  styleUrls: ['./side-nav-admin.component.css']
})
export class SideNavAdminComponent implements OnInit {
  mode = new FormControl('over');

  @ViewChild('sidenav')
  public sideNavRef: ElementRef;
  id = 1;
  
  constructor() { }

  ngOnInit() {
  }

}
