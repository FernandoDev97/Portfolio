import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;

    > section {
      margin-top: 8rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 6.2rem;
      flex-wrap: wrap;

      @media(max-width: 1450px) {
          gap: 4.5rem;
      }

      @media(max-width: 1000px) {
          gap: 4rem;
      }

      @media(max-width: 700px) {
          gap: 3rem;
          flex-wrap: wrap;
          margin-top: 5rem;
      }

      @media(max-width: 450px) {
          gap: 2rem;
          flex-wrap: wrap;
          margin-top: 4rem;
      }
    }
`;
