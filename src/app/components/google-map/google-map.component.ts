import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  @Input() latitude: any;
  @Input() longitude: any;


  constructor() {
  }

  ngOnInit(): void {

  }


}
