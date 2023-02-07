import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    overflow: hidden;
`;

export const FavoriteProductsList = styled.ul`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,0);
    display: grid;
    justify-content: center;
    grid-gap: 20px;
    grid-template-columns: repeat(5, 1fr);
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const FavoriteProduct = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const FavoriteProductNumber = styled.p`
    position: absolute;
    top: 20px;
    right: 40px;
    margin: 0;
    padding: 5px 0;
    text-align: center;
    background-color: rgba(34, 34, 34, 0.5);
    color: rgba(238, 238, 238, 0.9);
    border-radius: 20px;
    width: 50px;
`;

export const FavoriteProductImage = styled.img`
    width: 500px;
    height: 500px;
    background-color: green;
    border-radius: 15px;
`;

export const FavoriteProductDescription = styled.h3`
    margin: 20px 0;
    padding: 0;
    font-weight: 400;
    font-size: 16px;
`;