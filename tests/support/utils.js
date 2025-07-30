import faker from 'k6/x/faker'

const carregarEnvironment = function () {
    const environment = __ENV['ENVIRONMENT'] || 'local'
    const config = JSON.parse(open(`./support/environments/${environment}.json`))

    return config.baseUri
}

function gerarNumerosAleatorios(qtdeDigitos) {
  var text = "";
  var possible = "0123456789";

  for (var i = 0; i < qtdeDigitos; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function gerarNomeSobrenome () {
    var nome = [
        "Alice",
        "Amanda",
        "Ana",
        "André",
        "Anthony",
        "Arthur",
        "Augusto",
        "Beatriz",
        "Benjamin",
        "Bernardo",
        "Bianca",
        "Breno",
        "Caio",
        "Camila",
        "Carla",
        "Carolina",
        "Catarina",
        "Cecília",
        "Clara",
        "Daniel",
        "Davi",
        "Diego",
        "Eduardo",
        "Emanuelly",
        "Enzo",
        "Evelyn",
        "Fábio",
        "Felipe",
        "Fernando",
        "Francisco",
        "Gabriel",
        "Gabriela",
        "Guilherme",
        "Gustavo",
        "Helena",
        "Henrique",
        "Isabel",
        "Isabela",
        "Isabella",
        "Isadora",
        "Joana",
        "João",
        "Júlia",
        "Juliana",
        "Kevin",
        "Laís",
        "Lara",
        "Larissa",
        "Laura",
        "Lavinia",
        "Leonardo",
        "Letícia",
        "Lívia",
        "Lorena",
        "Lorenzo",
        "Luana",
        "Lucas",
        "Lucca",
        "Luciano",
        "Luiza",
        "Luna",
        "Manuela",
        "Marcelo",
        "Maria",
        "Mariana",
        "Mariane",
        "Melissa",
        "Miguel",
        "Mirella",
        "Murilo",
        "Natália",
        "Nathália",
        "Nicolas",
        "Otávio",
        "Paulo",
        "Pedro",
        "Pietra",
        "Rafael",
        "Raul",
        "Rebeca",
        "Ricardo",
        "Roberto",
        "Rodrigo",
        "Ruan",
        "Samuel",
        "Sofia",
        "Sophia",
        "Stella",
        "Thiago",
        "Tomás",
        "Valentina",
        "Vinícius",
        "Vitor",
        "Vitória",
        "Yasmin"
    ]

    var nomeAleatorio = nome[Math.floor(Math.random() * nome.length)]

    var sobrenome = [
        "Abreu",
        "Aguiar",
        "Albuquerque",
        "Almeida",
        "Alves",
        "Andrade",
        "Araújo",
        "Azevedo",
        "Barbosa",
        "Barros",
        "Batista",
        "Borges",
        "Braga",
        "Campos",
        "Cardoso",
        "Carneiro",
        "Carvalho",
        "Castro",
        "Cavalcante",
        "Cavalcanti",
        "Coelho",
        "Correia",
        "Costa",
        "Coutinho",
        "Cruz",
        "Cunha",
        "Dantas",
        "Dias",
        "Farias",
        "Fernandes",
        "Ferreira",
        "Fialho",
        "Figueiredo",
        "Fonseca",
        "Freitas",
        "Furtado",
        "Gomes",
        "Gonçalves",
        "Goulart",
        "Gusmão",
        "Leite",
        "Lemos",
        "Lima",
        "Lopes",
        "Macedo",
        "Machado",
        "Marques",
        "Martins",
        "Melo",
        "Mendes",
        "Monteiro",
        "Moraes",
        "Morais",
        "Moreira",
        "Moura",
        "Neves",
        "Nogueira",
        "Nunes",
        "Oliveira",
        "Pacheco",
        "Peixoto",
        "Pereira",
        "Pires",
        "Prado",
        "Ramos",
        "Rezende",
        "Ribeiro",
        "Rocha",
        "Rodrigues",
        "Sales",
        "Sampaio",
        "Santos",
        "Saraiva",
        "Silva",
        "Silveira",
        "Sousa",
        "Souza",
        "Tavares",
        "Teixeira",
        "Valente",
        "Vargas",
        "Vieira",
        "Xavier"
    ]

    var sobrenomeAleatorio = sobrenome[Math.floor(Math.random() * sobrenome.length)]
    var nomeSobrenome = nomeAleatorio + " " + sobrenomeAleatorio

    return nomeSobrenome
}

export const gerarEmail = function () {
    var dominioEmail = [
        "@gmail.com",
        "@outlook.com",
        "@yahoo.com",
        "@icloud.com",
        "@protonmail.com",
        "@hotmail.com.br"
    ]

    var dominioEmailAleatorio = dominioEmail[Math.floor(Math.random() * dominioEmail.length)]
    var nomeSobrenome = gerarNomeSobrenome()
    var nomeSobrenomeNormalizado = nomeSobrenome.toLowerCase().replace(/\s/g, ".").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    var email = nomeSobrenomeNormalizado + 
     "."  + gerarNumerosAleatorios(5) + dominioEmailAleatorio;

    return email
}

export const gerarSenha = function () {
    var senha = faker.internet.password(true, false, true, true, false, 5)

    return senha
}

export default carregarEnvironment