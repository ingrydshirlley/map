'use strict'

export const getDadosEstado = async(sigla) => {
    const url = `http://localhost:8080/estado/${sigla}`
    const response = await fetch(url)
    const data = await response.json()

    return {
        estado: data.descricao,
        capital: data.capital,
        regiao: data.regiao
    }
}

export const getCidadesEstado = async(sigla) => {
    const url = `http://localhost:8080/v1/cidades/${sigla}`
    const response = await fetch(url)
    const data = await response.json()

    return {
        cidades: data.cidades
    }
}