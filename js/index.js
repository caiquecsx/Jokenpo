
var counter = 1;

function reply_click(clicked_id)
{
    if(counter == 1){
        document.getElementById('p2').innerHTML = null;
        document.getElementById('p1').innerHTML = clicked_id;
        counter++;
    }else{
        document.getElementById('p2').innerHTML = clicked_id;
        var p1 = document.getElementById('p1').innerText;
        var p2 = document.getElementById('p2').innerText;
        
        if(p1 == 'pedra' && p2 == 'papel')
        {
            document.getElementById('result').innerHTML = 'Papel Venceu !';
        }
        if(p1 == 'pedra' && p2 == 'tesoura')
        {
            document.getElementById('result').innerHTML = 'Pedra Venceu !';
        }
        if(p1 == 'papel' && p2 == 'pedra')
        {
            document.getElementById('result').innerHTML = 'Papel Venceu !';
        }
        if(p1 == 'papel' && p2 == 'tesoura')
        {
            document.getElementById('result').innerHTML = 'Tesoura Venceu !';
        }
        if(p1 == 'tesoura' && p2 == 'pedra')
        {
            document.getElementById('result').innerHTML = 'Pedra Venceu !';
        }
        if(p1 == 'tesoura' && p2 == 'papel')
        {
            document.getElementById('result').innerHTML = 'Tesoura Venceu !';
        }
        if(p1 == 'papel' && p2 == 'papel')
        {
            document.getElementById('result').innerHTML = 'Empate !';
        }
        if(p1 == 'pedra' && p2 == 'pedra')
        {
            document.getElementById('result').innerHTML = 'Empate !';
        }
        if(p1 == 'tesoura' && p2 == 'tesoura')
        {
            document.getElementById('result').innerHTML = 'Empate !';
        }


        counter = 1;
    }
}