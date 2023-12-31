import { Component } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss'],
})
export class JourneyComponent {
  journies: any;

  constructor(private commonService: CommonService) {
    this.commonService.dataLoadSubject.subscribe((res: any) => {
      if (res) {
        this.commonService.getJourneyData().subscribe((res: any) => {
          this.journies = res;
        });
      }
    });
  }
}
