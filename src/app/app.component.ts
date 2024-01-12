import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  Observable,
  of,
  map,
  Subject,
  asyncScheduler,
  observeOn,
  asapScheduler,
} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'rxjstest';

  ngOnInit(): void {
    const observable = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
    }).pipe(observeOn(asapScheduler));

    console.log('before subscribe');

    observable.subscribe((val) => console.log(val));

    console.log('after subscribe');
  }
}
