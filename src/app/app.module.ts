import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AjoutPersonneComponent } from './ajout-personne/ajout-personne.component';
import { ListePersonneComponent } from './liste-personne/liste-personne.component';
import { ContactComponent } from './contact/contact.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { FormsModule } from '@angular/forms';
import { DetailPersonneComponent } from './detail-personne/detail-personne.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AjoutPersonneComponent,
    ListePersonneComponent,
    ContactComponent,
    AProposComponent,
    DetailPersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
