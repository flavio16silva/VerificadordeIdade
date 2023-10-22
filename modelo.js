function verificar () {
  var data = new Date()                              //Pegar a data atual
  var ano = data.getFullYear()                      //Pegar o ano atual com 4 digitos
  var formano = document.getElementById('txtano')  //Buscando pelo id - input number form.
  var res = document.querySelector('div#res')     //Buscando pelo id - resultado

  if (formano.value.length == 0 || formano.value > ano) { //Verifica se o comprimento do valor é igual a zero OU valor acima de ano.
    window.alert('[ERRO] Preencha os dados e tente novamente')
  } else {
        var fsex = document.getElementsByName('radsex') // Pegando a referência pelo "name" do componente
        var idade = ano - Number(formano.value)         // Calculando a idade
        //res.innerHTML = `Idade Calculada: ${idade}`      Testando a validação do programa

        var genero = ''                                //iniciando a variavel com um string vazia
        var img = document.createElement('img')       //criando uma tag img pelo JS dinamicamente
        img.setAttribute('id','foto')                // criando um ID para foto, como se fosse no HTML <img id= 'foto>
        img.setAttribute('style','border-radius:50%')
        //=========== Validação ==========//

        if (fsex[0].checked) {
          genero = 'Homem'
          if (idade >=0 && idade < 10) {              //Criança
                img.setAttribute('src','img/bb-h.jpg')  
          } else if (idade >= 10 && idade <= 18) {    //Jovem
                img.setAttribute('src','img/jovem-h.jpg')
          } else if (idade > 18 && idade <= 50) {     // Adulto
               img.setAttribute('src','img/adulto-h.jpg')
          } else if (idade > 50 ){                    // Idoso
             img.setAttribute('src','img/idoso-h.jpg')
          }     
        } else if (fsex[1].checked) {
          genero = 'Mulher'  
          if (idade >=0 && idade < 10) {              //Criança
              img.setAttribute('src','img/bb-m.jpg')  
          } else if (idade >= 10 && idade <= 18) {    //Jovem
            img.setAttribute('src','img/jovem-m.jpg')  
          } else if (idade > 18 && idade <= 50) {     // Adulto
            img.setAttribute('src','img/adulto-m.jpg') 
          } else if (idade > 50 ){                    // Idoso
            img.setAttribute('src','img/idoso-m.jpg')
          }     
        }
        res.style.textAlign = 'center'                //Centralizando o texto pelo JS.       
        res.innerHTML =  `<p> Detectamos um ${genero} com ${idade} anos. </p>` // Redimensionar o texto e a imagem
        res.appendChild(img)                          // Adicionar um elemento/ Mostrar a imagem na tela.
  }


}