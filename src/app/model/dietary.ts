import { Injectable } from '@angular/core';

export type Diet = { id: number; food: string;};

@Injectable()
export class Dietary{
  dietary : Diet[] = [
    { id: 0, food: 'Regular'}
  ]
}