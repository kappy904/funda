import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent {
  @Input() latitude: string | undefined;
  @Input() longitude: string | undefined;
  @Input() location: string | undefined;
}
