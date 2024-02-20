import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular-label',
  templateUrl: './circular-label.component.html',
  styleUrls: ['./circular-label.component.scss'],
  standalone: true,
})
export class CircularLabelComponent implements OnInit {

  @Input()
  text?: String;

  constructor() {}

  ngOnInit() {}
}
