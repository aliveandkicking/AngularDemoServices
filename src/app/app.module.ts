import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RandomStringFactory, RandomStringToken } from './services/random-string-factory.service';
import { RandomStringService } from './services/random-string.service';
import { HUMAN_DATA, humanData } from './services/human-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    RandomStringService,  
    { 
      provide: HUMAN_DATA,
      useValue: humanData
    },  
    { 
      provide: RandomStringToken,
      useFactory: RandomStringFactory(10),
      deps: [RandomStringService]
    },  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
