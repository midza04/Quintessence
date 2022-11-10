import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../services/common.service";
import {Observable} from "rxjs";

export interface Stocks {
  id?: number,
  stock: string,
  industry: string,
  sector: string,
  currency_code: string,
}

export interface StocksDetail {
  stock_id?: number,
  value: string,
  date: string,
}
@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stock!: Stocks[];
  stocksAll!: Stocks[];
  page = 1;
  pageSize = 3;
  collectionSize!: number;
  currentRate = 8;
  searchTerm!: Observable<any>;
  stockDetail!: StocksDetail[];
  private APIUrl ='https://localhost:7170/api/Stocks/';

  constructor(private _common:CommonService) { }

  ngOnInit(): void {
    this.getAllStocks();
  }

  getAllStocks(){
    this._common.getAllData(this.APIUrl).subscribe(stocks=>{
      this.stocksAll=stocks;
      this.stock=stocks;
      this.collectionSize =this.stocksAll.length;
    })
  }
  get stocks(): Stocks[] {
    return this.stocksAll
      .map((stock, i) => ({id: i + 1, ...stock}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  getStocksValue(stock: Stocks) {
    this._common.getAllData(this.APIUrl+stock.id).subscribe(stocks=>{
      this.stockDetail=stocks;
      console.log(this.stockDetail)
    })
  }

  search(searchitem: any): void {
    let search =searchitem.value.toLowerCase();
    console.log(search);
    this.stocksAll = this.stock.filter((val) =>
      val.stock.toLowerCase().includes(search) ||
      val.currency_code.toLowerCase().includes(search) ||
      val.sector.toLowerCase().includes(search) ||
      val.industry.toLowerCase().includes(search)
    );
    this.collectionSize =this.stocksAll.length;
  }
}
