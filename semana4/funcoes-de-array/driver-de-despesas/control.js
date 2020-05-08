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
     selectDetalhes= document.getElementById('despesa-detahe')
    let valorMin= document.getElementById('valor-minimo')
    let valorMax= document.getElementById('valor-maximo')
    let valores= listaDespesas.filter((cadastro)=>{
        if(valorMin!=='' && valorMax!==''){
             if( (cadastro.selectDespesa.value===selectDetalhes.value && cadastro.inputValor.value== valorMin,value) ||
            cadastro.inputValor.value==valorMax.value)
                return true;
        }  
         else {
                return false;
        }
    })
    document.getElementById('listar').innerHTML+="<li>"+ valores+"</li>"
}
function limpar(event){
    event.preventDefault()
    document.getElementById('valor-minimo').value=""
    document.getElementById('valor-maximo').value=""
}
function extrato(event){
    event.preventDefault()
    document.getElementById('imprimir').innerHTML+="<li>"+listaDespesas+"</li>"
}
