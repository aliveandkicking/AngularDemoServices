import { OpaqueToken } from '@angular/core';
import { RandomStringService } from './random-string.service';

export const RandomStringToken = new OpaqueToken('RandomString');

export function RandomStringFactory(limit: number) {
  return function(randomStringService: RandomStringService): string {
    return randomStringService.getRandomString(limit)
  };
}
