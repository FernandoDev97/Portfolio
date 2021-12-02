import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
    isActive: boolean
}

export const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    border-bottom: 1px solid ${props => props.theme.backgroundLight};

    > img {
        display: none;
        position: relative;
    }

    ul {
        display: flex;
        gap: 2rem;
        align-items: center;
    }

    @media(max-width: 700px) {
        > img {
            position: absolute;
            display: flex;
            top: 0;
            left: 1rem;
            width: 3.7rem;
            height: 3.7rem;
            border-radius: 50%;
        }
    }

    @media(max-width: 420px) {
        > img {
            position: absolute;
            display: flex;
            top: 0;
            left: .4rem;
            width: 3.7rem;
            height: 3.7rem;
            border-radius: 50%;
        }
    }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
    a {
        text-transform: uppercase;
        color: ${props => props.isActive ? props.theme.primary : props.theme.textHighlight};
        transition: 0.5s;
        
        &:hover {
            color: ${props => props.isActive ? lighten(0.2, props.theme.primary) : lighten(0.2, props.theme.textLight)};
        }
    }
`
