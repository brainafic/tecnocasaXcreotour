$(document).ready(function(){$("#login").length&&(jQuery.validator.addMethod("checkUser",function(a,e){var i="email="+a,r=!1;return $.ajax({type:"POST",async:!1,url:baseUrlLingua+areaPrivataUrl+"/ajax/controlloUser",data:i,success:function(a){"esiste"==a&&(r=!0)}}),r},nessunUtente),$("#login").validate({ignore:[],rules:{email:{required:!0,verifyemail:!0},psw:{required:!0}},messages:{psw:{required:aLang.inserirePassword}}})),$("#RecuperaPassword").length&&(jQuery.validator.addMethod("checkUser",function(a,e){var i="email="+$("#email").val(),r=!1;return $.ajax({type:"POST",async:!1,url:baseUrlLingua+areaPrivataUrl+"/ajax/controlloUser",data:i,success:function(a){"esiste"==a&&(r=!0)}}),r},aLang.erroreAutenticazione),$("#RecuperaPassword").validate({ignore:[],rules:{email:{required:!0,verifyemail:!0,checkUser:!0}}}),$(".container_buttonPsw").on("click","#invia_recupera_psw",function(){$("#RecuperaPassword").submit(function(a){$("#RecuperaPassword").valid()&&($("#invia_recupera_psw").css("background","#81C54F"),$("#invia_recupera_psw").attr("disabled",!0),$("#overlay").fadeIn("slow"))})})),$("#accedi").on("click","#ButtonLogin",function(){if($("#login").valid()){var a=$("#login").serialize(),o=$("#modalLogin .loader");o.stop().fadeIn(300),$.ajax({type:"POST",url:baseUrlLingua+areaPrivataUrl+"/ajax/login",data:a,dataType:"json",success:function(a){if(console.log(a),a){var e="";if(""!=$("#idNascontiCant").val())var i="IDCantiere="+(e=$("#idNascontiCant").val());else i="IDImmobile="+(e=$("#idNascontiImm").val());if(e)$.ajax({type:"POST",async:!1,url:baseUrlLingua+areaPrivataUrl+"/ajax/salvaNascondi",data:i,success:function(a){"ok"==a&&($("#modalLogin").modal("hide"),setTimeout(function(){$("#contRow"+e).fadeOut("slow"),(0<$(".schedaImmobile").length||0<$(".schedaCantiere").length)&&$.cookie("showInfoNascondi",1),location.reload()},500))},error:function(a,e,i){}});else if(""!=$("#idImmLoginDesideri").val()||""!=$("#idCantLoginDesideri").val()){var r;""!=$("#idImmLoginDesideri").val()?r="idImmobile="+$("#idImmLoginDesideri").val():""!=$("#idCantLoginDesideri").val()&&(r="idCantiere="+$("#idCantLoginDesideri").val()),$.ajax({type:"POST",async:!1,url:baseUrlLingua+areaPrivataUrl+"/ajax/aggiungiListaDesideri",data:r,success:function(a){location.reload()},error:function(a,e,i){}})}else location.href=baseUrlLingua+areaPrivataUrl+"/dashboard/"}else $("#errorLogin").html(aLang.erroreLogin).show(),o.stop().fadeOut(200)},error:function(a,e,i){o.stop().fadeOut(300),$("#errorRegistrazione").html(aLang.erroreGenerico).show()}})}}),1==$.cookie("showInfoNascondi")&&($("#infoNascondi").show("slow"),$.cookie("showInfoNascondi",0)),$("input#password").keypress(function(a){var e=String.fromCharCode(a.which);e.toUpperCase()===e&&e.toLowerCase()!==e&&!a.shiftKey||e.toUpperCase()!==e&&e.toLowerCase()===e&&a.shiftKey?$("#capsalert").length<1&&($("#errorLogin").html('<span id="capsalert">Attenzione maiuscola attiva!</span>'),$("#errorLogin").show()):0<$("#capsalert").length&&($("#capsalert").remove(),$("#errorLogin").hide())}),$(document).keypress(function(a){"block"==$("#modalLogin").css("display")&&13==a.which&&$("#ButtonLogin").trigger("click")})});