import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if(this.activatedRoute.snapshot.params.id) {
      //TODO: call by the user id
    } else {
      // TODO: call by the token
    }
  }

  user = {
    fullName: "Sh",
    email: "sada@gmail.com",
    phoneNo: "2133423534254"
  }
}
