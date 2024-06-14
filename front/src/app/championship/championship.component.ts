import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Championship } from './championship.model';
import { ChampionshipService } from './championship.service';

@Component({
  selector: 'app-championships',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css']
})
export class ChampionshipsComponent implements OnInit {
  championships: Championship[] = [];

  constructor(private championshipService: ChampionshipService, private router: Router) {
    // console.log('ChampionshipsComponent construído!');
  }

  navigateToTeams(): void {
    this.router.navigate(['/teams']);
  }
  navigateToMatches(): void {
    this.router.navigate(['/matches']);
  }

  ngOnInit(): void {
    this.loadChampionships();
  }

  loadChampionships() {
    this.championshipService.getChampionships().subscribe(
      championships => {
        this.championships = championships;
      },
      error => {
        console.error('Erro ao carregar campeonatos:', error);
      }
    );
  }
}
