import React from 'react'
import { CodeItem, InfosContainer } from './styles';

const Card = () => {
    return (
        <InfosContainer>
            <CodeItem data-aos='zoom-in'>
                <span className='comment'>// Informações pessoais</span>
                <span className='purple'>Infos</span> {'\u007b'}
                <div>
                    Nome: <span className='blue'>Fernando</span>
                </div>
                <div>
                    Sobrenome: <span className='blue'>Souza</span>
                </div>
                {'\u007D'}
            </CodeItem>
            <CodeItem data-aos='zoom-in'>
                <span className='comment'>// Soft Skills</span>
                <span className='purple'>Dev Front-end</span> {'\u007b'}
                <div>
                    Linguagens: <span className='blue'>JavaScript, TypeScript, HTML, CSS</span>
                </div>
                <div>
                    Frameworks/Libs: <span className='blue'>Next.Js, React</span>
                </div>
                {'\u007D'}
            </CodeItem>
        </InfosContainer>
    )
}

export default Card;