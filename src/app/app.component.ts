import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Aman Singh Kushwaha';

  selectedSection = -1;

  toggleSection(index: number) {
    if(this.selectedSection == index) {
      this.selectedSection = -1;
    } else {
      this.selectedSection = index;
    }
  }
  
}
