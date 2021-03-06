import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
/**
 * App routes config
 */
import {ROUTING} from './app.routes';
/*
 * Platform and Environment providers/directives/pipes
 */
// App is our top level component
import {AppComponent} from './app.component';
import {CoreModule} from './core';
import {SharedModule} from './shared';

// Application wide providers
const APP_PROVIDERS = [
];

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    ROUTING
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ...APP_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
