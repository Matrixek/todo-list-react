import styled from "styled-components"


export const StyledForm = styled.form`
   display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

@media (max-width:${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
}
`;
export const Input = styled.input`
 padding: 10px;
 border: 1px solid #ddd;
`;
export const Button = styled.button`
    padding: 10px;
    background: teal;
    color:${({ theme }) => theme.colors.white} ;
    border: none;

    &:hover {
        background: ${({ theme }) => theme.colors.formBtnHover};
    }
    &:active{
        background:  ${({ theme }) => theme.colors.grey};
    }
    
`;