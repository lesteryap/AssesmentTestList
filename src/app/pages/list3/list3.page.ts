import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TimeLabelComponent } from 'src/app/components/dumb/time-label/time-label.component';
import { CircularLabelComponent } from 'src/app/components/dumb/circular-label/circular-label.component';
import { ArrowBtnComponent } from 'src/app/components/dumb/arrow-btn/arrow-btn.component';

@Component({
  selector: 'app-list3',
  templateUrl: './list3.page.html',
  styleUrls: ['./list3.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TimeLabelComponent,
    CircularLabelComponent,
    ArrowBtnComponent,
  ],
})
export class List3Page implements OnInit {
  constructor() {}

  ngOnInit() {}
}
