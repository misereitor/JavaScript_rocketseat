const $ = document.querySelector.bind(document)
const listaElement = $("#app ul")
const inputElement = $("#app input")
const buttonElement = $("#app button")

let tarefas = [
    "fazer café",
    "dormir",
    "tomar banho"
]

function renderTodos(){
    listaElement.innerHTML = ""
    for (tarefa of tarefas){
        let tarefaElement = document.createElement("li")
        let tarefaText = document.createTextNode(tarefa)

        let linkElement = document.createElement("a")
        linkElement.setAttribute("href", "#")
        let linkText = document.createTextNode("Excluir")


        linkElement.appendChild(linkText)

        tarefaElement.appendChild(tarefaText)
        listaElement.appendChild(tarefaElement)
        listaElement.appendChild(linkElement)
    }
}

renderTodos()

function addTodo(){
    let tarefaText = inputElement.value
    tarefas.push(tarefaText)
    console.log(tarefas)
    renderTodos()
}

buttonElement.onclick = addTodo