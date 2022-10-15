/*
OBJETIVO -> Quando clicarmos na aba temos que mostrar
o conteúdo da aba que foi clicada pelo usuário e esconder
 o conteúdo da aba anterior.

 - passo 1:  dar um jeito de pegar os elementos que
representam as abas no HTML

 - passo 2: dar um jeito de identificar o clique no elemento da aba

 - passo 3: quando usuário clicar , desmarcar a aba selecionada

 - passo 4: marcar a aba clicada como selecionado

 - passo 5: esconder o conteúdo anterior

- passo 6: mostrar o conteúdo da aba selecionada
*/

//PASSO 1:
const abas = document.querySelectorAll(".aba");

//PASSO 2:
abas.forEach(aba => {
    aba.addEventListener("click", function() {
        //Usar o IF pra não ter a necessidade de selecionar novamente uma aba
        //que já está selecionada (só vai executar código desnecessariamente)
        if (aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    })
})

function selecionarAba(aba) {
        //PASSO 3:
        const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado");
        //PASSO 4:
        aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {
        //PASSO 5:
        const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");
        //PASSO 6:
        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
        const informacaoAserMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
        informacaoAserMostrada.classList.add("selecionado")
}
