import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'Aman Singh Kushwaha';
  selectedSection: number = -1;
  message: string = '';
  subscription: Subscription;

  constructor(public commonService: CommonService) {
    this.subscription = this.commonService.messageSubject.subscribe(
      (message) => {
        this.message = message;
      }
    );
  }

  ngOnInit(): void {}

  toggleSection(index: number) {
    if (this.selectedSection == index) {
      this.selectedSection = -1;
    } else {
      this.selectedSection = index;
    }
  }
}
