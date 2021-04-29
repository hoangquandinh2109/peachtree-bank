import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '@webapp-env/environment';

// ? RXJS
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private endpoint: any = {
    transactions: `${env.api.apiURL}/${env.api.endpoint.transactions}`
  };
  constructor(
    private httpClient: HttpClient
  ) { }

  // public getTransactions(): Observable<any> {
  //   ! Cannot use because CORS policy problem
  //   return this.httpClient.get(this.endpoint.transactions);
  // }

  public getTransactions(): Observable<any> {
    return this.httpClient.get('/assets/mock-data/transactions.json');
  }
}
