import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Compteur } from '../models/compteur';
import { Personne } from '../models/Personne';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css']
})
export class DetailPersonneComponent implements OnInit {

  //pers est un attribut possible pour
  //l'element app-detail-personne
  @Input() pers !: Personne;
  personneService: PersonneService;
  //On declare un nouvel evenement (qu'on purra declencher en envoyant alors
  // un objet Personne)
  @Output() suppressionPersonne = new EventEmitter<Personne>();


  constructor(private ps: PersonneService) {
    this.personneService = ps;

  }

  ngOnInit(): void {
  }

  /**
   * Supprimer une personne 
   * en l'occurence correspond ici à la variable d'instance
   */
  /* Accès direct
  onClickBoutonSuppression() {
    console.log(this.pers);
  }*/
  onClickBoutonSuppression() {
    this.ps.supprimePersonne(this.pers).subscribe(
      (o: Compteur) => {
        //déclanche la mise à jour de l'affichage du composant parent
        this.suppressionPersonne.emit(this.pers);
        console.log(o);
      }

    );

  }

}
