import  {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
html{
  font-size :62.5%;
  overflow-x : hidden;
}

h1{
  color : ${({theme}) =>theme.colors.heading};
 font-size: 6rem;
 font-weight:900;
}

h2{
  color : ${({theme}) =>theme.colors.heading};
 font-size: 4.5rem;
 font-weight:900;
 white-space:normal;
 text-align:center;
}

h3{
  
 font-size: 4.5rem;
 font-weight:900;

}
p{
  color: ${({theme})=>theme.colors.text};
  opacity: .7;
  font-size: 1.65rem;
  line-height: 1.5
  margin-top: 1rem;
  font-weight : 400;
}

a{
  text-decoration : none;
}

li{
  list-style: none;
}

`;