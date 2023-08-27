import { Component } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss'],
})
export class TechStackComponent {
  public techStacks: any;

  constructor(private commonService: CommonService) {
    this.commonService.getExtraData().subscribe((res: any) => {
      this.techStacks = res.techStacks;
    });
  }
}
