function insert(num)
{
 var numero =   document.getElementById('results').innerHTML;
 document.getElementById('results').innerHTML = numero +num;
}
function clean()
{ 
    document.getElementById('results').innerHTML = "";
}
function back()
{
        var resultado = document.getElementById('results').innerHTML;
        document.getElementById('results').innerHTML = resultado.substring(0,resultado.length -1)
}
function iqual(){
    var resultado = document.getElementById('results').innerHTML;
        if(resultado){
            document.getElementById('results').innerHTML =eval(resultado);
        }
        else{
            document.getElementById('results').innerHTML = "ERROR..."
        }
}