import { Component } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  public aboutMe: any;
  public achievements: any;

  constructor(private commonService: CommonService) {
    this.commonService.getAboutData().subscribe((res: any) => {
      this.aboutMe = res.aboutMe;
      this.achievements = res.achievements;
    });
  }
}
