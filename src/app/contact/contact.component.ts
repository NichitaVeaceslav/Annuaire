import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  nom: string = "Veaceslav Nichita";
  contactEmail: string = 'veaceslav.nichita@gmail.com';
  constructor() { }

  ngOnInit(): void {
  }

}
