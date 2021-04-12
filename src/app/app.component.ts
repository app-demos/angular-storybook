import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _httpClient: HttpClient) {}
  subscriptions: any[] = [];
  userDetails: any;

  ngOnInit() {
    this.subscriptions.push(this._httpClient.get('https://randomuser.me/api/').subscribe((data:any) => {
      this.userDetails = data.results[0];
    }));
  }
}
