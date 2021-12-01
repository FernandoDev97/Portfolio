import SectionTitle from "../SectionTitle";
import KnowledgeItems from "../templates/KnowledgeItems";
import { Container } from "./styles";
import { AiFillHtml5, AiFillWindows } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaLinux } from 'react-icons/fa'
import { DiScrum } from 'react-icons/di'
import { SiTypescript, SiStyledcomponents, SiJavascript, SiTailwindcss, SiFirebase, SiChakraui, SiBootstrap, SiGithub } from 'react-icons/si'


function Knowledge() {
  return (
    <Container>
      <SectionTitle title='Conhecimentos' description='Tecnologias que ultilizo pra o desenvolvimento Front-End'/>
      <section>
        <KnowledgeItems title='HTML5' icon={<AiFillHtml5/>}/>
        <KnowledgeItems title='CSS3' icon={<FaCss3Alt/>}/>
        <KnowledgeItems title='JavaScript' icon={<SiJavascript/>}/>
        <KnowledgeItems title='TypeScript' icon={<SiTypescript/>}/>
        <KnowledgeItems title='React' icon={<FaReact/>}/>
        <KnowledgeItems title='Styled-Components' icon={<SiStyledcomponents/>}/>
        <KnowledgeItems title='Tailwind css' icon={<SiTailwindcss/>}/>
        <KnowledgeItems title='Chakra UI' icon={<SiChakraui/>}/>
        <KnowledgeItems title='Bootstrap' icon={<SiBootstrap/>}/>
        <KnowledgeItems title='Firebase' icon={<SiFirebase/>}/>
        <KnowledgeItems title='Github' icon={<SiGithub/>}/>
        <KnowledgeItems title='Scrum' icon={<DiScrum/>}/>
        <KnowledgeItems title='Windows' icon={<AiFillWindows/>}/>
        <KnowledgeItems title='Linux' icon={<FaLinux/>}/>
      </section>
    </Container>
  );
};

export default Knowledge;
