import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    public router: Router,
    public auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }
  menu=[
    {
      name:'Dashboard',
      icon:'dashboard',
      url:'/admin/dashboard'
    },
    {
      name:'Product',
      icon:'table_view',
      url:'/admin/product'
    },
  ];

  logout()
  {
    let conf=confirm('keluar aplikasi?');
    if(conf)
    {
    this.auth.signOut();
    this.router.navigate(['/login']);
    }
  }
}
