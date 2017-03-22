import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RandomStringFactory, RandomStringToken } from './services/random-string-factory.service';
import { RandomStringService } from './services/random-string.service';
import { HumanDataToken, humanData } from './services/human-data.service';
import { LocalStorageService } from './services/local-storage.service';
import { ClickEventDirective } from './click-event.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClickEventDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LocalStorageService,
    RandomStringService,  
    { 
      provide: HumanDataToken,
      useValue: humanData
    },  
    { 
      provide: RandomStringToken,
      useFactory: RandomStringFactory(25),
      deps: [RandomStringService]
    },  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
