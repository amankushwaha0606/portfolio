import { Component } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  public journies: any;

  constructor(private commonService: CommonService) {
    this.commonService.getResumeData().subscribe((res: any) => {
      this.journies = res;
    });
  }

  copyText(textToCopy: string) {
    this.commonService.copyText(textToCopy);
  }
}
