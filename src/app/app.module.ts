import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatExpansionModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { ProjectComponent } from './project/project.component';

var firebaseConfig = {
  apiKey: "AIzaSyBwl847VVlJABH38HEzaUkKhO17c68O_aQ",
  authDomain: "message-posting-app.firebaseapp.com",
  databaseURL: "https://message-posting-app.firebaseio.com",
  projectId: "message-posting-app",
  storageBucket: "",
  messagingSenderId: "352249274587",
  appId: "1:352249274587:web:f84334149e28bc27"
};
// const appRoutes: Routes = [
//   {path: 'home', component: EditUserComponent}
// ];
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatInputModule, 
    MatCardModule, 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  //  RouterModule.forRoot(appRoutes),
    MatListModule,
    MatExpansionModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
