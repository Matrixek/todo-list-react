import styled,{css} from "styled-components";

export const StyledButton = styled.div`
    display: flex;
    flex-wrap: wrap;

@media (max-width: 767px) {
      flex-basis: 100%;
      margin: 5px;
    
  }
`;
export const Button = styled.button`
    background: transparent;
    color: teal;
    border: none;
    margin: 0 0 0 20px;
    transition: color 0.3s;

${({ disabled }) => disabled && css`
     color: #ccc;
    `}
`;