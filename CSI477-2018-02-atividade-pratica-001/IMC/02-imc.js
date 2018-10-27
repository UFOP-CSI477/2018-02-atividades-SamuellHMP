function validarCampo(campo, grupo, alerta) {

  console.log("validarCampo: " + campo + " " + grupo + " " + alerta);

  var valor1 = parseFloat($(campo).val());

  if (isNaN(valor1)) {
      $(alerta).slideDown();
      $(grupo).addClass("has-error");
      $(campo).val("");
      $(campo).focus();
      return false;
  }

  $(grupo).removeClass("has-error");
  $(alerta).hide();
  return true;
}



$(document).ready(function(){

  console.log("Documento carregado.");

  $("#peso").blur(function(){
    validarCampo("#peso", "#gPeso", "#alertaP");
  });
  $("#altura").blur(function(){
    validarCampo("#altura", "#gAltura", "#alertaA");
  });


  $("button[name='calculo']").click(function(){

   if (validarCampo("#peso", "#gPeso", "#alertaP") &&
        validarCampo("#altura", "#gAltura", "#alertaA")) {
          
          var peso = parseFloat($("#peso").val());
          var altura = parseFloat($("#altura").val());

          var res = (peso / (altura * altura));
		  var cla = "";
		  if(res < 18.5){
				cla = "Subnutrição";
			}else if(res >= 18.5 && res < 25){
				cla = "Peso Saudável";
			}else if(res >= 25 && res < 30){
				cla = "Sobrepeso";
			}else if(res >= 30 && res < 35){
				cla = "Obesidade grau 1";
			}else if(res >= 35 && res < 40){
				cla = "Obesidade grau 2";
			}else if(res >= 40){
				cla = "Obesidade grau 3";
			}
          var sau1 = (altura * altura) * 18.5;
		  var sau2 = (altura * altura) * 24.9;

          $("input[name='res']").val(res);
		  $("input[name='cla']").val(cla);
          $("input[name='sau1']").val(sau1);
		  $("input[name='sau2']").val(sau2);
        }

  });

});