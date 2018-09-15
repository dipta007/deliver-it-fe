import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import { AppRestService } from '../app.rest.service'

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              public appRestService: AppRestService) { }

  ngOnInit() {
    if(this.activatedRoute.snapshot.params.id) {
      //TODO: call by the user id
      this.appRestService.getUserById(this.activatedRoute.snapshot.params.id).subscribe((res) => {
        var tmp = res['user'];
        this.user.fullName = tmp['fullName']
        this.user.email = tmp['email']
        this.user.phoneNo = tmp['phoneNo']
      })
    } else {
      this.appRestService.getUserByToken().subscribe((res) => {
        var tmp = res['user'];
        this.user.fullName = tmp['fullName']
        this.user.email = tmp['email']
        this.user.phoneNo = tmp['phoneNo']
      })
    }
  }

  user = {
    fullName: "Sh",
    email: "sada@gmail.com",
    phoneNo: "2133423534254"
  }
}
