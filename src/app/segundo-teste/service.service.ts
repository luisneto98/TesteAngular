import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  constructor() { }

  getNames(){
    return ['nome1', 'nome2' , 'nome3'];
  }

}
