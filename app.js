function pesquisar(){
  // Seleciona a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  // Inicializa uma string vazia para armazenar os resultados HTML
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";
  
  //valida se o campo de pesquisa está vazio
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar um atleta ou esporte</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()
  // Itera sobre cada item de dados e constrói o HTML correspondente
  for (let dado of dados) {
    titulo = dado.titulo.toLocaleLowerCase();
    descricao = dado.descricao.toLocaleLowerCase();
    tags = dado.tags.toLocaleLowerCase();
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
      // Cria um novo elemento de resultado
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.instagram}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link_info}" target="_blank">Mais informações</a>
        </div>
      `;
    }
  }
  // Atualiza o conteúdo da seção HTML com os resultados construídos
  if (!resultados){
    resultados = "<p>Atleta ou esporte não encontrado </p>" 
  }

  section.innerHTML = resultados;
}