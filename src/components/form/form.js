import styled from 'styled-components'

function Formulario() {
  return (
    <>
      <Form>
        <Inputs>
          <Label htmlFor="name"> Nome </Label>         
          <Input type="text" name='name' id="name" placeholder='Digite seu nome'></Input>
                  
        </Inputs>
        <Inputs>
            <Label htmlFor="email">Email</Label>
            <Input type="text" name ="email" placeholder="Digite seu email"></Input>
        </Inputs>
        <Inputs>
            <Label htmlFor="phone">Telefone</Label>
            <Input type="number" name ="phone" placeholder="Digite seu telefone"></Input>
        </Inputs>
        <Inputs>
            <Label htmlFor="password">Senha</Label>
            <Input type="password" name ="password" placeholder="Digite sua senha"></Input>
        </Inputs>
      </Form>
    </>
  );
}


const Inputs = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
`

const Form = styled.form`
padding: 20px
maargin: 10px
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Input = styled.input`
margin: 10px;
padding: 10px;
border: 2px solid #123c69;
-webkit-appearance: none; 
-moz-appearance: textfield; 
appearance: none; 

&::-webkit-inner-spin-button,
&::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0}

&::placeholder{
    color: #123c69;
    font-style: italic;    
    
}
`
const Label = styled.label`
font-weight: bold;
color: #ac3b61;
width: 80px;
`


export default Formulario