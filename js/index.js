
var counter = 1;
var player1;
var player2;

function reply_click(clicked_id)
{
    if(counter == 1){
        document.getElementById('p1').innerHTML = null;
        document.getElementById('p2').innerHTML = null;
        //document.getElementById('p1').innerHTML = clicked_id;
        player1 = clicked_id;
        counter++;
    }else{
        document.getElementById('p2').innerHTML = clicked_id;
        document.getElementById('p1').innerHTML = player1;
        var p1 = document.getElementById('p1').innerText;
        var p2 = document.getElementById('p2').innerText;
        
        if(p1 == 'Rock' && p2 == 'Paper')
        {
            document.getElementById('result').innerHTML = 'Paper Wins !';
        }
        if(p1 == 'Rock' && p2 == 'Scissors')
        {
            document.getElementById('result').innerHTML = 'Rock Wins !';
        }
        if(p1 == 'Paper' && p2 == 'Rock')
        {
            document.getElementById('result').innerHTML = 'Paper Wins !';
        }
        if(p1 == 'Paper' && p2 == 'Scissors')
        {
            document.getElementById('result').innerHTML = 'Scissors Wins !';
        }
        if(p1 == 'Scissors' && p2 == 'Rock')
        {
            document.getElementById('result').innerHTML = 'Rock Wins !';
        }
        if(p1 == 'Scissors' && p2 == 'Paper')
        {
            document.getElementById('result').innerHTML = 'Scissors Wins !';
        }
        if(p1 == 'Paper' && p2 == 'Paper')
        {
            document.getElementById('result').innerHTML = 'Draw !';
        }
        if(p1 == 'Rock' && p2 == 'Rock')
        {
            document.getElementById('result').innerHTML = 'Draw !';
        }
        if(p1 == 'Scissors' && p2 == 'Scissors')
        {
            document.getElementById('result').innerHTML = 'Draw !';
        }


        counter = 1;
    }
}