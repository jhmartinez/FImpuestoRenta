$(document).ready(function() {});

validar = function (paso) {
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
};

validar_paso1 = function () {
  fields=[ $('#inputApellidos'), $('#inputNombre'), $('#inputNIF'), $('#inputNacimiento'), $('#movilidadGeografica'), $('#situacionFamiliar option:selected') ];
  return validar_fields(fields);
};

validar_paso2 = function () {
     fields=[];
     $('.input_tabla').each(function () {
         fields.push($(this));
     });

     $('.select_tabla').each(function () {
         fields.push($(this).find('option:selected'));
     });
     return validar_fields(fields);
};

validar_paso3 = function () {
    control=true;
    return control;
};

validar_paso4 = function () {
    fields=[ $('#inputImporte'), $('#inputAnualidades') ];
    return validar_fields(fields);
};

validar_paso5 = function () {
    control=true;
    return control;

};

validar_paso6 = function () {
    fields=[ $('#inputFecha_firma') ];
    control= validar_fields(fields) && $('#btn_firma').hasClass('hidden');
    if($('#btn_firma').hasClass('hidden')== false){
        $('#btn_firma').removeClass('btn-success').addClass('btn-danger');
    }
    else {
        $('#btn_firma').removeClass('btn-danger').addClass('btn-success');
    }

    return control;
};

validar_fields = function (fields) {
    control=true;
    fields.forEach(function (field) {
        if(field.val() == "" ){
            field.parent().addClass('has-error');
            control=false;
        }

        if(field.val() == 0){
            field.parent().addClass('has-error').parent().addClass('has-error');
            control=false;
        }
    });
    return control;
};

