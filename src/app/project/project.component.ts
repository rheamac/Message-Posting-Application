import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  messages = '';
  newMessages = [];
  newMsg ='';
  model = {
    messages :'',
    username :''
  }
  userName : ''
  userDetails = [];
  userMessages = [];

  constructor(private http : HttpClient) { }

  async ngOnInit() {
    this.newMessages = (await this.http.get("http://localhost:3000/api/message").toPromise()) as any[];
  }

  postMessage(){
    this.http.post("http://localhost:3000/api/message", this.model).toPromise();
    this.newMsg = this.model.messages;
  }
 async findUserMeaages() {
    this.userDetails = (await this.http.get("http://localhost:3000/api/user/"+this.userName).toPromise()) as any[];
    if (this.userDetails[0])
     this.userMessages = this.userDetails[0].messages;
     else 
     this.userMessages = null;
  }

}
