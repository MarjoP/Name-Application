import { Component, OnInit } from '@angular/core';
import { faSort, faSortAlphaUpAlt } from '@fortawesome/free-solid-svg-icons';
import Names from '../Data/names.json';


@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})
export class NameListComponent implements OnInit {

  nameList: [] = Names.names;
  orderOfNames = "amount";
  direction = 1;
  faSort = faSort;

  constructor() { }

  reverseOrder() {
    this.direction = this.direction*-1;
  }


  ngOnInit(): void {
  }

}
