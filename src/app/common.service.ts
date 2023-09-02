import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // Import the HttpClient module

@Injectable({
  providedIn: 'root',
})
export class CommonService {

  globalData: any;
  showLoader: boolean = true;
  dataLoadSubject = new Subject<any>();
  messageSubject = new Subject<any>();

  constructor(private http: HttpClient) {
    this.fetchGlobalData();
  }

  fetchGlobalData() {
    const fileUrl =
      'https://script.google.com/macros/s/AKfycby_Wdp666Gidb4vlN0bAEqcjATVjY2fQLsMH95e7bIN0Nm6lHx7NPYORB0bpAYlZMadTQ/exec';
    this.http.get(fileUrl, { responseType: 'text' }).subscribe((data) => {
      this.globalData = JSON.parse(data);
      this.dataLoadSubject.next(true);
    });
  }

  getJourneyData() {
    return of(this.globalData.data);
  }

  getAboutData() {
    return of(this.globalData.about);
  }

  // return this.http.get('assets/resume.json');
  // All the functions below have 2 return statements. You can comment 1st one and use your custom data rendering technique.
  
  getResumeData() {
    return of(this.globalData.resume);
    return this.http.get('assets/resume.json');
  }

  getEducationData() {
    return of(this.globalData.education);
    return this.http.get('assets/education.json');
  }

  getProjectsData() {
    return of(this.globalData.projects);
    return this.http.get('assets/projects.json');
  }

  getExtraData() {
    this.showLoader = false;
    return of(this.globalData.extra);
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
