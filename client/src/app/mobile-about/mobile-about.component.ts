import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-about',
  templateUrl: './mobile-about.component.html',
  styleUrls: ['./mobile-about.component.sass']
})
export class MobileAboutComponent {
  @Input() about: Array<object>;
  constructor() { }
}
