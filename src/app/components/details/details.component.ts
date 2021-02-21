import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Details } from '../data/data.interface';
import { PartnerApiService } from '../../../services/partner-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  data$: Observable<Details> | undefined;
  constructor(private partnerApi: PartnerApiService) {}

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(): void {
    this.data$ = this.partnerApi.getDetails();
  }
}
