import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Details } from '../../components/data/data.interface';
import { PartnerApiService } from '../../../services/partner-api.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
})
export class DetailsPageComponent implements OnInit {
  // the Details interface was created from a json object,
  // you can view it under the components/data.component where I tested it
  // this type safety was also great for intellisense and object separation
  data$: Observable<Details> | undefined;
  lazyGallery: boolean | undefined;

  constructor(
    private partnerApi: PartnerApiService,
    // this ensures Scully will have my SEO covered
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
    // I chose the async pipe and observable to manage the loading indicator state and unsubscribing much more easily
    this.data$ = this.partnerApi.getDetails();
  }
}
