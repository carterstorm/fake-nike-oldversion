import { ExtraContent } from "./ExtraContent";
import { FavoriteProducts } from "./FavoriteProducts";
import { PopularProducts } from "./PopularProducts";
import { StyledMain } from "./styled";

export const Main = () => {
    return (
        <StyledMain>
            <FavoriteProducts />
            <PopularProducts />
            <ExtraContent />
        </StyledMain>
    );
};