import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/Personne';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-liste-personne',
  templateUrl: './liste-personne.component.html',
  styleUrls: ['./liste-personne.component.css']
})
export class ListePersonneComponent implements OnInit {

  //Table des Personnes à afficherdverf
  personnesAAfficher: Personne[] = [];
  personneService : PersonneService;
  //Injection de la dépendance (récup de singleton PersonneService)
  //un sigleton est un objet unique dans sa classe
  constructor(private ps: PersonneService) {
    //remplir le liste de personnes à afficher avec les données fournies par le service
    this.personneService = ps;
    //this.personnesAAfficher = ps.personneService.getPersonnes();
    this.majPersonnesAAfficher();
  }

  ngOnInit(): void {
  }
  onSuppressionPersonne(){
    this.majPersonnesAAfficher();
  }
  /**
   * Met à jour l'affichage la liste dees personnes
   */
  majPersonnesAAfficher(){
    this.personneService.getPersonnes().subscribe(
      //truc à faire qd la liste des personnes sera produite
      (personnes : Personne[]) => {
        this.personnesAAfficher = personnes;
      }
    );
    
  }
}
