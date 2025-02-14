import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: ${({ theme }) => theme.colors.grey};
    
    ${({ hidden }) => hidden && css`
    display:none;
`}
`;

export const Content = styled.span`
${({ done }) => done && css`
    text-decoration: line-through;
`}
`;
export const Button = styled.button`
    border: none;
    color: ${({ theme }) => theme.colors.white};
    width: 30px;
    height: 30px;
    padding: 0;
    transition:background 0.3s;

${({ toggleDone }) => toggleDone && css`
     background:${({ theme }) => theme.colors.green} ;

 &:hover {
    background: ${({ theme }) => theme.colors.green};
 }
`}

${({ remove }) => remove && css`
     background:${({ theme }) => theme.colors.red} ;

&:hover {
    background: ${({ theme }) => theme.colors.red};
}
`}
`;
