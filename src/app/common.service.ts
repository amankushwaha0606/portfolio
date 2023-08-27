import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // Import the HttpClient module

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  messageSubject = new Subject<any>();

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('assets/data.json');
  }

  getAboutData() {
    return this.http.get('assets/about.json');
  }

  getResumeData() {
    return this.http.get('assets/resume.json');
  }

  getEducationData() {
    return this.http.get('assets/education.json');
  }

  getProjectsData() {
    return this.http.get('assets/projects.json');
  }

  getExtraData() {
    return this.http.get('assets/extra.json');
  }

  copyText(textToCopy: string) {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        this.showMessage('Copied !!!');
      })
      .catch(function (error) {
        console.error('Error copying text:', error);
      });
  }

  showMessage(message: string) {
    this.messageSubject.next(message);
    setTimeout(() => {
      this.messageSubject.next('');
    }, 3000);
  }
}
