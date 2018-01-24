import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {

    const config = {
      apiKey: "AIzaSyDXGrtJTXZ593FqZFrJf-NadDuvMDBf2P4",
      authDomain: "jta-instagram-clone-ff498.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-ff498.firebaseio.com",
      projectId: "jta-instagram-clone-ff498",
      storageBucket: "jta-instagram-clone-ff498.appspot.com",
      messagingSenderId: "821187934617"
    };
    firebase.initializeApp(config);

  }

}
