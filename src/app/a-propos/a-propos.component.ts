import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.css']
})
export class AProposComponent implements OnInit {
  //dateDuJour : Date = new Date();
  dateDuJour : string = (new Date()).toLocaleDateString();
  constructor() { }

  ngOnInit(): void {
  }

}
