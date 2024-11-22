import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: '', component: HomeComponent,},
    { path: 'inscription', component: InscriptionComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: 'profile', component: ProfileComponent },   
  
];
