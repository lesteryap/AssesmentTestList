import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class PopUpComponent implements OnInit {
  @Input()
  popUp: { show: boolean; text: String } = {
    show: false,
    text: '',
  };
  @Output()
  popUpChange: EventEmitter<{ show: boolean; text: String }> =
    new EventEmitter<{
      show: boolean;
      text: String;
    }>();

  constructor() {}

  ngOnInit() {}

  closePopUp() {
    this.popUp.show = false;
    this.popUpChange.emit(this.popUp);
  }
}
