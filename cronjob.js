const CronJob = require('cron').CronJob
const axios = require('axios').default;
require('dotenv').config()



 async function start() {
  const countrys = process.env.COUNTY.toUpperCase()
  const country = countrys.split(',')
  country.forEach(country => {
      createIds(country)
   });

 }

async function createIds(country) {
     const result = await axios({
            url: `/channels/${country}`,
            method:"get",
            baseURL:'https://youtube-api-tcc.herokuapp.com/tcc/',
            auth: {
                username: process.env.USERNAME,
                password: process.env.PASSWORD
              }
        })     
    
    console.log(`Terminou[${new Date()}]pais ${result.data.country} `)
  }

new CronJob(process.env.CRONTAB, ()=>{
  console.log(`Iniciando CronJob data:${ new Date()}`)
  start()
  },null,true,'America/Sao_Paulo')
  