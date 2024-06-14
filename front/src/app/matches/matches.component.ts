import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from './matches.service';


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent implements OnInit {

  matches: any[] = [];

  constructor(private matchesService: MatchesService, private router: Router) { }

  navigateToTeams(): void {
    this.router.navigate(['/teams']);
  }
  navigateToChampionships(): void {
    this.router.navigate(['/home']);
  }
  openCreateChampionshipForm(): void {
    this.router.navigate(['/create']);
  }

  ngOnInit(): void {
    this.matchesService.getMatches().subscribe(response => {
      if (response.success) {
        this.matches = response.data;
      }
    });
  }

  toggleExpansion(match: any): void {
    match.expanded = !match.expanded;
  }
}
