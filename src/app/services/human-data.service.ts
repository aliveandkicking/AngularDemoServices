import { OpaqueToken } from '@angular/core';

export const humanData = {
  gender: 'male',
  age: 32,
  height: 185,
  weight: 81,
  bodyFat: 32
}

export const HumanDataToken = new OpaqueToken('HumanData')
