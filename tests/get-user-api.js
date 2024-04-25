import http from 'k6/http'
import { sleep, check } from 'k6'

const environment = __ENV['ENVIRONMENT'] || 'local'
const config = JSON.parse(open(`./support/environments/${environment}.json`))
const baseUri = config.baseUri

export const options = {
    vus: 10,
    duration: '30s',
}

export default function () {
    const res = http.get(baseUri)

    check(res, {
        'GET user api - Validar status 200 OK': (r) => r.status === 200
    })

    sleep(1)
}