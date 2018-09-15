import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  mode = new FormControl('over');

  @ViewChild('sidenav')
  public sideNavRef: ElementRef;
  id = 1;
  
  constructor() { }

  ngOnInit() {
  }
}
