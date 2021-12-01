import Header from "../../Components/Header";
import ProjectItem from "../../Components/ProjectItem";
import { ProjetosContainer } from "../../styles/ProjetosContainer";

export default function Projetos() {
  return (

    <ProjetosContainer>
        <Header/>

        <main className='container'>
            <ProjectItem 
            title='Projeto 01'
            type='Website'
            slug='teste'
            imgUrl='https://media.slidesgo.com/storage/7277505/responsive-images/0-web-project-proposal___media_library_original_1600_900.jpg'
            />
             <ProjectItem 
            title='Projeto 02'
            type='Website'
            slug='teste'
            imgUrl='https://media.slidesgo.com/storage/7277505/responsive-images/0-web-project-proposal___media_library_original_1600_900.jpg'
            />
             <ProjectItem 
            title='Projeto 03'
            type='Website'
            slug='teste'
            imgUrl='https://media.slidesgo.com/storage/7277505/responsive-images/0-web-project-proposal___media_library_original_1600_900.jpg'
            />
             <ProjectItem 
            title='Projeto 04'
            type='Website'
            slug='teste'
            imgUrl='https://media.slidesgo.com/storage/7277505/responsive-images/0-web-project-proposal___media_library_original_1600_900.jpg'
            />
        </main>
    </ProjetosContainer>    
  );
}
