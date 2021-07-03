import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrasi',
  templateUrl: './registrasi.component.html',
  styleUrls: ['./registrasi.component.scss']
})
export class RegistrasiComponent implements OnInit {

  constructor(
    public router: Router,
    public auth: AngularFireAuth,
    public db: AngularFirestore
  ) { }

  ngOnInit(): void {
  }
  user: any={};
  hide: boolean=true;
  loading: boolean | undefined;
  register()
  {
    this.loading=true;
    this.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(res=>{
      this.loading=false;
      this.router.navigate(['/login']);
    }).catch (err=>{
      this.loading=false;
      alert('Tidak dapat mendaftar');
    });
  }
}
