import { useEffect, useState } from "react";
import axios from "axios";

import {
    Container,
    FavoriteProduct,
    FavoriteProductDescription,
    FavoriteProductImage,
    FavoriteProductNumber,
    FavoriteProductsList,
} from "./styled";

import { Arrow } from "../../../../common/Arrow";

export const FavoriteProducts = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const [favoriteProducts, setFavoriteProducts] = useState({
        state: "loading",
        data: [],
    });

    useEffect(() => {
        const getFavoriteProducts = async () => {
            try {
                const response = await axios.get("./data/favoriteProducts.json");
                const data = response.data;

                setFavoriteProducts({
                    state: "success",
                    data: data,
                });
            } catch (error) {
                setFavoriteProducts({
                    state: "error",
                    data: [],
                });
            }
        };
        setTimeout(getFavoriteProducts, 0 * 1000);
    }, []);

    const imagesToDisplay = () => [
        favoriteProducts.data[(currentIndex + favoriteProducts.data.length - 2) % favoriteProducts.data.length],
        favoriteProducts.data[(currentIndex + favoriteProducts.data.length - 1) % favoriteProducts.data.length],
        favoriteProducts.data[currentIndex],
        favoriteProducts.data[(currentIndex + 1) % favoriteProducts.data.length],
        favoriteProducts.data[(currentIndex + 2) % favoriteProducts.data.length]
    ];

    const handlePrevClick = () => {
        const newIndex = currentIndex - 1;
        if (newIndex < 0) {
            setCurrentIndex(favoriteProducts.data.length - 1);
        } else {
            setCurrentIndex(newIndex);
        }
    };

    const handleNextClick = () => {
        const newIndex = currentIndex + 1;
        if (newIndex === favoriteProducts.data.length) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(newIndex);
        }
    };

    return (
        <Container>
            <Arrow
                direction="left"
                handleClick={handlePrevClick}
            />
            <FavoriteProductsList>
                <FavoriteProductNumber>{currentIndex + 1}/{favoriteProducts.data.length}</FavoriteProductNumber>
                {imagesToDisplay().map((item) => {

                    if (!item) return null;

                    const { id, src } = item;

                    return (
                        <FavoriteProduct key={id}>
                            <FavoriteProductImage src={src} />
                        </FavoriteProduct>
                    )
                })}
                {favoriteProducts.data.length > 0 ? (
                    <FavoriteProductDescription>{favoriteProducts.data[currentIndex].description}</FavoriteProductDescription>
                ) : null}

            </FavoriteProductsList>
            <Arrow
                direction="right"
                handleClick={handleNextClick}
            />
        </Container >
    );
}