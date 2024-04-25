const carregarEnvironment = function () {
    const environment = __ENV['ENVIRONMENT'] || 'local'
    const config = JSON.parse(open(`./support/environments/${environment}.json`))

    return config.baseUri
}

export default carregarEnvironment