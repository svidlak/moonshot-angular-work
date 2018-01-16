import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.sass', '../../../node_modules/dragula/dist/dragula.css']
})
export class PublicComponent implements OnInit {
  publicDoctors: Array<object>;
  locationsArr: Array<object>

  lat: number = 32.0801258;
  lng: number = 34.7898816;

  constructor(private dragulaService: DragulaService) {
    dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1));
    });
  }

  private onDropModel(args) {
    let [el, target, source] = args;
    localStorage.doctors = JSON.stringify(this.publicDoctors);
  }

  ngOnInit() {
        this.publicDoctors = JSON.parse(localStorage.doctors);
        this.locationsArr = JSON.parse(localStorage.locations);
  }
}
