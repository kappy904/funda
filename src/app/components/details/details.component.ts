import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Details } from '../data/data.interface';
import { PartnerApiService } from '../../../services/partner-api.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  data$: Observable<Details> | undefined;

  constructor(
    private partnerApi: PartnerApiService,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Funda | House details | Find your next home');
    this.meta.updateTag({
      name: 'description',
      content:
        'Find the house of your dreams. At Funda, we make sure you find the best and only the best.',
    });
    this.getDetails();
  }

  getDetails(): void {
    this.data$ = this.partnerApi.getDetails();
  }
}
