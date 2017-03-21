import { Injectable } from '@angular/core';

@Injectable()
export class RandomStringService {
  private charSet: string = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  private length: number = 10;

  constructor() { }

  getRandomString() {    
    let result = "";
    for (let i=0; i < 5; i++ )
        result += this.charSet.charAt(
            Math.floor(Math.random() * result.length));
    return result;
  }
}
