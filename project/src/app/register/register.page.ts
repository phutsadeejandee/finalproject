import { HttpClient } from '@angular/common/http';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
// import { threadId } from 'worker_threads';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username:any = 'asd';
  password:any  = 'asd';
  fname:any  = 'asd';
  lname:any  = 'asd';
  mail:any  = 'asd';
  tel:any  = 'asd';
  data: any;
  url:string = "http://localhost/project/backend/create.php"
  HttpClient: any;
  alertController: any;
  router: any;

  constructor(
    public _apiService: ApiService,
    public Http:  HttpClient

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
    console.log(data)
    // this._apiService.addMember(data).subscribe((res:any) => {
    //   console.log("SUCCESS ===", res);
    // },(error:any) => {
    //   console.log("ERROR ===", error);
    // })
    this.data = data;

    if (this.data.username != "" &&
    this.data.password != "" &&
    this.data.fname != "" &&
    this.data.lname != "" &&
    this.data.lname != "" &&
    this.data.mail != "" &&
    this.data.tel != "") {
      let getmember = new FormData();
      getmember.append('username', this.data.username);
      getmember.append('password', this.data.password);
      getmember.append('fname', this.data.fname);
      getmember.append('lname', this.data.lname);
      getmember.append('mail', this.data.mail);
      getmember.append('tel', this.data.tel);

      let callback: Observable<any> = this.Http.post(this.url, getmember);
      callback.subscribe(async (_call) => {
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
