import { useData } from "../../../useData";
import { MainCategoriesSlider } from "./MainCategoriesSlider";
import { StyledMain } from "./styled";
import { PopularProducts } from "./PopularProducts";
import { ProductsBySportName } from "./ProductsBySportName";
import { MoreProducts } from "./MoreProducts";
import { Training } from "./Training";
import { JoinToClub } from "./JoinToClub";
import { MerchMenu } from "./MerchMenu";


export const Main = () => {

    const popularProductsEndPoint = "./data/popularProducts.json";
    const popularData = useData(popularProductsEndPoint);

    const sportNameEndPoint = "./data/sportNameCategory.json";
    const searchBySportData = useData(sportNameEndPoint);

    const moreProductsEndPoint = "./data/moreProductsData.json";
    const moreProducts = useData(moreProductsEndPoint);

    const trainingDataEndPoint = "./data/trainingData.json";
    const trainingData = useData(trainingDataEndPoint);

    const favoriteProductsEndPoint = "./data/favoriteProducts.json";
    const favoriteProducts = useData(favoriteProductsEndPoint);

    const clubEndPoint = "./data/clubData.json";
    const clubElements = useData(clubEndPoint);

    return (
        <StyledMain>
            <MainCategoriesSlider data={favoriteProducts} />
            <PopularProducts title={"Popularne w tym tygodniu"} data={popularData} />
            <MoreProducts title={"Odkryj więcej produktów"} data={moreProducts} />
            <ProductsBySportName title={"Przeglądaj wg dyscypilny sportu"} data={searchBySportData} />
            <Training title={"Trenuj z nami i dbaj o siebie"} data={trainingData} />
            <JoinToClub title={"Członkowstwo Nike"} data={clubElements} />
            <MerchMenu />
        </StyledMain>
    );
};