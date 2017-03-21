import { Injectable } from '@angular/core';

@Injectable()
export class RandomStringService {
  private charSet: string = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  constructor( ) { 

  }

  getRandomString(limit: number): string { 
    if ((!limit) || (limit < 1)) {
      return ""
    }   
    let result: string = "";
    for (let i=0; i < limit; i++ )
        result += this.charSet.charAt(
            Math.floor(Math.random() * this.charSet.length));

    return result;
  }
}
