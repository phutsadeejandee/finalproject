import { HttpClient } from '@angular/common/http';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { threadId } from 'worker_threads';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username:any;
  password:any;
  fname:any;
  lname:any;
  mail:any;
  tel:any;
  data: any;
  url:String = "http://localhost/appdata/getMember.php"
  HttpClient: any;
  alertController: any;
  router: any;

  constructor(
    public _apiService: ApiService

  ) { }

  addMember(){
    let data = {
      username:this.username,
      password:this.password,
      fname:this.fname,
      lname:this.lname,
      mail:this.mail,
      tel:this.tel
    }

    // this._apiService.addMember(data).subscribe((res:any) => {
    //   console.log("SUCCESS ===", res);
    // },(error:any) => {
    //   console.log("ERROR ===", error);
    // })

    if (this.data.username != "" &&
    this.data.password &&
    this.data.fname != "" &&
    this.data.lname != "" &&
    this.data.lname != "" &&
    this.data.mail != "" &&
    this.data.tel != "") {
      let getmember = new FormData();
      getmember.append('username', this.data.username);
      getmember.append('username', this.data.password);
      getmember.append('username', this.data.fname);
      getmember.append('username', this.data.lname);
      getmember.append('username', this.data.mail);
      getmember.append('username', this.data.tel);

      let callback: Observable<any> = this.HttpClient.post(this.url, getmember);
      callback.subscribe(async (call) => {
      const alert = await this.alertController.create({
        header: 'แจ้งเตือน',
        message: 'ลงทะเบียนสำเร็จ',
        buttons: [{
          text: 'ตกลง',
          handler : () => {
            this.router.navigate(['/login'])
          }
        }]
      })
      })

    }

  }

  ngOnInit() {
  }

}
