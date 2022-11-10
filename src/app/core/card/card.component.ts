import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //Inputs
  @Input('card-title') cardTitle: string = "";
  @Input('card-actions') actions: any[] = [];
  @Input('card-icon') cardIcon: string = "";
  @Input('show-close') showClose: boolean = true;
  @Input('card-close') cardClose: any;
  @Input('isLoading') loading: boolean = true;
  @Input('loading-text') loadingText: string= "";


  constructor(
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }

  close(){
    this.router.navigateByUrl(this.cardClose);
  }

}
