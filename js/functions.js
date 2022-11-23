





function puntuaciones(catid, idelemento, media, cuantas, div, importancia) {

        nuevo_html = '';

	// Ahora primero lo de cuantos han puntuado

        nuevo_html = nuevo_html+'<span class="textoligero">';
        if (cuantas == 'N')
        {       
          nuevo_html = nuevo_html+"Sin puntuar";
          media = '0';
        } else {
          if (cuantas == '1')
          {
            nuevo_html = nuevo_html+cuantas+ " puntuaci&oacute;n";
          } else {
            nuevo_html = nuevo_html+cuantas+ " puntuaciones";
          }
        }
        nuevo_html = nuevo_html+'</span> &nbsp;';


 	// Ahora primero la puntuacion antigua. Cogemos media.

        num = 0;
        j = 5;
        mediainicial = media;
        while (media > 0)
        {
          num = num + 1;
          if (media < 1)
          {
            nuevo_html = nuevo_html+'<img src="images/estrella_mitad.gif"';
            nuevo_html = nuevo_html+' onmouseover="estrellas(';
            nuevo_html = nuevo_html+"'";
            nuevo_html = nuevo_html+catid+"','"+idelemento+"','";
            nuevo_html = nuevo_html+mediainicial+"','"+cuantas+"','"+num+"','"+div+"','"+importancia+"')";
            nuevo_html = nuevo_html+'">';
          } else {
            nuevo_html = nuevo_html+'<img src="images/estrella_llena.gif"';
            nuevo_html = nuevo_html+' onmouseover="estrellas(';
            nuevo_html = nuevo_html+"'";
            nuevo_html = nuevo_html+catid+"','"+idelemento+"','";
            nuevo_html = nuevo_html+mediainicial+"','"+cuantas+"','"+num+"','"+div+"','"+importancia+"')";
            nuevo_html = nuevo_html+'">';
          }
          media = media - 2;
          j = j - 1;
        }
        
        for (i = 1 ; i <= j; i++)
        {
            num = num + 1;
            nuevo_html = nuevo_html+'<img src="images/estrella_vacia.gif"';
            nuevo_html = nuevo_html+' onmouseover="estrellas(';
            nuevo_html = nuevo_html+"'";
            nuevo_html = nuevo_html+catid+"','"+idelemento+"','";
            nuevo_html = nuevo_html+mediainicial+"','"+cuantas+"','"+num+"','"+div+"','"+importancia+"')";
            nuevo_html = nuevo_html+'">';

        }
        



        document.getElementById(div).innerHTML = nuevo_html;

}


