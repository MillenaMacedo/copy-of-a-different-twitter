
/*Capturar o valor do usuário*/
/*constuir o tweet*/
/*imprimir esse tweet */
const cabeçalho = document.querySelector('header')
const textarea = document.querySelector ('textarea');
const tweetar = document.querySelector('button');
const feed = document.querySelector(".conteudoPrincipal__listaTweets")

function pegarTweet(event){
    event.preventDefault();

    const tweetTextarea = textarea.value;
    criarTweet(tweetTextarea)
}

tweetar.addEventListener('click', pegarTweet);

/**criar o tweet */
function criarTweet(tweetTexto){

    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()

    const tweet = {
        nome:"Miih",
        foto: "./assets/img/ProfilePic (1).png",
        usuario:" @millena.lvr",
        texto: tweetTexto,
        tempo: `${hora}:${minutos}`
    }
    listarTemplateTweet (tweet)
}

/*Listar o tweet */
function listarTemplateTweet(tweet){

    const {nome, foto, usuario, texto, tempo} = tweet

    let li = document.createElement("li")
    li.classList.add("conteudoPrincipal__tweet")

    let img = document.createElement("img") 
    img.src = foto
    img.classList.add("tweet__fotoPerfil")

    let div = document.createElement("div")
    div.classList.add("tweet__conteúdo")

    let h2 = document.createElement("h2") 
    h2.innerText = nome

    let span = document.createElement("span")
    span.innerText = `${usuario} - ${tempo}`

    let p = document.createElement("p")
    p.innerText = texto

    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)
    li.appendChild(img)
    li.appendChild(div)

    feed.appendChild(li)
    textarea.value = ""
}
