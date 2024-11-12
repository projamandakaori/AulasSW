
$(document).ready(function() {

    $(document).on("click", "#btConsulta", function () {

        if($("#idNome").val() == ""){
            alert("Preencha todos os campos!");
            return 0;
        }
    
        //Ajax tem liberdade para o tipo de envio, url= onde os dados estão sendo enviados, data= array de dados (todos os dados que serão enviados) OPCIONAL, async= assincrono (simultanea), sucess= o que acontece quando for concluido OPCIONAL
        $.ajax({ 
            type: "GET",
            url: "consulta.php",
            data: "nome=" + $("#nome").val() ,
            async: false,
            success: function (ret) {
                //Retorna o resultado de acordo com o conteudo localizado.
                alert(ret)
            }
        });

    });

});