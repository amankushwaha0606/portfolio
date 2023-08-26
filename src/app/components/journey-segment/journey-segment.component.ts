import { Component, Input } from '@angular/core';

@Component({
  selector: 'journey-segment',
  templateUrl: './journey-segment.component.html',
  styleUrls: ['./journey-segment.component.scss']
})
export class JourneySegmentComponent {

  @Input() journies: any;

}
