import Header from '../../../Components/Header';
import BannerProject from '../../../Components/templates/BannerProject';
import { ProjectContainer } from '../../../styles/ProjectStyle'

function Project() {
    return (
        <ProjectContainer>
            <Header />
            <BannerProject
                title='Projeto01'
                type='Website'
                imgUrl='https://media.slidesgo.com/storage/7277505/responsive-images/0-web-project-proposal___media_library_original_1600_900.jpg'
            />

            <main>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Suscipit eos harum earum voluptatibus, 
                    quisquam maiores quod asperiores similique pariatur 
                    neque hic dolorum doloribus fugit nesciunt perferendis 
                    quidem quaerat molestias? 
                    Voluptate quis tempore, tenetur maxime, 
                    deleniti dolor id numquam consectetur assumenda eos officia dignissimos minima sit, 
                    eaque blanditiis quibusdam debitis dicta repellendus labore dolore odit cumque. Labore temporibus quasi 
                    optio asperiores assumenda ipsam laborum magni nulla quaerat veniam dolor consectetur 
                    aliquam molestiae excepturi deserunt amet iusto dolorem, culpa dicta ducimus perferendis!</p>
                <button>
                    <a href="">Ver projeto Online</a>
                </button>
            </main>
        </ProjectContainer>
    )
}

export default Project;