import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'social-media-menu',
  templateUrl: './social-media-menu.component.html',
  styleUrls: ['./social-media-menu.component.scss'],
})
export class SocialMediaMenuComponent implements OnInit {
  socialMediaLinks: any;
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.dataLoadSubject.subscribe((res: any) => {
      if (res) {
        this.commonService.getExtraData().subscribe((res: any) => {
          this.socialMediaLinks = res.socialMediaLinks;
        });
      }
    });
  }

  copyText(textToCopy: string) {
    this.commonService.copyText(textToCopy);
  }
}
