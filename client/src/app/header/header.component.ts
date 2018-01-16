import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  imgSrc: String = "assets/Combined_Shape.svg";
  imgDoctor: String = "assets/doctor.png";
  
  constructor() {
  }
}
