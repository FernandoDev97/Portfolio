import { FormContainer, Input, TextArea } from './styles';

interface FormProps {

}

function Form() {
  return (
    <FormContainer>
        <Input placeholder='Nome' type='text' required/>
        <Input placeholder='Email' type='email' required/>
        <TextArea placeholder='Mensagem' required/>
        <button type='submit'>ENVIAR</button>
    </FormContainer>
  );
};

export default Form;
