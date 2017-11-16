$(document).ready(function() {});

function validar(paso) {
    control=false;
    switch(paso){

        case 1:{
            control=validar_paso1();
            break;
        }

        case 2:{
            control=validar_paso2();
            break;
        }
        case 3:{
            control=validar_paso3();
            break;
        }
        case 4:{
            control=validar_paso4();
            break;
        }
        case 5:{
            control=validar_paso5();
            break;
        }
        case 6:{
            control=validar_paso6();
            break;
        }

        default:
            break;
    }

    return control;
}



validar_paso1 = function () {
  control=true;

  if($('#inputApellidos').val() == "" ){
      $('#inputApellidos').parent().addClass('has-error');
      control=false;
  }
  if($('#inputNombre').val() == "" ){
      $('#inputNombre').parent().addClass('has-error');
      control=false;
  }
  if($('#inputNIF').val() == "" ){
      $('#inputNIF').parent().addClass('has-error');
      control=false;
  }

  if($('#inputNIF').val() == "" ){
      $('#inputNIF').parent().addClass('has-error');
      control=false;
  }

  if($('#movilidadGeografica').val() == "" ){
      $('#movilidadGeografica').parent().addClass('has-error');
      control=false;
  }

  if($('#situacionFamiliar option:selected').val() == 0){
      $('#situacionFamiliar').parent().addClass('has-error');
      control=false;
  }
  return control;
};








validar_paso2 = function () {
    control=true;

     $('.input_tabla').each(function () {
         if($(this).val() == ""){
              //input.parent().addClass('has-error');
              control=false;
          }
     });


    return control;
};


validar_paso3 = function () {
    control=true;
    return control;
};

validar_paso4 = function () {
    control=true;
    return control;

};

validar_paso5 = function () {
    control=true;
    return control;

};



validar_paso6 = function () {
    control=true;
    return control;

};




