import { LotofacilService } from './lotofacil.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lotofacil',
  templateUrl: './lotofacil.component.html',
  styleUrls: ['./lotofacil.component.css']
})
export class LotofacilComponent implements OnInit {
  detail: any;
  detail1: any;
  tudo: any;

  constructor(public service: LotofacilService) { }

  ngOnInit(): void {
    this.service.numbers().subscribe((retorno) => {
      this.tudo = retorno;
      this.detail =  retorno.listaDezenas;
      this.detail1 = this.detail.toString().split(",");
    });

  }

}
