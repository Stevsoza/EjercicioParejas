var suma = document.getElementById("sum");
var div = document.getElementById("divi");
var mult = document.getElementById("multi");


suma.addEventListener("click",()=>{
    var resultado = parseInt(document.getElementById("num1").value) + parseInt(document.getElementById("num2").value);
    document.getElementById("res").value = resultado; 
});

div.addEventListener("click",()=>{
    var resultado = parseInt(document.getElementById("num3").value) / parseInt(document.getElementById("num4").value);
    document.getElementById("res2").value = resultado; 
});

mult.addEventListener("click",()=>{
    var resultado = parseInt(document.getElementById("num5").value) * parseInt(document.getElementById("num6").value);
    document.getElementById("res3").value = resultado;   
});


