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
import { IonicModule } from '@ionic/angular';
import { TimeLabelComponent } from '../time-label/time-label.component';
import { CircularLabelComponent } from '../circular-label/circular-label.component';
import { ArrowBtnComponent } from '../arrow-btn/arrow-btn.component';
import { ItemApi } from 'src/app/models/api/item-api';

@Component({
  selector: 'app-item-piece',
  templateUrl: './item-piece.component.html',
  styleUrls: ['./item-piece.component.scss'],
  imports: [
    IonicModule,
    CommonModule,
    TimeLabelComponent,
    CircularLabelComponent,
    ArrowBtnComponent,
  ],
  standalone: true,
})
export class ItemPieceComponent implements OnInit {
  @Input()
  item!: ItemApi;

  @Output('onClickItem')
  onItemClick: EventEmitter<ItemApi> = new EventEmitter<ItemApi>();

  constructor() {}

  ngOnInit() {}

  onClickItem() {
    this.onItemClick.emit(this.item);
  }
}
