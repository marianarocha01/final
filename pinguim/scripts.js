    const jokes = [
        "Por que o pinguim carrega sempre gravatas? Porque ele gosta de estar bem vestido!",
        "O que um pinguim diz para outro quando quer brigar? Você está me tirando do sério!",
        "Qual o animal mais engraçado do zoológico? O pinguim!",
        "O que o pinguim falou para a pinguimzinha? Vem cá, vamos dar uma pinguimbada!",
        "Por que o pinguim não ganha na loteria? Porque ele já nasceu com a sorte grande!",
    ]

    let currentJokeIndex = 0;

    document.getElementById("joke-button").addEventListener("click", tellJoke);

    function tellJoke() {
        const jokeContainer = document.getElementById("joke-text");
        const jokeButton = document.getElementById("joke-button");

        if (currentJokeIndex < jokes.length) {
            jokeContainer.innerText = jokes[currentJokeIndex];
            jokeButton.innerText = "Contar piada";
            currentJokeIndex++;
        } else {
            jokeContainer.innerText = "Já não sei mais piadas!";
            jokeButton.innerText = "Repetir";
            currentJokeIndex = 0; // Reinicia o ciclo
        }
    }

    