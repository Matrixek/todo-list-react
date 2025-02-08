import styled from "styled-components";

export const StyledSection = styled.section`
        background-color: #fff;
        box-shadow: 0 0 5px #ddd;
        margin: 10px 0;
    
`;
export const Title = styled.h2`
   font-size: 20px;
    padding: 20px;
    margin: 0px;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid black;

@media (max-width: 767px) {
   grid-template-columns: 1fr;
  }
`;
export const Body = styled.div`
    padding: 20px;
    margin:0;
`;
