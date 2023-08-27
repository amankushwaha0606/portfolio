import { Component } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'social-media-menu',
  templateUrl: './social-media-menu.component.html',
  styleUrls: ['./social-media-menu.component.scss'],
})
export class SocialMediaMenuComponent {
  constructor(private commonService: CommonService) {}

  copyText(textToCopy: string) {
    this.commonService.copyText(textToCopy);
  }
}
