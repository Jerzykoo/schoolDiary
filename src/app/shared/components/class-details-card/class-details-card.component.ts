import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class-details-card',
  templateUrl: './class-details-card.component.html',
})
export class ClassDetailsCardComponent {
  @Input() public data!: any;
  @Input() public subjectsNumber!: any;
  @Input() public studentsNumber!: any;
  constructor(public route: ActivatedRoute) {}
}
