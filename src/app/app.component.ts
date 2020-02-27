import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { increment, decrement } from './actions/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public counter$: any;

  constructor(private store: Store<{ counter: number }>) {}

  ngOnInit() {
    this.counter$ = this.store.pipe(
      select('counter')
    );
  }

  increment() {
    this.store.dispatch(increment(102));
  }

  decrement() {
    this.store.dispatch(decrement(37));
  }
}
