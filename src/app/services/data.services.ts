import { Injectable } from '@angular/core';
import { Modeldata } from '../model/model';
import { BookStore } from '../mock/mock';

@Injectable()


export class DataService{
    constructor(){}
    bookData: Modeldata[];
    
    getData(){
        this.bookData = BookStore.slice();
        return this.bookData;
    }
    editDataSend(i){
        return this.bookData[i];
    }
}