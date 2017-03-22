import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {  
  private localStorage: Storage;

  constructor() {
    this.localStorage = 
      ((typeof(Storage) !== "undefined") ? localStorage : null);
  }

  get(key: string) {
    if (!this.localStorage) {
      return null
    }

    return localStorage.getItem(key)
  }

  set(key: string, value: string) {
    if (!this.localStorage) {
      return null
    }

    return localStorage.setItem(key, value)
  }

}
