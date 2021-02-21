import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  @Input() livingArea: number | undefined;
  @Input() plotArea: number | undefined;
  @Input() bedrooms: number | undefined;
  @Input() bathrooms: number | undefined;
  @Input() energyRating: string | undefined;
  constructor() {}

  ngOnInit(): void {}
}
