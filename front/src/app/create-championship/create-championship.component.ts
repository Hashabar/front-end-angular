// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { createChampionshipSend } from './create-championship.service';

// @Component({
//   selector: 'app-create-championship',
//   templateUrl: './create-championship.component.html',
//   styleUrl: './create-championship.component.css'
// })
// export class CreateChampionshipComponent {

//   navigateToTeams(): void {
//     this.router.navigate(['/teams']);
//   }
//   navigateToMatches(): void {
//     this.router.navigate(['/matches']);
//   }
//   newChampionship = {
//     name: '',
//     teams: ['', '', '', '', '', '', '', '']
//   };
//   error: string = '';

//   constructor(private createChampionshipSend: createChampionshipSend, private router: Router) {
//     console.log('LoginComponent constructed!');
//    }

//   createChampionship() {
//     this.createChampionshipSend.postMatches(this.newChampionship).subscribe(
//         response => {
//           console.log('Cadastro Sucesso!:', response);
//           this.router.navigateByUrl('/home');
//         },
//         error => {
//           console.error('Login error:', error);
//           this.error = 'error!';
//         }
//       );
//   }
// }
