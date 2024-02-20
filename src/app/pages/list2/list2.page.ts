import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItemPieceComponent } from 'src/app/components/dumb/item-piece/item-piece.component';
import { PopUpComponent } from 'src/app/components/dumb/pop-up/pop-up.component';
import { PaginatedItemApi } from 'src/app/models/api/paginated-item-api';
import { ApiService } from 'src/app/services/api/api.service';
import { ItemApi } from 'src/app/models/api/item-api';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.page.html',
  styleUrls: ['./list2.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ItemPieceComponent,
    PopUpComponent,
  ],
})
export class List2Page implements OnInit {
  popUp: { show: boolean; text: String } = {
    show: false,
    text: '',
  };

  paginatedItem?: PaginatedItemApi;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.paginatedItem = new PaginatedItemApi();
    this.paginatedItem.items = this.apiService.items;
  }

  onClickItem(event: ItemApi) {
    this.popUp.show = true;
    event.additionalInfo && (this.popUp.text = event.additionalInfo);
  }
}
