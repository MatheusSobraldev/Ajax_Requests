$(document).ready(function(){
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repositorios');
    const followersElement = document.querySelector('#seguidores');
    const followingElement = document.querySelector('#seguindo');
    const linkElement = document.querySelector('#link');
    const endpoint = 'https://api.github.com/users/ogiansouza';

    async function carregarDadosDoGithub() {
        try {
            const resposta = await $.ajax(endpoint);

            if (!resposta.html_url) {
                throw new Error('A API nao retornou o link do GitHub');
            }

            nameElement.innerText = resposta.name;
            usernameElement.innerText = resposta.login;
            avatarElement.src = resposta.avatar_url;
            followersElement.innerText = resposta.followers;
            followingElement.innerText = resposta.following;
            reposElement.innerText = resposta.public_repos;
            linkElement.href = resposta.html_url;
        } catch (error) {
            alert('Erro na requisicao GET');
        }
    }

    carregarDadosDoGithub();
})
