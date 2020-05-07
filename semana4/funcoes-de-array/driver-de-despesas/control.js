let listaDespesas=[]

function cadastrar(event){
    event.preventDefault()
    let inputValor = document.getElementById('valor')
    console.log(inputValor.value)
    let selectDespesa = document.getElementById('despesa-cadastro')
    let inputDescricao = document.getElementById('descricao')
    console.log(inputDescricao.value)
    
    let cadastro={
        valor: inputValor.value,
        tipo: selectDespesa.value, 
        descricao: inputDescricao.value
    }
    listaDespesas.push(cadastro)
    console.log(listaDespesas)

    if(inputValor.value===""||inputDescricao.value===""){
        alert("Preencha os campos")
    }

    document.getElementById('valor').value=""
    document.getElementById('descricao').value=""
}
function filtrar(event){
    event.preventDefault()
    let inputValor = document.getElementById('valor')
    console.log(inputValor.value)
    let selectDespesa = document.getElementById('despesa-cadastro')
    let inputDescricao = document.getElementById('descricao')
    console.log(inputDescricao.value)
}