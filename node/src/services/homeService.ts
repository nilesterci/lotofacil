import { Request, Response, NextFunction } from "express";
import Customer from "../models/customer";
import homeRepository from "../repositories/homeRepository";

const values = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20",
                "21","22","23","24","25"];

async function getCustomers() {
  return await homeRepository.getCustomers();
}

async function atualizaBanco() {
  return await homeRepository.atualizaBanco();
}

async function retornaResultados() {
  let resultados = await homeRepository.retornaResultados();
  let all;
  resultados?.result.forEach((e) => {
    all = all + "," + e.listaDezenas;
  });

  return count(all);

}

function count(list) {
  let i = list.split(",");
  let all: any[] = [];
  // all.push(i);
  i.shift();
  values.forEach(e => {
    let v = 0;
    v = i.filter(x => x === e).length;
    all.push({value:e, quantity:v});
  });

  return all.sort(function(a, b){
    return b.quantity - a.quantity;
});

  return all.sort();
}

export default {
  getCustomers,
  atualizaBanco,
  retornaResultados,
};
