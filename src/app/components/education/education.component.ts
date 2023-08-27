import { Component } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  public journies: any;

  constructor(private commonService: CommonService) {
    this.commonService.getEducationData().subscribe((res: any) => {
      this.journies = res;
    });
  }

}
