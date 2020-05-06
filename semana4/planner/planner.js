function novaTarefa(){
    const tarefaNova= document.getElementById("entrada").value
    const selecao= document.getElementById("dia").value
    switch(selecao){
    case 'segunda':
        document.getElementById('segunda').innerHTML+="<li>"+tarefaNova+"</li>"
    break;
    case 'terca':
        document.getElementById('terca').innerHTML+="<li>"+tarefaNova+"</li>"
    break;
    case 'quarta':
        document.getElementById('quarta').innerHTML+="<li>"+tarefaNova+"</li>"
    break;
    case 'quinta':
        document.getElementById('quinta').innerHTML+="<li>"+tarefaNova+"</li>"
    break;
    case 'sexta':
        document.getElementById('sexta').innerHTML+="<li>"+tarefaNova+"</li>"
    break;
    case 'sabado':
        document.getElementById('sabado').innerHTML+="<li>"+tarefaNova+"</li>"
    break;    
    case 'domingo':
        document.getElementById('domingo').innerHTML+="<li>"+tarefaNova+"</li>"
    break;
    }
    
}   

