import { FooterContainer } from './styles';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

function Footer() {

  function handleRedirect (url: string) {
    window.open(url)
  }

  function handleScrollTop () {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <FooterContainer>
      <div className='container'>
        <button type='button' onClick={handleScrollTop}>
            Voltar ao topo
        </button>
        <section>
          <AiFillLinkedin onClick={() => handleRedirect('https://www.linkedin.com/in/fernando-souza-6844341b7/')}/>
          <AiFillGithub onClick={() => handleRedirect('https://github.com/FernandoDev97')}/>
        </section>
      </div>
    </FooterContainer>
  );
};

export default Footer;
