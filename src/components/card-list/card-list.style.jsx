import styled from "styled-components";

export const CardListStyles = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  word-wrap: break-word;
`;