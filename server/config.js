require('dotenv').config()

const options = {
  port: process.env.PORT,
  app: process.env.APP,
  env: process.env.NODE_ENV,
  isSocketsEnabled: process.env.ENABLE_SOCKETS,
  googleApiKey: process.env.GOOGLE_API_KEY,
  breweryApiKey: process.env.BREWERY_API_KEY,
  googleCalendarApiKey: process.env.GOOGLE_CALENDAR_API_KEY,
  calendarId: process.env.CALENDAR_ID
}

export default options
