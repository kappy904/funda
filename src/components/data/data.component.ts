import {Component, OnInit} from '@angular/core';
import {PartnerApiService} from '../../services/partner-api.service';
import {Details} from './data.interface';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  data: any;

  constructor(private partnerApi: PartnerApiService) {
  }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(): void {
    this.partnerApi.getDetails()
      .subscribe((resp: Details) => {
        this.data = {...resp};
      });
  }
}


