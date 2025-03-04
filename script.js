const btn=document.getElementById('btn')
let handler=false
btn.addEventListener('click',()=>cambiarColores())
function cambiarColores(){
    
    let div=document.getElementById('divRafa');
    div.className='div'
    if(handler!=true){
        handler=true
        div.style.backgroundColor='black'
        btn.style.color='white'

    }else{
        handler=false

        div.style.backgroundColor='white'
        btn.style.color='black'
    }
}