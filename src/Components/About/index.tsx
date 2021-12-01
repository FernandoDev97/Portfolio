import SectionTitle from "../SectionTitle";
import AboutItem from "../templates/AboutItem";
import { Container } from "./styles";

function About() {
  return (
    <Container>
      <SectionTitle title='Sobre mim' description='Conheça um pouco sobre minhas formações, experiências, habilidades e interesses!'/>

      <section>
        <AboutItem 
        title='Formações' 
        description='NÍVEL SUPERIOR: Analise e Desenvolvimento de Sistemas (Universidade de Fortaleza)'
        descriptionTwo='NÍVEL TÉCNICO: Curso de desenvolvimento Web (Universidade Estadual do Ceará)'
        descriptionThree='CURSOS ONLINE: Rocketseat Trilha Ignite, Udemy Curso React.js and Next.js'
        />
        <AboutItem 
        title='Experiências' 
        description='FRONT-END DEVELOPER JUNIOR'
        descriptionTwo='Foram 4 meses de experiêcia ultilizando:
        Metodologias Ágeis (SCRUM)
        Consumo de API,
        Next.js,
        React.js,
        TypeScript,
        Chrakra UI,
        Axios.'
        descriptionThree='Nessa experiência profissional, pude aprender muito
        sobre os conceitos do ambiente de desenvolvimento
        WEB.'
        />
        <AboutItem 
        title='Habilidades' 
        description='-Linguagens: Java, JavaScript, TypeScript, HTML, CSS'
        descriptionTwo='-Experiência com React.js, Next.js, 
        Styled-components, Chakra UI, Firebase, Tailwind Css
        Bootstrap, Axios request, SCRUM.'
        descriptionThree='-Experiência com Linux e Windows.'
        />
        <AboutItem 
        title='Interesses' 
        description='Meu principal interesse pessoal inclue
        sempre me manter qualificado para mercado de trabalho.'
        descriptionTwo='Sou um desenvolvedor Web e um eterno
        estudante de desenvolvimento de
        softwares interessado em projetos que
        requerem raciocínio lógico, conceitual e
        analítico. Gostaria de trabalhar com startups
        ou em grandes empresas.'
      
        />
      </section>
    </Container>
  );
};

export default About;
