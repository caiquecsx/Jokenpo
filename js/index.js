
var counter = 1;

function reply_click(clicked_id)
{
    if(counter == 1){
        document.getElementById('p1').innerHTML = clicked_id;
        counter++;
    }else{
        document.getElementById('p2').innerHTML = clicked_id;
        counter = 1;
    }
}