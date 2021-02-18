import {Component, Input} from '@angular/core';
import {MediaEntity, MediaItemsEntity} from '../data/data.interface';


@Component({
  selector: 'app-media-items',
  templateUrl: './media-items.component.html',
  styleUrls: ['./media-items.component.scss']
})
export class MediaItemsComponent {
  @Input() media?: MediaEntity;
  size: MediaItemsEntity | number;

  constructor() {
    this.size = 1;
  }

}
