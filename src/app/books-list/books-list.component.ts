import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.services';
import { Modeldata } from '../model/model';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor(private dataService: DataService) { }
  dataBook: Modeldata[]; 
  bookeditReceived: Modeldata;
  bookeditReceivedCopyCancel: Modeldata;
  order: string = 'name';
  tempName = null;
  tempAuthor = null;
  tempnumberOfPages = null;
  tempDateOfPublication = null;

  ngOnInit() {
    this.dataBook = this.dataService.getData();
  }
  valueChanger(event,i){
    this.tempName = event.target.value;
    // this.dataService.editDataSend(i).name = event.target.value;
  }
  valueAuthorChanger(event,i){
    this.tempAuthor =  event.target.value;
    // this.dataService.editDataSend(i).author =  event.target.value;
  }
  valuePagesChanger(event,i){
    this.tempnumberOfPages =  event.target.value;
    // this.dataService.editDataSend(i).numberOfPages =  event.target.value;
  }
  valuePublicationChanger(event,i){
    this.tempDateOfPublication =  event.target.value;
    // this.dataService.editDataSend(i).dateOfPublication =  event.target.value;
  }
  onEdit(i){
    for(let x of this.dataBook){
      x.edit = false;
    }
    this.bookeditReceivedCopyCancel =Object.assign({},this.dataService.editDataSend(i));
    this.bookeditReceived =this.dataService.editDataSend(i);
    this.bookeditReceived.edit = true;
  }
  onSave(i){
    if(this.tempName != null){
    this.dataService.editDataSend(i).name = this.tempName;}
    if(this.tempAuthor != null){
    this.dataService.editDataSend(i).author = this.tempAuthor;}
    if(this.tempnumberOfPages != null){
    this.dataService.editDataSend(i).numberOfPages = this.tempnumberOfPages;}
    if(this.tempDateOfPublication != null){
    this.dataService.editDataSend(i).dateOfPublication = this.tempDateOfPublication;}
    this.dataService.editDataSend(i).edit = false;

  }
  onCancel(i){
    this.bookeditReceived.name = this.bookeditReceivedCopyCancel.name;
    this.bookeditReceived.author = this.bookeditReceivedCopyCancel.author;
    this.bookeditReceived.numberOfPages = this.bookeditReceivedCopyCancel.numberOfPages;
    this.bookeditReceived.dateOfPublication = this.bookeditReceivedCopyCancel.dateOfPublication;
    this.dataService.editDataSend(i).edit = false;
  }

}
