import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent {
  @Input() location: string | undefined;
  @Input() latitude: any;
  @Input() longitude: any;
  iconUrl = 'assets/icons/icon_marker.png';
  lazyMap = false;
}
