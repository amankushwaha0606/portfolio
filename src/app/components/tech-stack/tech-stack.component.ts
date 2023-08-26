import { Component } from '@angular/core';

@Component({
  selector: 'tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss'],
})
export class TechStackComponent {
  public techStacks = [
    {
      rating: 4.3,
      title: 'CSS',
      imgPath: '../../../assets/img/css.png',
    },
    {
      rating: 4.3,
      title: 'GitHub',
      imgPath: '../../../assets/img/github.png',
    },
    {
      rating: 4.3,
      title: 'HTML',
      imgPath: '../../../assets/img/html.png',
    },
    {
      rating: 4.3,
      title: 'Javascript',
      imgPath: '../../../assets/img/javascript.png',
    },
    {
      rating: 4.3,
      title: 'Netlify',
      imgPath: '../../../assets/img/netlify.png',
    },
    {
      rating: 4.3,
      title: 'NodeJs',
      imgPath: '../../../assets/img/nodejs.png',
    },
    {
      rating: 4.3,
      title: 'NPM',
      imgPath: '../../../assets/img/npm.png',
    },
    {
      rating: 4.3,
      title: 'Postman',
      imgPath: '../../../assets/img/postman.png',
    },
    {
      rating: 4.3,
      title: 'ReactJs',
      imgPath: '../../../assets/img/react.png',
    },
    {
      rating: 4.3,
      title: 'Typescript',
      imgPath: '../../../assets/img/typescript.png',
    },
    {
      rating: 4.3,
      title: 'VS Code',
      imgPath: '../../../assets/img/vscode.jpg',
    },
    {
      rating: 4.3,
      title: 'Flutter',
      imgPath: '../../../assets/img/flutter.png',
    },
    {
      rating: 4.3,
      title: 'Firebase',
      imgPath: '../../../assets/img/firebase.png',
    },
  ];
}
