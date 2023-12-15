function changeContent() {
  var content1 = document.getElementById('content1');
  var content2 = document.getElementById('content2');
  var content3 = document.getElementById('content3');

  if (content1.style.display !== 'none') {
    content1.style.display = 'none';
    content2.style.display = 'block';
    changeColors('#F6DD90', '#FACA0F', 'white'); // Conteúdo 2 (amarelo no fundo, laranja na div, texto branco)

  } else if (content2.style.display !== 'none') {
    content2.style.display = 'none';
    content3.style.display = 'block';
    changeColors('#ff97a7', '#ff002674', 'white'); // Conteúdo 3 (rosa no fundo, rosa na div, texto branco)

  } else {
    content3.style.display = 'none';
    content1.style.display = 'block';
    changeColors('#29c5f6', '#125fcc81', 'white'); // Conteúdo 1 (azul no fundo, azul na div, texto branco)
  }
}

function changeColors(bodyColor, backgroundColor, textColor) {
  var body = document.body;
  body.style.backgroundColor = bodyColor;

  var content = document.querySelector('.content');
  content.style.backgroundColor = backgroundColor;

  var textElements = content.getElementsByClassName('descritor');
  for (var i = 0; i < textElements.length; i++) {
    textElements[i].style.color = textColor;
  }
}