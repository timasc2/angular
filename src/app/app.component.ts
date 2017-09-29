import { Component } from '@angular/core';

const todos = [
  'таск 1',
  'таск 2',
  'таск 3',
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todos = todos;
}
