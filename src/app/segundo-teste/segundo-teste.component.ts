import { Component, OnInit } from '@angular/core';
import {ServiceService} from './service.service';

@Component({
  selector: 'app-segundo-teste',
  templateUrl: './segundo-teste.component.html',
  styleUrls: ['./segundo-teste.component.css']
})
export class SegundoTesteComponent implements OnInit {
  teste: string [];
  constructor(private service: ServiceService) {
    this.teste = this.service.getNames();
  }

  ngOnInit() {
  }

}
