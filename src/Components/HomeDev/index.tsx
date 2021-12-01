import { Container, TextContainer} from './styles';
import image from '../../assets/Photo.webp'
import Card from '../templates/Cards';

function HomeDev() {
  return (
    <Container>
      <img src={image} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Seja bem vindo ao meu Portifólio</h2>
        </TextContainer>
        <Card/>
      </div>
    </Container>
  );
};

export default HomeDev;