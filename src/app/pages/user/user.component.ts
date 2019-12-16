import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/core/services/http/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params
      .subscribe(   
        (params: Params) => {
          this.loadUser(params['id']);
        }
      );
  }

  loadUser(id) {
    return this.userService.getUser(id).subscribe((user: User) => {
      this.user = user;
    })
  }
}
