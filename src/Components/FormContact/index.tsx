import SectionTitle from '../SectionTitle';
import Form from '../templates/Form';
import { Container } from './styles';

function FormContact() {
  return (
    <Container>
      <SectionTitle title='Precisando dos meus serviços?' description='Preencha o formulário a baixo que retornarei em breve!' />
      <Form/>
    </Container>
  );
};

export default FormContact;
