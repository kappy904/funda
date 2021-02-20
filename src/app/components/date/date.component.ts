import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  @Input() date: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  sanitizeDate(date: any): Date {
    return this.date = (date.match(/\d+/)[0]);
  }
}
