import { Component } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public journies: any;

  constructor(private commonService: CommonService) {
    this.commonService.getProjectsData().subscribe((res: any) => {
      this.journies = res;
    });
  }
}
