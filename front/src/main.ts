import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // Importe o módulo principal AppModule

platformBrowserDynamic().bootstrapModule(AppModule) // Inicializa o AppModule
  .catch(err => console.error(err));
