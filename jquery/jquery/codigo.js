$(document).ready(function(){

$("#btNome").on("click",function(){
    var nome = $("#txtNome").val();
})
    
$("#btidade").on("click",function(){
    var data = $("#txtidade").val();   
})

$("#btcpf").on("click",function(){
    var cpf = $("#txtcpf").val();   
})

$("#bttel").on("click",function(){
    var tel = $("#txttel").val();   
})

$("#btend").on("click",function(){
    var end = $("#txtend").val();   
})

$( "#btgenero" ).on( "click", function(){
    var genero = $("#cmbGenero").val();
})

$( "#btcivil" ).on( "click", function(){
    var civil = $("#cmbcivil").val();
})

$( "#btcidade" ).on( "click", function(){
    var cidade = $("#cmbcidade").val();
})

$( "#btestado" ).on( "click", function(){
    var estado = $("#cmbestado").val();
})

$("#btcad").on("click", function(){
    var nome = $("#txtNome").val();
    var idade = $("#txtidade").val();
    var cpf = $("#txtcpf").val();
    var tel = $("#txttel").val();
    var end = $("#txtend").val();
    var genero = $("#cmbGenero").val();
    var civil = $("#cmbcivil").val();
    var cidade = $("#cmbcidade").val();
    var estado = $("#cmbestado").val();
    
    var cadastro = 'Nome:' +  nome + '\nIdade: '+ idade + '\nCPF:' + cpf + '\nTelefone: ' + tel + '\nEndereço: ' + end + '\nGênero: ' + genero + '\nEstado Civil: ' + civil + '\nCidade: ' + cidade + '\nEstado: ' + estado;

    alert(cadastro);
    
});

})