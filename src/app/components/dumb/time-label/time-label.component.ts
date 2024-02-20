import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-label',
  templateUrl: './time-label.component.html',
  styleUrls: ['./time-label.component.scss'],
  standalone: true,
})
export class TimeLabelComponent implements OnInit {
  @Input()
  text?: String;

  constructor() {}

  ngOnInit() {}
}
