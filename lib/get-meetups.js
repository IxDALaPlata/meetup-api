const makeRequest = require('./make-request')
const queryOptions = {
    query: {
        country: 'ar',
        key: process.env.MEETUP_API_KEY,
        topic_id: process.env.TOPICS_ID,
        lat: process.env.LAT,
        lon: process.env.LON,
        radius: process.env.RADIUS,
        sign: true
    }
}

// devuelve una promesa a un array de meetups
module.exports = function getMeetups() {
    return makeRequest('https://api.meetup.com/find/groups', queryOptions)
}