function estrellas(catid, idelemento, media, cuantas, puntos, div, importancia) {
        
        nuevo_html = '';

        nuevo_html = '<span class="textoligero">';
        switch(puntos)
        {
          case "1":
           nuevo_html = nuevo_html+'Deficiente ';
	   break;
          case "2":
           nuevo_html = nuevo_html+'Nada especial ';
	   break;
          case "3":
           nuevo_html = nuevo_html+'Vale la pena ';
	   break;
          case "4":
           nuevo_html = nuevo_html+'Bueno ';
	   break;
          case "5":
           nuevo_html = nuevo_html+'Excelente ';
	   break;
	  default:
	   break;
        }
        nuevo_html = nuevo_html+'</span>';

        for (i = 1; i <= 5; i++)
        {
          nuevo_html = nuevo_html+'<a href="index.php?catid='+catid+'&accion=puntuar&importancia='+importancia+'&idelemento='+idelemento+'&puntos='+i+'">';
          if (i <= puntos)
          {
            nuevo_html = nuevo_html+'<img src="images/estrella_llena.gif" border="0"';
          } else {
            nuevo_html = nuevo_html+'<img src="images/estrella_vacia.gif" border="0"';
          }

//          nuevo_html = nuevo_html+'onmouseover="estrellas(';
//          nuevo_html = nuevo_html+"'";
//          nuevo_html = nuevo_html+catid;
//          nuevo_html = nuevo_html+"',";
//          nuevo_html = nuevo_html+"'";
//          nuevo_html = nuevo_html+idelemento;
//          nuevo_html = nuevo_html+"',";
//          nuevo_html = nuevo_html+"'";
//          nuevo_html = nuevo_html+media;
//          nuevo_html = nuevo_html+"',";
//          nuevo_html = nuevo_html+"'";
//          nuevo_html = nuevo_html+cuantas;
//          nuevo_html = nuevo_html+"',";
//          nuevo_html = nuevo_html+"'";
//          nuevo_html = nuevo_html+i;
//          nuevo_html = nuevo_html+"','";
//          nuevo_html = nuevo_html+div;
//          nuevo_html = nuevo_html+"')";
//          nuevo_html = nuevo_html+'"';

          nuevo_html = nuevo_html+' onmouseout="puntuaciones(';
          nuevo_html = nuevo_html+"'";
          nuevo_html = nuevo_html+catid;
          nuevo_html = nuevo_html+"',";
          nuevo_html = nuevo_html+"'";
          nuevo_html = nuevo_html+idelemento;
          nuevo_html = nuevo_html+"',";
          nuevo_html = nuevo_html+"'";
          nuevo_html = nuevo_html+media;
          nuevo_html = nuevo_html+"',";
          nuevo_html = nuevo_html+"'";
          nuevo_html = nuevo_html+cuantas;
          nuevo_html = nuevo_html+"',";
          nuevo_html = nuevo_html+"'";
          nuevo_html = nuevo_html+div;
          nuevo_html = nuevo_html+"',";
          nuevo_html = nuevo_html+"'";
          nuevo_html = nuevo_html+importancia;
          nuevo_html = nuevo_html+"')";
          nuevo_html = nuevo_html+'"';

          nuevo_html = nuevo_html+'>';


          nuevo_html = nuevo_html+'</a>';

        }

        document.getElementById(div).innerHTML = nuevo_html;
      
}





function objetoAjax(){
        var xmlhttp=false;
        try {
                xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
                try {
                   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (E) {
                        xmlhttp = false;
                }
        }

        if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
                xmlhttp = new XMLHttpRequest();
        }
        return xmlhttp;
}

function resultado(datos,destino){


        divResultado = document.getElementById(destino);
        ajax=objetoAjax();
        ajax.open("GET", datos);
        ajax.onreadystatechange=function() {
                if (ajax.readyState==4) {
                        divResultado.innerHTML = ajax.responseText
                }
        }
        ajax.send(null);









}


function resultadoForm(url, formid){


         var Formulario = document.getElementById(formid);
         var longitudFormulario = Formulario.elements.length;
         var cadenaFormulario = ""
         var sepCampos
         sepCampos = ""
         for (var i=0; i <= Formulario.elements.length-1;i++) {
                         //Si estamos en los checkbox de servicios, vemos cuales est�n checkeados
                         if (Formulario.elements[i].name == 'servicios') {
                                 if (Formulario.elements[i].checked == true) {
                                         cadenaFormulario += sepCampos+Formulario.elements[i].name+'='+encodeURI(Formulario.elements[i].value);
                                 }
                         }
                         //... si no, adjuntamos el par�metro=valor en la cadena
                         else {
                        cadenaFormulario += sepCampos+Formulario.elements[i].name+'='+encodeURI(Formulario.elements[i].value);
                         }
             sepCampos="&";
                  }
  peticion=objetoAjax(); // roma
  peticion.open("POST", url, true);
  peticion.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=ISO-8859-1');
  peticion.onreadystatechange = function () {
        document.location.href='#r';
        if (peticion.readyState == 4) {
     document.getElementById('resultados').innerHTML = peticion.responseText;
         //document.location.href='#r';
         tb_init($("#resultados")[0]); // roma
        }
  }

        peticion.send(cadenaFormulario);






}




