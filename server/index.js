import app from './app.js'
import { conectionSequelize } from './database/db.js'
import { fakeData } from './faker/index.js'

import './models/index.js'

const main = async () => {
  try {
    await conectionSequelize.sync({ force: false })
    if (+process.argv[2]) fakeData()

    app.listen(app.get('port'), () => {
      console.log(`🆗✅🆗 Server on port ${app.get('port')} 🆗✅🆗`)
    })
  } catch (err) {
    console.error(`🛑⛔ Not connection database ❗${err}❗ ⛔🛑`)
  }
}

main()
