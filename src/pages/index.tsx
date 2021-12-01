import About from "../Components/About";
import Footer from "../Components/Footer";
import FormContact from "../Components/FormContact";
import Header from "../Components/Header";
import HomeDev from "../Components/HomeDev";
import Knowledge from "../Components/Knowledge";
import Projects from "../Components/Projects";
import { HomeContainer } from "../styles/HomeStyles";

export default function Home() {
  return (
    <HomeContainer>
      <Header/>
      
      <main className='container'>
        <HomeDev/>
        <About/>
        <Projects/>
        <Knowledge/>
        <FormContact/>
      </main>

      <Footer/>
    </HomeContainer>

  );
}
