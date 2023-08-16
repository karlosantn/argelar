var Direita = window.document.getElementById("direita")
var Direita2 = window.document.getElementById("direita2")
var insarc = window.document.getElementById("insarc")
var inselt = window.document.getElementById("inselt")
var hig = window.document.getElementById("hig")
var bed = window.document.getElementById("bed")
var pmoc = window.document.getElementById("pmoc")
var cmf = window.document.getElementById("cmf")
var Esquerda = window.document.getElementById("esquerda")
var Esquerda2 = window.document.getElementById("esquerda2")

function RolarParaDireita() {
    insarc.style = "display:none"
    inselt.style = "display:none"
    hig.style = "display:flex; margin-left:35px"
    bed.style = "display:flex; margin-left:35px"
    pmoc.style = "display:none"
    cmf.style = "display:none"
    Direita.style = "display:none"
    Direita2.style = "display:flex"
    Esquerda.style = "display:flex"
}

function RolarParaEsquerda() {
    insarc.style = "display:flex; margin-left:35px"
    inselt.style = "display:flex; margin-left:35px"
    hig.style = "display:none"
    bed.style = "display:none"
    pmoc.style = "display:none"
    cmf.style = "display:none"
    Direita.style = "display:flex"
    Direita2.style = "display:none"
    Esquerda.style = "display:none"
    Esquerda2.style = "display:none"
}

function RolarParaDireita2() {
    insarc.style = "display:none"
    inselt.style = "display:none"
    hig.style = "display:none"
    bed.style = "display:none"
    pmoc.style = "display:flex; margin-left:35px"
    cmf.style = "display:flex; margin-left:35px"
    Direita.style = "display:none"
    Direita2.style = "display:none"
    Esquerda.style = "display:none"
    Esquerda2.style = "display:flex"
}

function RolarParaEsquerda2() {
    insarc.style = "display:none"
    inselt.style = "display:none"
    hig.style = "display:flex; margin-left:35px"
    bed.style = "display:flex; margin-left:35px"
    pmoc.style = "display:none"
    cmf.style = "display:none"
    Direita.style = "display:none"
    Direita2.style = "display:flex"
    Esquerda.style = "display:flex"
    Esquerda2.style = "display:none"
}

function abrirWhatsapp() {
      var nome = document.getElementById("nome").value;
      var telefone = document.getElementById("telefone").value;
      var email = document.getElementById("email").value;
      var msg = document.getElementById("msg").value;
      var url = "https://wa.me/+553192657172?text="
        + "*Formulário de Contato*" + "%0a"
        + "%0a"
        + "*Nome*: " + nome + "%0a"
        + "*Telefone*: " + telefone + "%0a"
        + "*E-mail*: " + email + "%0a"
        + "*Mensagem*: " + msg;
      window.open(url, '_blank').focus();
    }