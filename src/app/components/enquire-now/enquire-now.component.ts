import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-enquire-now',
  templateUrl: './enquire-now.component.html',
  styleUrls: ['./enquire-now.component.scss']
})
export class EnquireNowComponent {
  @Input() date: any;
  @Input() agent: string | undefined;
  @Input() agentNumber: number | undefined;

  sanitizeDate(date: any): Date {
    return this.date = (date.match(/\d+/)[0]);
  }
}
