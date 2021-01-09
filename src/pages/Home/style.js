import styled from 'styled-components';


export const Container = styled.aside`
  background-color:${(props) => props.theme.colors.background };
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;    
    justify-content: center;
    background-color:#fff;
    padding: 16px;
`;

export const Logos = styled.img`
  margin-bottom: 16px;
`