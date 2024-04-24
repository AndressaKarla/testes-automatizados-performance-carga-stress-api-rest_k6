import http from 'k6/http'
import { sleep } from 'k6'

const environment = __ENV['ENVIRONMENT'] || 'local'
const config = JSON.parse(open(`./support/environments/${environment}.json`))
const baseUri = config.baseUri

export const options = {
    vus: 10,
    duration: '30s',
}

export default function () {
    http.get(baseUri)
    sleep(1)
}