import { ActivatedRoute } from '@angular/router';
import { LotofacilService } from './lotofacil.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lotofacil',
  templateUrl: './lotofacil.component.html',
  styleUrls: ['./lotofacil.component.css'],
})
export class LotofacilComponent implements OnInit {
  detail: any;
  detail1: any;
  tudo: any = null;
  ultimos10Sorteios: any = [];
  numeroSorteio: number;

  tipoQuantidade: number = 10;

  constructor(
    public service: LotofacilService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe((params) => {
      this.tipoQuantidade = params['q'] ? params['q'] : 10;

    });

    this.service.numbers().subscribe((retorno) => {
      if (retorno) {
        this.tudo = retorno;

        this.detail = retorno.listaDezenas;
        this.detail1 = this.detail.toString().split(',');
        this.numeroSorteio = retorno.numero;
      }
    });
  }

  getNumberByContest(index: number = 10) {
    this.ultimos10Sorteios = [];
    for (let index = 0; index < this.tipoQuantidade; index++) {
      let sorteio = this.numeroSorteio - index;
      this.service.numbers(sorteio.toString()).subscribe((retorno) => {
        if (retorno) {
          this.ultimos10Sorteios.push(retorno.listaDezenas);
          this.checkSearch(index);
          return retorno;
        }
      });
    }
  }

  generateNumbers(numbers: any) {
    var arr = [];
    while (arr.length < 9) {
      var random = Math.floor(Math.random() * numbers.length);
      arr.push(numbers[random]);
      // if (numbers.indexOf(r.toString()) === -1) numbers.push(r.toString());
    }

    //FUNÇÃO PARA SER USADA CASO OS VALORES SEJAM GERADOS ALEATORIAMENTE, SEM USAR O ULTIMO SORTEIO
    // numbers.forEach((value, index) => {
    //   if (value.length == 1) {
    //     numbers[index] = `0${value}`;
    //   }
    // });

    return arr.sort();
  }

  checkSearch(index: number) {
    console.log("🚀 ~ file: lotofacil.component.ts:73 ~ index:", index)
    if (this.detail && this.tipoQuantidade && index == this.tipoQuantidade - 1) {
      // console.log(index);
      this.refineNumbers();
    }
  }

  refineNumbers() {
    // var quantidadeElementos = this.ultimos10Sorteios[0].filter(x => x == "01").length;

    console.log(this.ultimos10Sorteios.length);

    this.detail.forEach((numero: any) => {
      let sum = 0;
      this.ultimos10Sorteios.forEach((element: any) => {
        let find = element.find((element1: any) => element1 == numero);

        if (find) {
          sum++;
        }

      });
    });
  }
}
