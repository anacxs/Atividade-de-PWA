//Leitura de todo o meu documento HTML
$(document).ready(function(){ //Executou a leitura do nosso documento e o preparou para executar uma função
  
  //Monitorar todos os clicks em nosso elemento link "a" do HTML
  $('a').click(function(e){
    e.preventDefault()

    let pagina = $(this).attr('href')

    $('.modal-title').empty() 
    $('.modal-body').empty() 

    switch(pagina){
      case 'projeto-reservetec': 
        $('.modal-title').append('Folklore') 
        $('.modal-body').append('<p> Folklore (estilizado em letras minúsculas) é o oitavo álbum de estúdio da cantora e compositora estadunidense Taylor Swift, lançado em 24 de julho de 2020 pela Republic Records. Swift desenvolveu Folklore em quarentena durante a pandemia de COVID-19 como "uma coleção de canções e histórias que fluíram como um fluxo de consciência" de sua imaginação, e colaborou com os produtores Aaron Dessner e Jack Antonoff virtualmente. Sendo um notável afastamento dos trabalhos anteriores de Swift, Folklore consiste em baladas suaves conduzidas por instrumentos neoclassicismo, seguindo os estilos de indie folk, electro-folk e rock alternativo. Com a narrativa enraizada no escapismo e no romantismo, o álbum explora narrativas fictícias com personagens e arco de história, em contraste com o tema autobiográfico dos projetos anteriores de Swift. O título do álbum foi inspirado pelo desejo da cantora de que a música tivesse um legado duradouro semelhante a canções folclóricas, enquanto que sua arte e estética refletem cottagecore.</p>') 
        break
      case 'projeto-fadeline':
        $('.modal-title').append('Lover') 
        $('.modal-body').append('<p>Lover é o sétimo álbum de estúdio da cantora e compositora estadunidense Taylor Swift, lançado em 23 de agosto de 2019 pela Republic Records. Como produtora executiva, Swift trabalhou com os produtores Jack Antonoff, Joel Little, Louis Bell, Frank Dukes e Sounwave no álbum. Descrito por Swift como uma "carta de amor ao amor", o álbum celebra os altos e baixos do amor e incorpora tons mais iluminados e alegres, afastando-se dos sons sombrios de seu antecessor, Reputation (2017). Musicalmente, Lover é um disco pop e synth-pop que contém influências de dream pop, bubblegum pop, funk, pop punk, R&B e indie pop.</p>') 
        break
      case 'projeto-integrante-php':
        $('.modal-title').append('Reputation') 
        $('.modal-body').append('<p>Reputation (estilizado em letras minúsculas) é o sexto álbum de estúdio da cantora americana Taylor Swift, lançado em 10 de novembro de 2017, através da gravadora Big Machine. Com a produção executiva da própria intérprete, o projeto foi gravado entre 2016 e o ano que o sucedeu em estúdios situados nos Estados Unidos e na Suécia, sendo produzido pela própria artista em conjunto com Max Martin, Shellback, Ali Payami, Ilya, Jack Antonoff, Oscar Görres e Oscar Holter. Musicalmente, o disco é derivado dos gêneros pop, synthpop e electropop, e incorpora elementos de gêneros como hip hop, tropical house, trap e EDM, com letras que tocam em temas introspectivos, emotivos, e amorosos, com canções como "I Did Something Bad" tendo um tom de vingança e percebidas referências à mídia. Ed Sheeran e Future são os dois artistas convidados do projeto, participando da faixa "End Game".</p>') 
        break
      default: alert('Página não encontrada')
    }

    $('#modal-info').modal('show')

  })
})



$(document).ready(function(){
    $("#infolist").accordion({
        autoHeight: false
    });
});

$(document).ready(function(){
$('.btn-dark').click(function(e){
e.preventDefault()

$('body').removeClass('original')
$('body').removeClass('light')
$('body').addClass('dark')
$('p').addClass('text-white')
$('p').removeClass('text-dark')
$('h3').addClass('text-white')
$('h3').removeClass('text-dark')
$('h4').addClass('text-white')
$('h4').removeClass('text-dark')
})
$('.btn-light').click(function(e){
e.preventDefault()

$('body').removeClass('original')
$('body').removeClass('dark')
$('body').addClass('light')
$('p').removeClass('text-white')
$('p').addClass('text-dark')
$('h3').removeClass('text-white')
$('h3').addClass('text-dark')
$('h4').removeClass('text-white')
$('h4').addClass('text-dark')
})
$('.btn-primary').click(function(e){
e.preventDefault()

$('body').removeClass('light')
$('body').removeClass('dark')
$('body').addClass('original')
$('p').addClass('text-white')
$('p').removeClass('text-dark')
$('h3').addClass('text-white')
$('h3').removeClass('text-dark')
$('h4').addClass('text-white')
$('h4').removeClass('text-dark')
})

})