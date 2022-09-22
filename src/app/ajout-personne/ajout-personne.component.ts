import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personne } from '../models/Personne';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-ajout-personne',
  templateUrl: './ajout-personne.component.html',
  styleUrls: ['./ajout-personne.component.css']
})
export class AjoutPersonneComponent implements OnInit {

  personneService: PersonneService;

  constructor(private ps: PersonneService) {
    this.personneService = ps;
  }

  ngOnInit(): void {
  }
  /**
   * Traite la soumission du formulaire 
   * d'ajout d'un personne.
   * @param form Le contenu du formulaier
   */
onSoumissionFormulaire(form: NgForm) {
    console.log(form.value);
    this.personneService.ajouterPersonne( 
      this.formValueToPersonne(form.value) ).subscribe(
        (p : Personne) => {
          console.log("J'ai ajouter la personne", p);
        }
      );
  }

  formValueToPersonne(v: any) : Personne {
    /*
    assert(('nom' in form.value)
      && ('prenom' in form.value)
      && ('telephone' in form.value))
    */ 
    return {
      nom: v.nom,
      prenom: v.prenom,
      tel: v.telephone
    } as Personne;
  }
}
