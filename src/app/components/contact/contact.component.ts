import { Component } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactLinks: any;
  constructor(private commonService: CommonService) {
    this.commonService.getExtraData().subscribe((res: any) => {
      this.contactLinks = res.contactLinks;
    });
  }
  copyText(textToCopy: string) {
    this.commonService.copyText(textToCopy);
  }
}
