var config = require("../dbconfig");
var axios = require("axios");
const sql = require("mssql");
import * as https from "https";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

async function getCustomers() {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().execute("BuscaNumeros");
    return result.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function atualizaBanco1(contador = 0) {
  axios
    .get(
      `https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil/${contador}`,
      { httpsAgent }
    )
    .then((response: any) => {
      if (response.status == 200) {
        retornaSorteio(response.data);
        atualizaBanco1(contador + 1);
      } else {
        console.log("🚀 ~ errror:");
        return "errror!";
      }
    })
    .catch((err: any) => {
      return err.response.status;
    });
}

async function retornaSorteio(sorteio) {
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .input("intNumero", sql.Int, parseInt(sorteio.numero))
      .input("strListaDezenas", sql.NVarChar, sorteio.listaDezenas.toString())
      .input("dteDataApuracao", sql.DateTime, convertDate(sorteio.dataApuracao))
      .input(
        "dteDataProximoConcurso",
        sql.DateTime,
        convertDate(sorteio.dataProximoConcurso)
      )
      .execute("AtualizaBanco");
    return result.recordsets[0][0].result;
  } catch (error) {
    console.log(error);
  }
}

async function atualizaBanco() {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().execute("RetornaUltimoSorteio");

    var cad = await atualizaBanco1(
      result.recordsets[0][0].ultimosorteioregistrado
    );

    return cad;
  } catch (error) {
    console.log(1111, error);
  }
}

function convertDate(dateString) {
  var dateParts = dateString.split("/");

  // month is 0-based, that's why we need dataParts[1] - 1
  var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
  return dateObject;
}

export default {
  getCustomers,
  atualizaBanco,
};
