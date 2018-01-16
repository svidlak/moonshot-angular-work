import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.sass']
})
export class DoctorComponent {

  @Input() doctor: object;
  @Input() index: number;
  doctorImage: String = 'assets/Profile_Big.png';
  showAdditional: boolean = false;

  constructor() { }

}
