import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages = '';
  newMessages = [];
  newMsg ='';

  constructor(private http : HttpClient) { }

  async ngOnInit() {
    this.newMessages = (await this.http.get("http://localhost:3000/api/message").toPromise()) as any[];
  }

  postMessage(){
    console.log(this.messages);
    this.http.post("http://localhost:3000/api/message", this.messages).toPromise();
    this.newMsg = this.messages;
  }
}
