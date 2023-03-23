'use strict'

const mapa = document.querySelector('#map')

const getEstado = ({ target }) => {
    const estado = (target.id.replace('BR-', ''))
    preencherDados(estado)
}
mapa.addEventListener('click', getEstado)