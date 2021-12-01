import SectionTitle from '../SectionTitle';
import ProjectItems from '../templates/ProjectItems';
import { Container } from './styles';
import Link from 'next/link'

function Projects() {
  return (
    <Container>
      <SectionTitle title='Últimos projetos'/>

      <section>
        <ProjectItems
          img='https://media.slidesgo.com/storage/7277505/responsive-images/0-web-project-proposal___media_library_original_1600_900.jpg'
          title='Projeto 1'
          type='Website'
          slug='teste'
        />
        <ProjectItems
          img='https://media.slidesgo.com/storage/7277505/responsive-images/0-web-project-proposal___media_library_original_1600_900.jpg'
          title='Projeto 1'
          type='Website'
          slug='teste'
        />
        <ProjectItems
          img='https://media.slidesgo.com/storage/7277505/responsive-images/0-web-project-proposal___media_library_original_1600_900.jpg'
          title='Projeto 1'
          type='Website'
          slug='teste'
        />
      </section>
      
      <button type='button'>
        <Link href="/projetos">
          <a>
            Ver todos os projetos
          </a>
        </Link>
      </button>
    </Container>
  );
};

export default Projects;
