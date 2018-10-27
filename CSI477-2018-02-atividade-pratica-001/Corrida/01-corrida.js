function Competidor(largada, nome, tempo) {
  this.largada = largada;
  this.nome = nome;
  this.tempo = tempo;
}

function registrar() {
  
  var l1 = 1; var n1 = $("#nome1").val(); var t1 = $("#tempo1").val();

  var l2 = 2; var n2 = $("#nome2").val(); var t2 = $("#tempo2").val();

  var l3 = 3; var n3 = $("#nome3").val(); var t3 = $("#tempo3").val();

  var l4 = 4; var n4 = $("#nome4").val(); var t4 = $("#tempo4").val();

  var l5 = 5; var n5 = $("#nome5").val(); var t5 = $("#tempo5").val();

  var l6 = 6; var n6 = $("#nome6").val(); var t6 = $("#tempo6").val();

  var competidores = [

    {"largada": l1,"nome":n1,"tempo":t1},
    {"largada": l2,"nome":n2,"tempo":t2},
    {"largada": l3,"nome":n3,"tempo":t3},
    {"largada": l4,"nome":n4,"tempo":t4},
    {"largada": l5,"nome":n5,"tempo":t5},
    {"largada": l6,"nome":n6,"tempo":t6}

  ];

  competidores.sort(function(obj1,obj2){

    return obj1.tempo - obj2.tempo;

  });
  
  var tabela = $("#tabela");
  var j = 0;
  var vencedor = "";

  for (var i = 0; i < competidores.length; i++){
    if(competidores[i].tempo !== ""){
      j++;
      if(j == 1){
        vencedor = "Vencedor(a)!";

      }
      else{
        vencedor = "";
      }
      var tr = "<tr>" +
                  "<td>" + j + "</td>" +
                  "<td>" + competidores[i].nome + "</td>" +
                  "<td>" + competidores[i].tempo + "</td>" +
                  "<td>" + competidores[i].largada + "</td>" +
                  "<td>" + vencedor + "</td>" +
               "</tr>";


      tabela.append(tr);

    }

 }

}
