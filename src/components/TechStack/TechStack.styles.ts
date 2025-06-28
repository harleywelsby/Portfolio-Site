import styled from 'styled-components';

export const TechStackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1rem;

  padding: 0 3rem;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  @media (min-width: 35em) {
    gap: 2rem;
  }
`;

export const TechStackItemWrapper = styled.div<{ $isHover: boolean }>`
  margin: 0;
  ${(props) => props.$isHover && 'transform: scale(1.2)'};
`;

export const TechStackItemLabel = styled.p`
  margin-top: 0.5rem;
  font-size: clamp(0.8rem, 3vw + 0.25rem, 1.2rem);
`;
