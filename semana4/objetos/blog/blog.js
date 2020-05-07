let posts =[]
function pegarInfo(event){
    event.preventDefault()
    let tituloTexto= document.getElementById('titulo').value
    let post= document.getElementById('texto').value
    let autor= document.getElementById('nome').value
    console.log(tituloTexto,post,autor)

    const infoPost={
        titulo:[tituloTexto],
        texto: [post],
        nome:[autor]

    }
    posts.push(infoPost)
    console.log(posts)
    
    let publicar= infoPost

    document.getElementById('Feed').innerHTML+="<p>"+publicar+"<p>"
 
}

  
 