import styled from 'styled-components'


//Elementos
export const Input = styled.input`
border: 1px solid #ddd;
border-radius: .25rem 0 0 .25rem;
height: 1.5rem;
padding: 0 .5rem;
&:focus,
&:active {
    outline: none;
    box-shadow: none;
}
`

export const Button = styled.button`
height: 1.5rem;
border: 1px solid #000;
background: #000;
color: #fff;
border-radius: 0 .25rem .25rem 0;
&:focus,
&:active {
    outline: none;
    box-shadow: none;
}
cursor: pointer;
`

export const Content = styled.div`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`;

export const ErrorMsg = styled.span`
display: block;
font-size: 0.65rem;
color: red;
font-weight: 600;
margin-top: 1rem;
`;

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 10vh;
`;

export const MenuContainer = styled.div`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
background: #f5f5f5;
`;

export const HeaderPrincipal = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
font-family: sans-serif;
`;

export const List = styled.ul`
list-style: none;
display: inline-flex;
padding: 4;
margin: 0;
font-family: sans-serif;
background: #dda0dd;
width:1325px;
`;

export const ListMenu=styled.li`
background: palevioletred;
color: #fff;
font-size: 1rem;
text-align: center;
width: 175px;
height: auto;
margin: 4px;
padding: 15px;
border: 1px solid black;
border-radius: 0.5rem;
`;


export const ProductContainer = styled.div`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
background: whitesmoke ;
`;

export const Imagens = styled.img`
border: 1px solid black;
width: 30vw;
height: 64vh;
align-items: auto;
margin: 10px;
`;

export const Texto = styled.text`
font-size: 2.5em;
color: #f5f5f5;
font-family: sans-serif;
`;

export const ListProduct = styled.ul`
list-style: none;
display: inline-flex;
padding: 4;
margin: 0;
font-family: sans-serif;
background: #dda0dd;
width:1325px;
`;

export const ListItem=styled.li`
background: palevioletred;
color: #fff;
font-size: 1em;
text-align: center;
width: 350px;
height: 100px;
margin: 10px;
padding: 25px;
border: 5px solid black;
`;

export const ListPreco=styled.li`
background: black ;
color: #fff;
font-size: 1em;
text-align: center;
width: 350px;
height: 50px;
margin: 10px;
padding: 25px;
border: 5px solid black;
`;

export const ButtonBuy = styled.button`
font-size: 50px;
font-family: sans-serif;
background: #ff6347 ;
color: #fff;
text-align: center;
width: 410px;
height: 100px;
margin: 10px;
padding: 25px;
border: 5px solid black;
border-radius: 0.5rem;
box-shadow: inset 0 0 1em gold;
cursor: pointer;
`;

export const BlackFriday = styled.div`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
background: black;
border: 2px red;
`;

export const TextoPrecoPromo = styled.text`
font-size: 2.5em;
color: #f5f5f5;
font-family: sans-serif;
text-decoration: line-through
`;



