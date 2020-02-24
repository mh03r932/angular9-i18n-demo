import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeEN from '@angular/common/locales/en';
import localeFR from '@angular/common/locales/fr-CH';
import localeDE from '@angular/common/locales/de-CH';

registerLocaleData(localeEN);
registerLocaleData(localeFR, 'fr-CH');
registerLocaleData(localeDE, 'de-CH');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
