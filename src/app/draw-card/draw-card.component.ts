import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {
  MatSnackBar
} from '@angular/material/snack-bar';



@Component({
  selector: 'app-draw-card',
  templateUrl: './draw-card.component.html',
  styleUrls: ['./draw-card.component.css']
})
export class DrawCardComponent implements OnInit {
  showLoader: boolean;
  showEmptyCardMsg: boolean;
  isDisabled: boolean;
  isDeckCreated: boolean;

  constructor(public appService : AppService,
    private _snackBar: MatSnackBar) { }
  deck_id:any;
  card:any;
  ngOnInit(): void {

  }
  resetDeck()
  {
    this.showLoader = true;
    this.showEmptyCardMsg = false;
    this.isDisabled = false;
    this.isDeckCreated = false;
  
    this.appService.getNewDeck().subscribe(res =>{
      this.showLoader = false;
      this.deck_id = res.deck_id
    
      this._snackBar.open('New deck created', 'End now', {
          duration: 2000,
        });
      
    })
  }

  drawCard()
  {
    this.showLoader = true;
    this.isDeckCreated = true;
    this.appService.getDrawCard(this.deck_id).subscribe(res =>{
      this.showLoader = false;
      console.log(res.remaining)
      if(res.remaining == 0)
      {
            this.showEmptyCardMsg = true;
            this.isDisabled = true;
      }
      else{
        this.card = res.cards[0].images.png
      }
    
   
    })
  }
 

}
