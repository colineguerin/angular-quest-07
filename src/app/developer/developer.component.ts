import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {
  developer: Developer = {
    lastname: 'Doe',
    firstname: 'John',
    age: 30,
    gender: 'Male',
    bio: 'I\'m a loser baby',
    skills: [
      { name: 'Angular', logo: 'angular.png', site: 'https://angular.com/' },
      { name: 'Java', logo: 'java.png', site: 'https://www.java.com/' },
    ]
  };
}
