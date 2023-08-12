<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $mensagem = $_POST["mensagem"];
    
    // Configurar as informações necessárias para enviar a mensagem pelo WhatsApp
    $numeroWhatsapp = "https://web.whatsapp.com/";
    $mensagemWhatsapp = "Nome: $nome\nMensagem: $mensagem";
    
    // Enviar a mensagem para o WhatsApp usando alguma biblioteca ou serviço
    envio_whatsapp($numeroWhatsapp, $mensagemWhatsapp);
    
    echo "Mensagem enviada com sucesso para o WhatsApp!";
}
?>
