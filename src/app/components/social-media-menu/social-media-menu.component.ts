import { Component } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'social-media-menu',
  templateUrl: './social-media-menu.component.html',
  styleUrls: ['./social-media-menu.component.scss'],
})
export class SocialMediaMenuComponent {
  socialMediaLinks: any;
  constructor(private commonService: CommonService) {
    this.commonService.getExtraData().subscribe((res: any) => {
      this.socialMediaLinks = res.socialMediaLinks;
    });
  }
  copyText(textToCopy: string) {
    this.commonService.copyText(textToCopy);
  }
}
