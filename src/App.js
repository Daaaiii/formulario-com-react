import { createGlobalStyle, styled } from "styled-components";
import Formulario from "./components/form/form";
import Title from "./components/titulo/titulo";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Title title= "Formulario"/>
      <Formulario />
    </Container>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
padding: 0;
background-color: #eee2dc
}`
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center:

`

