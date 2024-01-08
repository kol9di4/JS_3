var vivod = document.querySelector('.input');
var knopki = document.querySelectorAll('.calc .button');
var number1 = 0;
var znak ='';
var number2 = 0;
for (var i= 0;i<knopki.length;i++)
{
    if(knopki[i].innerHTML>=0){
        knopki[i].onclick = function(){
            if (!(vivod.innerHTML[0]>=0))
                vivod.innerHTML=parseInt(this.innerHTML);
            else
                vivod.innerHTML=parseInt(vivod.innerHTML+this.innerHTML);
        }
    }
    else if(knopki[i].innerHTML=='+' ||
        knopki[i].innerHTML=='-' ||
        knopki[i].innerHTML=='*' ||
        knopki[i].innerHTML=='/')
    {
        knopki[i].onclick = function(){
            number1 = vivod.innerHTML;
            vivod.innerHTML = this.innerHTML;
            znak = this.innerHTML;
            console.log(number1);
        }
    }
}


