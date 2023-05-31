import dotenv from 'dotenv';
dotenv.config();

const  config = {
    user:  `${process.env.USER || null}`, // sql user
    password:  `${process.env.PASSWORD || null}`, //sql user password
    server:  `${process.env.SERVER || null}`, // if it does not work try- localhost
    database:  `${process.env.DATABASE || null}`,
    options: {
      trustedconnection:  true,
      enableArithAbort:  true,
      trustServerCertificate: true
    },
    port:  1433
  }
  
  module.exports = config;