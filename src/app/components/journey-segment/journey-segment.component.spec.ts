import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneySegmentComponent } from './journey-segment.component';

describe('JourneySegmentComponent', () => {
  let component: JourneySegmentComponent;
  let fixture: ComponentFixture<JourneySegmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JourneySegmentComponent]
    });
    fixture = TestBed.createComponent(JourneySegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
