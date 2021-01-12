import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
