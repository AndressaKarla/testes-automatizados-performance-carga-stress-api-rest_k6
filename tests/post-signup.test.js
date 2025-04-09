import http from 'k6/http'
import { sleep, check } from 'k6'
import carregarEnvironment from './support/utils.js'
import { gerarEmail, gerarSenha } from './support/utils.js'

const baseUri = carregarEnvironment()

export default function () {
    const email = gerarEmail()
    const senha = gerarSenha()

    const body = JSON.stringify(
        {
            email: email,
            password: senha
        }
    )

    const headers = {
        'headers': { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
        }
    }

    const emailEsperado = email
    const res = http.post(`${baseUri}/signup`, body, headers)

    check(res, {
        'POST signup - Validar status 201 Created': (r) => r.status === 201,
        '- Validar campo id retornado com sucesso': (r) => r.json('_id') !== null, 
        '- Validar campo email retornado com sucesso': (r) => r.json('email') === `${emailEsperado}` 
    })

    sleep(1)
}