import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  isActive = false;
  @Input() address: string | undefined;
  @Input() price: number | undefined;
  @Input() heroImage: string | undefined;
  @Input() year: string | undefined;
  @Input() place: string | undefined;
  @Input() postcode: string | undefined;
  @Input() agentNumber: string | undefined;
  @Input() description: string | undefined;

  onReadMore(): boolean {
    return this.isActive = !this.isActive;
  }
}
