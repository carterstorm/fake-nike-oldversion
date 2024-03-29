import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    overflow: hidden;
    position: relative;
`;

export const Container = styled.div`
    display: flex;
    transform: translateX(${({ slideIndex }) => slideIndex * (-100)}vw);
    transition: 1s ease;
`;

export const Slide = styled.div`
    
`;

export const Image = styled.img`
    width: 100vw;
    height: 600px;
    object-fit: cover;
`;

export const Text = styled.p`
    position: absolute;
    top: 100px;
    left: ${({ position }) => position === "left" && "100px"};
    right: ${({ position }) => position === "right" && "200px"};
    z-index: 1;
    font-size: 50px;
    margin: 0;
`;