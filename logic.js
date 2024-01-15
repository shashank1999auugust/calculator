var Buttons = document.querySelector(".buttons");
var result  = document.querySelector(".result");
// variable

var str = "";

Buttons.addEventListener("click",function (e) {
    var btn = e.target;


    if (btn.className == "button resetBtn") {
        init () ;
    } else if (btn.className == "button number" ||btn.className == "button number dot" || btn.className == "button operator") { 
        console.log(btn.className.indexOf ("number"));
        console.log(btn.innerHTML);

        str += btn.innerHTML;
        result.innerHTML = str;
    } else if (btn.className  == "button  equality") {
        str = eval(str);

        result.innerHTML = str;
    } else {

    }
}, false)


function init (){ 
    result.innerHTML = "00";
    str = "";
}

