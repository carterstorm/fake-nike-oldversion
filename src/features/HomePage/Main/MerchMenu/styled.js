import styled, { css } from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 182px);
    justify-content: space-between;
    width: 880px;
    margin: 0 auto;
    padding-top: 60px;
`;

export const Category = styled.div`
`;

export const Heading = styled.h4`
    margin: 0 0 25px 0;
    height: 25px;
`;

export const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    height: 140px;
    overflow: hidden;
    transition: .3s;

    ${({ visible }) => visible && css`
        height: 400px;
    `}
`;

export const Item = styled.li`
    margin: 0 0 10px 0;
    overflow: ${({ visible }) => !visible && "hidden"};
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGray};
    overflow: ${({ visible }) => !visible && "hidden"};
    display: ${({ visible }) => !visible && "-webkit-box"};
    -webkit-box-orient: ${({ visible }) => !visible && "vertical"};
    -webkit-line-clamp: ${({ visible }) => !visible && "1"};
    white-space: ${({ visible }) => !visible && "pre-wrap"}; 
    transition: .3s;
    line-height: 25px;

    &:hover {
        color: ${({ theme }) => theme.colors.black};
    }
`;