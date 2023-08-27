import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  messageSubject = new Subject<any>();

  constructor() {}

  copyText(textToCopy: string) {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        this.showMessage("Copied !!!");
      })
      .catch(function (error) {
        console.error('Error copying text:', error);
      });
  }

  showMessage(message: string) {
    this.messageSubject.next(message);
    setTimeout(()=> {
      this.messageSubject.next('');
    }, 3000)
  }
}
