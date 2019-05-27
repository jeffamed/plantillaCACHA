$(function(){
   // captura de pantalla
   $(window).resize(function(){
      var anchop = $(window).width();
      console.log(anchop);
      if(anchop<=768){
         $("#contenido-enc").addClass("justify-content-between");
      } else{
         $("#contenido-enc").removeClass("justify-content-between");
      }

      if(anchop<=767){
         $("#logo").addClass("justify-content-between");
      } else{
         $("#logo").removeClass("justify-content-between");
      }
   });
});

$(document).ready(function(){

   // botones de despliegue 
   $("#btnInicio").click(function(){
      if($("#flecha_izq").hasClass("fa-angle-right")){

         $("#flecha_izq").removeClass("fa-angle-right pull-right");
         $("#flecha_izq").addClass("fa-angle-down pull-right");
      }else{
         $("#flecha_izq").removeClass("fa-angle-down pull-right");
         $("#flecha_izq").addClass("fa-angle-right pull-right");
      }
   });
   $("#btnUbicacion").click(function(){
      if($("#flecha").hasClass("fa-angle-right")){

         $("#flecha").removeClass("fa-angle-right pull-right");
         $("#flecha").addClass("fa-angle-down pull-right");
      }else{
         $("#flecha").removeClass("fa-angle-down pull-right");
         $("#flecha").addClass("fa-angle-right pull-right");
      }
   });
   $("#btnfacturacion").click(function(){
      if($("#flecha1").hasClass("fa-angle-right")){

         $("#flecha1").removeClass("fa-angle-right pull-right");
         $("#flecha1").addClass("fa-angle-down pull-right");
      }else{
         $("#flecha1").removeClass("fa-angle-down pull-right");
         $("#flecha1").addClass("fa-angle-right pull-right");
      }
   });
   
   // Tabla ordernar tabla
   // $('#tabla').DataTable();  
   $("#tabla").tablesorter();

// Funcionamiento del tooltip de bootstrap
   $('[data-toggle="tooltip"]').tooltip();

   // Funcionamiento de la Fecha Datepicker
   // cambio de idioma
   $.datepicker.regional['es']={
      closeText: 'Cerrar',
      prevText: '< Ant',
      nextText: 'Sig >',
      currentText: 'Hoy',
      monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
      monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
      dayNamesShort: ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],
      dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
      weelHeader: 'Sm',
      dateFormat: 'dd/mm/yy',
      firstDay: 1,
      minDate: 0, // deshabilita los dias pasados
      showButtonPanel: true, //botones de hoy y cerrar
      // defaultDate: true,
      isRTL: false,
      showMonthAfterYear: false,
      YearSuffix: ''
   };
   
   $.datepicker.setDefaults($.datepicker.regional['es']);
   $("#dpFecha").datepicker();

});
