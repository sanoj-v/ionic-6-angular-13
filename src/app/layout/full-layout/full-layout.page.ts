import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-layout',
  templateUrl: 'full-layout.page.html',
  styleUrls: ['full-layout.page.scss'],
})
export class FullLayoutPage {

  constructor(private _router: Router) { }
}
