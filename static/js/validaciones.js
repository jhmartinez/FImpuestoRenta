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
    fields=[];
     $('.input_tabla1').each(function () {
         fields.push($(this));
     });

     $('.select_tabla1').each(function () {
         fields.push($(this).find('option:selected'));
     });
     return validar_fields(fields);
};

validar_paso4 = function () {
    fields=[];

    if($('#tieneAnualidades').prop('checked')){
        fields.push($('#inputAnualidades') );
    }

    if($('#tienePensiones').prop('checked')){
        fields.push($('#inputImporte') );
    }


    return validar_fields(fields);
};

validar_paso5 = function () {
    fields=[ $('#inputFecha_firma') ];
    control= validar_fields(fields) && !$('.div_firma').hasClass('oculto');

    return control;
};

validar_fields = function (fields) {
    control=true;
    fields.forEach(function (field) {
        if(field.val() == "" ||field.val() == 0){
            control=false;
            change_class_field(field,'has-success','has-error');
        }
        else{
            change_class_field(field,'has-error','has-success');
        }
    });
    return control;
};


change_class_field=function (field,before,after) {
        if(field.prop("tagName")== 'OPTION'){
                field.parent().parent().removeClass(before).addClass(after);
            }
        else{
               field.parent().removeClass(before).addClass(after);
           }
};


