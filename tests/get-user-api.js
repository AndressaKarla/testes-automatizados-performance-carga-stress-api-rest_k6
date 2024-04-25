import http from 'k6/http'
import { sleep, check } from 'k6'
import carregarEnvironment from './support/helpers.js'

const baseUri = carregarEnvironment()

export default function () {
    const res = http.get(baseUri)

    check(res, {
        'GET user api - Validar status 200 OK': (r) => r.status === 200
    })

    sleep(1)
}