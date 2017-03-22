import { Component, Inject, OnInit } from '@angular/core';
import { RandomStringToken } from './services/random-string-factory.service';
import { HumanDataToken } from './services/human-data.service';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storageKey = 'storageKey'

  constructor ( 
    private localStorageService: LocalStorageService,
    @Inject(RandomStringToken) private randomString: string,
    @Inject(HumanDataToken) private humanData: Object
  ) {
  }

  ngOnInit(){
    this.localStorageService.set(this.storageKey, 'Seems like it is ok')
  }

  getHumanDataFields() {
    let result: string[] = [];
    if (this.humanData) {
      for (var prop in this.humanData) {
        if (this.humanData.hasOwnProperty(prop)) {
          result.push(prop);        
        }
      }
    }    
    return result;    
  }

  getLocalStorageValue() {
    let value = this.localStorageService.get(this.storageKey);
    return value;
  }

  logClick() {
    console.log('clicked');    
  }

}
