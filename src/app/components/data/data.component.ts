import { Component, OnInit } from '@angular/core';
import { PartnerApiService } from '../../../services/partner-api.service';
import { Details } from './data.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
})
export class DataComponent implements OnInit {
  data$: Observable<Details> | undefined;
  constructor(private partnerApi: PartnerApiService) {}

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(): void {
    this.data$ = this.partnerApi.getDetails();
  }
}
