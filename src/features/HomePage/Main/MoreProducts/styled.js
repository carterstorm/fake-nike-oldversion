import styled from "styled-components";

export const Container = styled.section`
    width: 95%;
    margin: 40px auto;
`;

export const Heading = styled.h3`
    font-size: 24px;
    font-weight: 700;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(${({ gridNumber }) => gridNumber}, 1fr);
    justify-content: space-around;
    grid-gap: 20px;
`;

export const Item = styled.li`
`;

export const Link = styled.a`
    position: relative;
    top: 0;
    left: 0;

    &:hover {
        cursor: pointer;
    }
`;

export const ImageContainer = styled.div`
    width: 31vw;
`;

export const Image = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: top;
    height: ${({ height }) => height}px;
`;


export const LinksContainer = styled.div`
    position: absolute;
    bottom: 60px;
    left: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

export const Button = styled.span`
    background-color: #fff;
    padding: 10px 30px;
    border-radius: 20px;
    margin: 5px 0;

    &:hover {
        background-color: ${({ theme }) => theme.colors.lightGray};
    }
`;