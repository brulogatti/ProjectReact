import React, {useState} from 'react';
import * as S from './styled'

function App(props) {
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);

  function cadastro(){
    localStorage.setItem('user', JSON.stringify(usuario));
    let userString = localStorage.getItem('user'); 
  }

  return (
      <>
    <S.MenuContainer>
        <S.HeaderPrincipal>What the clothes?</S.HeaderPrincipal>
    </S.MenuContainer> 
    <S.List>
        <S.ListMenu>Menu</S.ListMenu>
        <S.ListMenu>Nossa Marca</S.ListMenu>
        <S.ListMenu>Roupas Casuais</S.ListMenu>
        <S.ListMenu>Calçados</S.ListMenu>
        <S.ListMenu>Roupas Íntimas</S.ListMenu>
        <S.ListMenu>Acessórios</S.ListMenu>
    </S.List>
    <S.ProductContainer>
        <p><S.Imagens src="https://svgshare.com/i/ZK2.svg" class="logo" /></p>
        <p><S.Imagens src="https://svgshare.com/i/ZHt.svg" class="logo"/></p>
        <p><S.Imagens src="https://svgshare.com/i/ZKd.svg" class="logo"/></p>
    </S.ProductContainer>
    <S.ListProduct>
        <S.ListItem><S.Texto>Camiseta preta algodão 100%</S.Texto></S.ListItem>
        <S.ListItem><S.Texto>Shorts verde elastano</S.Texto></S.ListItem>
        <S.ListItem><S.Texto>Tênis meia preto (tamanhos até 45)</S.Texto></S.ListItem>
    </S.ListProduct>
    <S.ListProduct>
        <S.ButtonBuy type="button" id="button2">R$15,99</S.ButtonBuy>
        <S.ButtonBuy type="button" id="button3">R$25,99</S.ButtonBuy>
        <S.ButtonBuy type="button" id="button4">R$125,00</S.ButtonBuy>
    </S.ListProduct>
    <S.HomeContainer>
    <>
        <S.HeaderPrincipal>Deseja-se increver para receber as últimas promoções?</S.HeaderPrincipal>
    </>
      <S.Content>
        <S.Input name="usuario" id="usuario" className="usuarioInput" value={usuario} placeholder="E-mail" onChange={e => setUsuario(e.target.value)}/>
        <S.Button type="button" id="button1" onClick={cadastro}>cadastrar</S.Button>
      </S.Content>
      {erro ? <S.ErrorMsg>Ocorreu um erro! Tente novamente</S.ErrorMsg> : ''}
    </S.HomeContainer>
    </>
  );
}

export default App