const CronJob = require('cron').CronJob
const axios = require('axios').default;
require('dotenv').config()

async function start() {
  const countrys = `${process.env.COUNTYS}`.toUpperCase().trim().split(',')
  countrys.forEach(country => {
    createIds(country)
  });

}

async function createIds(country) {

  try {
    const result = await axios({
      url: `/channels/${country}`,
      method: "get",
      baseURL: 'https://youtube-api-tcc.herokuapp.com/tcc/',
      auth: {
        username: 'youtube-tcc',
        password: 'BG@nI2AdmrdH'
      }
    })

    if (result.status >= 200 && result.status < 300) {
      console.log(`Terminou[${new Date()}]pais ${result.data.country} `)
    }
  } catch (error) {
    console.error(error)
  }
}

new CronJob("1/2 * * * *", () => {
  console.log(`Iniciando CronJob data:${new Date()}`)
  start()
}, null, true, 'America/Sao_Paulo')
