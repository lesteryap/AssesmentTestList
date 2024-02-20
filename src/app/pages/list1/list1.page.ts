import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollCustomEvent, IonicModule } from '@ionic/angular';
import { TimeLabelComponent } from 'src/app/components/dumb/time-label/time-label.component';
import { CircularLabelComponent } from 'src/app/components/dumb/circular-label/circular-label.component';
import { ArrowBtnComponent } from 'src/app/components/dumb/arrow-btn/arrow-btn.component';
import { ItemPieceComponent } from 'src/app/components/dumb/item-piece/item-piece.component';
import { PopUpComponent } from 'src/app/components/dumb/pop-up/pop-up.component';
import { ApiService } from 'src/app/services/api/api.service';
import { PaginatedItemApi } from 'src/app/models/api/paginated-item-api';
import { ItemApi } from 'src/app/models/api/item-api';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.page.html',
  styleUrls: ['./list1.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ItemPieceComponent,
    PopUpComponent,
  ],
})
export class List1Page implements OnInit {
  popUp: { show: boolean; text: String } = {
    show: false,
    text: '',
  };

  paginatedItem?: PaginatedItemApi;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getItems().subscribe((paginatedItem) => {
      paginatedItem && (this.paginatedItem = structuredClone(paginatedItem));
    });
  }

  onClickItem(event: ItemApi) {
    this.popUp.show = true;
    event.additionalInfo && (this.popUp.text = event.additionalInfo);
  }

  onIonInfinite(event: any) {
    this.getMoreItem(event);
  }

  private getMoreItem(event: InfiniteScrollCustomEvent) {
    this.apiService.getItems().subscribe((paginatedItem) => {
      if (paginatedItem && paginatedItem.items) {
        this.paginatedItem?.items?.push(...paginatedItem.items);
        (event as InfiniteScrollCustomEvent).target.complete();
      }
    });
  }
}
