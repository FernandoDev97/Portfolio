import { ItemContainer } from "./styles"

interface AboutItemProps {
    title?: string
    description?: string
    descriptionTwo?: string
    descriptionThree?: string
}

const AboutItem = ({title, description, descriptionTwo, descriptionThree}: AboutItemProps) => {
    return (
        <ItemContainer data-aos='fade-up'>
            <div>
                <h1>{title}</h1>
                <hr />
                <p>{description}</p> <br />
                <p>{descriptionTwo}</p> <br />
                <p>{descriptionThree}</p> 
            </div>
        </ItemContainer>
    )
}

export default AboutItem
