import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ImagenHoverComponent } from './components/imagen-hover/imagen-hover.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagenHoverComponent
  ],
  entryComponents: [
    ImagenHoverComponent
  ],
  imports: [
    BrowserModule
  ],
  /* bootstrap: [
    AppComponent
  ] */
})
export class AppModule {
  constructor(private injector: Injector) {
    const imagenHover = createCustomElement(ImagenHoverComponent, { injector });
    customElements.define('app-imagen-hover', imagenHover);
  }

  ngDoBootstrap() { }
}
