import { Component, OnInit } from '@angular/core';
import { faSort, faSortAlphaUpAlt } from '@fortawesome/free-solid-svg-icons';
import { zip } from 'rxjs';
import Names from '../Data/names.json';


@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})
export class NameListComponent implements OnInit {

  nameList: [{name:string, amount:number}] = Names.names;
  orderOfNames = "amount";
  direction = 1;
  faSort = faSort;
  searched="";
  totalAmount=0;

  constructor() { }

  reverseOrder() {
    this.direction = this.direction*-1;
  }

  ngOnInit(): void {
  }

  sumOfNames() {
    var qty=0;
    this.nameList.forEach((element) => {
      qty += element.amount;
    })
    return qty;
  }

  amountOfSearched() {
    if(this.searched != ""){
      let obj = this.nameList.find(z => z.name.toUpperCase() == this.searched.toUpperCase())
      if(obj == null) {
        return 0;
      } else {
        return obj.amount;
      }
    }
    return -1;
  }

  highlight(name) {
    return name.toUpperCase() === this.searched.toUpperCase() ? 'red' : '';
    }
  }



