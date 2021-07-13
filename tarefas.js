let $lista = document.getElementById("lista-tarefas")
let $nome_tarefa = document.getElementById("nova-tarefa-nome")
let $categoria_tarefa = document.getElementById("nova-tarefa-categoria")
let $filtro_tarefa = document.getElementById("filtro-de-categoria")
let $ativas = document.getElementsByClassName("item-tarefa")



///Exercício 0: Representar tarefas
let tarefas = [
    {
        "nome":"Terminar TP de Web",
        "categoria":"estudos",
        "realizada":true
    },
    {
        "nome":"Zerar Zelda breath of the wild ",
        "categoria":"lazer",
        "realizada":false
    },
    {
        "nome":"Comprar Placa de video",
        "categoria":"compras",
        "realizada":false
    }

]


///Exercício 1: Carregar tarefas existentes
const renderiza_tarefas = (tarefas) =>{
    let elementoHTML   
    tarefas.forEach(function(elemento){
        elementoHTML = document.createElement("li")
        elementoHTML.innerHTML=elemento.nome
        elementoHTML.classList.add('item-tarefa')
        if(elemento.realizada)
        elementoHTML.classList.add('marcado')
        $lista.appendChild(elementoHTML)
      })
}

renderiza_tarefas(tarefas)


///Exercício 2: Incluir uma nova tarefa
const adiciona_tarefas = () =>{
    let tarefa =  {
        "nome":$nome_tarefa.value,
        "categoria":$categoria_tarefa.value,
        "realizada":false
    }
    let elementoHTML
    elementoHTML = document.createElement("li")
    elementoHTML.innerHTML=tarefa.nome
    elementoHTML.classList.add('item-tarefa')
    $lista.appendChild(elementoHTML)
    tarefas.push(tarefa)
    $nome_tarefa.value=""
    $nome_tarefa.focus()
}


///Opcional 3: Filtrar por categoria
let filtro = ""

const apagar_tarefas = () =>{
    while($ativas.length){
        $ativas[0].remove()
    }
}

const filtrar_tarefas = ()=>{
    apagar_tarefas()
    filtro = $filtro_tarefa.value
    if(filtro !="")
        renderiza_tarefas(tarefas.filter(filtro_function))
    else
        renderiza_tarefas(tarefas)

}

const filtro_function=(obj)=>{
    return obj.categoria == filtro
}


///Opcional 4: Pressionar "Enter" inclui a tarefa
$nome_tarefa.addEventListener('keydown', function (event) {
    if (event.keyCode !== 13) 
        return;
    adiciona_tarefas()
})


///Opcional 5: Concluir uma tarefa
document.addEventListener("DOMContentLoaded", function(event) {
    let teste =  document.querySelectorAll('.item-tarefa')
    teste.forEach(function(elemento){
        elemento.addEventListener('click',e=>{
            console.log('click')
            if(e.target.classList.contains('marcado')){
                e.target.classList.remove('marcado')
                tarefas.find(item=>item.nome==e.target.innerHTML).realizada=false
            }
            else{
                e.target.classList.add('marcado')
                tarefas.find(item=>item.nome==e.target.innerHTML).realizada=true
            }
        })
    })
});


  
