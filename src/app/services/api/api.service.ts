import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { PaginatedItemApi } from 'src/app/models/api/paginated-item-api';
import { ItemApi } from 'src/app/models/api/item-api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpService: HttpService) {}

  readonly items: ItemApi[] = [
    {
      id: '1',
      line1: 'FedEx Office',
      line2: '125 N Office Park Dr',
      header: 'P: 6:00 AM – 6:00 PM',
      additionalInfo: 'None',
    },
    {
      id: '2',
      line1: 'Paper Joint',
      line2: '90 Johnson St Apt 2B',
      header: 'P: 5:00 AM – 9:00 PM',
      additionalInfo: 'Packages 4',
    },
    {
      id: '3',
      line1: 'Audit the Audit',
      line2: '123 Bethesda Drive',
      header: 'P: 5:00 AM – 6:00 PM',
      additionalInfo: 'Leave on Front Door',
    },
    {
      id: '4',
      line1: 'Test Office',
      line2: '12 Main Street',
      header: 'P: 12:00 AM – 6:00 PM',
      additionalInfo: 'NA',
    },
    {
      id: '5',
      line1: 'My Office',
      line2: '100 Johnon Road',
      header: 'P: 6:00 AM – 6:00 PM',
      additionalInfo: 'No Instructions',
    },
    {
      id: '6',
      line1: 'Customer',
      line2: '111 Main St',
      header: 'P: 5:00 AM – 6:00 PM',
      additionalInfo: '-',
    },
    {
      id: '0',
      line1: 'FedEx Office',
      line2: '126 S Office Park Dr',
      header: 'P: 12:00 PM – 4:00 PM',
      additionalInfo: '2 Pickups',
    },
    {
      id: '10',
      line1:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      line2:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
      header: 'P: 12:00 PM – 4:00 PM',
      additionalInfo:
        'qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    },
  ];

  getItems(
    page: number = 0,
    size: number = 10
  ): Observable<PaginatedItemApi | null> {
    let bs: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    // FOR TEST //
    const paginatedItems: PaginatedItemApi = new PaginatedItemApi(
      this.items,
      page,
      size
    );
    setTimeout(() => {
      bs.next(paginatedItems);
    }, 5000);
    // END //

    // Example for fetching real data from an API service
    // this.httpService
    //   .get(`http://EXAMPLE.../v1/PATH?page=${page}&size=${size}`)
    //   .subscribe((res: PaginatedItemApi) => {
    //     bs.next(res);
    //   });

    return bs.asObservable();
  }
}
