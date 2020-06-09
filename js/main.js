
function clicou(){
  document.getElementById("agradecimento").innerHTML ="<i>Obrigado por clicar</i>";

  //alert("Obrigado por clicar");
}

function redirecionar(){
  window.open("https://www.google.com.br/?gws_rd=ssl")
  //window.location.href = "https://www.google.com.br/?gws_rd=ssl"
}

function trocar(elemento){
  //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
  elemento.innerHTML = "Obrigado por passar o mouse";
  //alert("trocar texto");
}

function voltar(elemento){
  //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
  elemento.innerHTML = "Passe o mouse aqui";

}

function load(){
  alert("página carregada");
}

function funcaoChange(elemento){
  console.log(elemento.value);

}






// function soma(n1, n2){
//   return n1 + n2;
// }

// function validaIdade(idade){
//   var validar;
//   if(idade >= 18){
//     validar = true;
//   }else{
//     validar = false;
//   }
//   return validar;
// }

// var idade = prompt("Qual a sua idade?");
// console.log(validaIdade(idade));

//alert(soma(5, 10));



// var d = new Date();
// alert(d.getHours());
// alert(d.getMinutes());
// alert(d.getSeconds());


// var count;
// for(count=0; count <= 5; count++){
//   alert(count);
// };




// var count = 0;
// while(count <= 5){
//   console.log(count);
//   alert(count);
//   count++;
// }



// var idade = prompt("Qual a sua idade?");
// if(idade >= 18){
//   alert("maior de idade");
// }else{
//   alert("menor de idade");
// };



// var frutas =[{nome: "maça", cor: "vermelho"}, {nome: "uva", cor: "roxa"}];
// console.log(frutas.nome);
// alert(frutas[1].nome);




// var fruta = {nome: "maça", cor: "vermelho"};
// console.log(fruta.nome);
// alert(fruta.cor);


//var lista = ["maça", "pêra", "laranja"];
// lista.push("uva");// colocar um elemento no array
// lista.pop();// tirar elemento no array
// console.log(lista);
// console.log(lista.toString());
// console.log(lista.join(" - "));

// var nome = "Flávio Félix";
// var n1 = 29;
// var n2 = 5;
// var frase = "Japão melhor time do mundo"
//alert(nome + " tem" + idade + "anos");
//alert(idade + idade2);
// console.log(nome);
// console.log(idade + idade2);
// console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Alemanha"));
