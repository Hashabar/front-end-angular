import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChampionshipsComponent } from './championship/championship.component';
import { LoginComponent } from './login/login.component'; // Importe o componente de login
import { MatchesComponent } from './matches/matches.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireciona para /login ao acessar o root da aplicação
  { path: 'login', component: LoginComponent }, // Rota para o componente de login
  { path: 'home', component: ChampionshipsComponent},
  { path: 'teams', component: TeamsComponent},
  { path: 'matches', component: MatchesComponent},
  // { path: 'create', component: CreateChampionshipComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
