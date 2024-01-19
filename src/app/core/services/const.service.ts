import { Injectable } from '@angular/core';

export interface IConstOption {
  title: string;
  value: number;
}

@Injectable({
  providedIn: 'root',
})
export class ConstsService {}
