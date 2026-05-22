$(document).ready(function(){
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repositorios');
    const followersElement = document.querySelector('#seguindo');
    const followingElement = document.querySelector('#seguidores');
    const linkElement = document.querySelector('#link');
    const endpoint = 'https://api.github.com/users/ogiansouza';

    $.ajax(endpoint).done(function(resposta){

        nameElement.innterText = resposta.name;
        usernameElement.innerText = resposta.login;
        avatarElement.src = resposta.avatar_url;
        followersElement.innerText = resposta.followers;
        followingElement.innerText = resposta.following;
        reposElement.innerText = resposta.public_repos;
        linkElement.href = resposta.html_url;

        if (!resposta.html_url) {
        throw new Error("A API não retornou o link do github");
        }
    })

    .catch(function(error){
        alert("Erro nas requisições GET");
    })


})