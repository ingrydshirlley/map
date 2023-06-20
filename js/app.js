'use strict'

const mapa = document.querySelector('#map')


const getEstado = async ({ target }) => {
  const estado = target.id.replace('BR-', '')
  const dadosEstado = await preencherDados(estado)

  preencherTela(dadosEstado)
}


const preencherTela = async (dadosEstado) => {
  const titleHeader = document.querySelector('.sigla span')
  titleHeader.textContent = dadosEstado.uf

  const nameEstado = document.querySelector('.nome-estado')
  nameEstado.textContent = dadosEstado.descricao

  const nameRegiao = document.querySelector('.info-regiao')
  nameRegiao.textContent = dadosEstado.regiao

  const nameCapital = document.querySelector('.info-capital')
  nameCapital.textContent = dadosEstado.capital

  const cidadeContent = document.querySelector('.coluna-cidades');
  let cidadesString = '';
  dadosEstado.cidades.forEach(function (cidade) {
    cidadesString += cidade + '\n';
  });
  cidadeContent.value = cidadesString;
}

const preencherDados = async (sigla) => {

  const url = `https://api-mapa.onrender.com/v1/senai/cidades?uf=${sigla}`
  const response = await fetch(url)
  const data = await response.json()

  return data

}

mapa.addEventListener('click', getEstado)