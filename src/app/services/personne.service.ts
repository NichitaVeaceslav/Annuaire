import { Injectable } from '@angular/core';
import { Personne } from '../models/Personne';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compteur } from '../models/compteur';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  //Options nécessaires pour certains appels http
  private httpOptions = {
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json' }
    )
  }

  //La base URL de l'api REST sur les entités Personnes
  private apiUrl : string = 'http://localhost:3000/api/Personnes';

  constructor(private http: HttpClient) { }
  /**
   * Returne un observale capable de produire 
   * un tableau d'objets Personne à partir de la source
   * de données.
   * @returns un observabme qui produira le tableau.
   */
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.apiUrl);
  }

  /**
   * Retourne un observable capable de ajouter dans la source de
   * donnée et de produire un objet Personne
   * contenant son id en base.
   * @param personneAAjouter Un objet contenant les informations 
   *                        nécessaire pout créer une personne en base.
   * @returns un observable qui produira un objet Personne.
   */
  ajouterPersonne(p: Personne): Observable<Personne>{
    return this.http.post<Personne>(this.apiUrl, p , this.httpOptions);
  }

  /**
  * Supprime 
  * Retourne un observable capable de supprimer de la 
  * source de données la personne ayant un l'id
  * de l'objet fourni.
  * @param personneASupprimer L'objet Personne qu'on veut supprimer
  *       en base.
  * @returns un observable qui produira un objet Compteur résumant
  *   le sésultat de l'opération de suppression.
  *   { count: }, count contient le nombre de lignes supprimées
  *   dans la source de données.
  *   
  */
  supprimePersonne(personneASupprimer: Personne): Observable<Compteur> {
    return this.http.delete<Compteur>
      (this.apiUrl+ '/' + personneASupprimer.id,
        this.httpOptions);
        
  }
}
