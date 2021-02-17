import {Component, Input, OnInit} from '@angular/core';
import {MediaEntity} from '../data/data.interface';


@Component({
  selector: 'app-media-items',
  templateUrl: './media-items.component.html',
  styleUrls: ['./media-items.component.scss']
})
export class MediaItemsComponent implements OnInit {

  @Input() media?: MediaEntity;

  constructor() {

  }

  ngOnInit(): void {

  }

}
