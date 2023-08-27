import { Component } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private commonService: CommonService) {}

  copyText(textToCopy: string) {
    this.commonService.copyText(textToCopy);
  }
}
