import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-enquire-now',
  templateUrl: './enquire-now.component.html',
})
export class EnquireNowComponent {
  @Input() date: any;
  @Input() agent: string | undefined;
  @Input() agentNumber: string | undefined;
  formattedDate: string | undefined;

  sanitizeDate(date: any): Date {
    // I'm not sure this is correct because angulars date pipe is getting the year wrong
    return (this.formattedDate = date.match(/\d+/)[0]);
  }
}
