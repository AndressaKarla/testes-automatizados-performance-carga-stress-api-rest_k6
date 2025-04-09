import http from 'k6/http'
import { sleep, check } from 'k6'
import carregarEnvironment from './support/utils.js'

const baseUri = carregarEnvironment()

export default function () {
    const res = http.get(baseUri)

    check(res, {
        'GET user api - Validar status 200 OK': (r) => r.status === 200,
        '- Validar campo app retornado com sucesso': (r) => r.json('app') == 'User API by Papito',
    })

    sleep(1)
}