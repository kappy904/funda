import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquire-now',
  templateUrl: './enquire-now.component.html',
})
export class EnquireNowComponent {
  @Input() date: any;
  @Input() agent: string | undefined;
  @Input() agentNumber: string | undefined;

  sanitizeDate(date: any): Date {
    return (this.date = date.match(/\d+/)[0]);
  }
}
