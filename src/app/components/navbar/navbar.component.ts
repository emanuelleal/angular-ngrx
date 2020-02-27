import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public counter$: any;

  constructor(private store: Store<{ counter: number }>) { }

  ngOnInit() {
    this.counter$ = this.store.pipe(
      select('counter')
    );
  }

}
