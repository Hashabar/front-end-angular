import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from './teams.model';
import { TeamsService } from './teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})

  export class TeamsComponent implements OnInit {
    teams: Team[] = [];
  
    constructor(private teamsService: TeamsService, private router: Router) {
      // console.log('teamsComponent construído!');
    }
  
    navigateToChampionships(): void {
      this.router.navigate(['/home']);
    }

    navigateToMatches(): void {
      this.router.navigate(['/matches']);
    }
  
    ngOnInit(): void {
      this.getTeams();
    }
  
    getTeams() {
      this.teamsService.getTeams().subscribe(
        teams => {
          this.teams = teams;
        },
        error => {
          console.error('Erro ao carregar times:', error);
        }
      );
    }
}

