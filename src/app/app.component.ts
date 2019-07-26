import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages = '';

  constructor(private http : HttpClient) {}

  postMessage(){
    console.log(this.messages);
    this.http.post("http://localhost:3000/api/message", this.messages).toPromise();
  }
}
