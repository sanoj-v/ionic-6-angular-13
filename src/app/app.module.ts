import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomSideMenuModule } from './feature/custom-side-menu/custom-side-menu.module';
import { StartupService } from './service/startup.service';


export function initConfiguration(startupService: StartupService) {
  return () => startupService.load();
}

@NgModule({
  declarations: [AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CustomSideMenuModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: initConfiguration,
      multi: true,
      deps: [StartupService]
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log("=======>", "Before Application");
  }

}
