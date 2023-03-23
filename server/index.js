import app from './app.js'
import { conectionSequelize } from './database/db.js'

const main = async () => {
  try {
    await conectionSequelize.sync({ force: false })

    app.listen(app.get('port'), () => {
      console.log(`🆗🆗 Server on port ${app.get('port')} 🆗🆗`)
    })
  } catch (err) {
    console.error(`Not conection database ${err}`)
  }
}

main()
