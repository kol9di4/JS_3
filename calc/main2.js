var buttons = document.querySelectorAll(".calc button");
for (var i = 0; i <buttons.length; i++ )
{
    buttons[i].onmousedown = function(){
        this.classList.add('mousedown');
    }
    buttons[i].onmouseup = function(){
        this.classList.remove('mousedown');
    }
    buttons[i].onmouseout = function(){
        this.classList.remove('mousedown');
    }
} 
/******************************************************************** */

