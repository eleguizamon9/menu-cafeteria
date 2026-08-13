import { ApplicationConfig, provideBrowserGlobalErrorListeners, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// 1. Importamos la herramienta de conexión
import { provideHttpClient } from '@angular/common/http';

// 2. Importamos y registramos el formato numérico colombiano
import { registerLocaleData } from '@angular/common';
import localeEsCo from '@angular/common/locales/es-CO';

registerLocaleData(localeEsCo);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // 3. Encendemos el comunicador para toda la aplicación
    provideHttpClient(),
    // 4. Definimos es-CO como idioma por defecto (separador de miles con punto)
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ]
};