import { CardListStyles } from "./card-list.style";
import Card from "../card/card-component";


const CardList = ({ monsters }) => (
    <CardListStyles>
        {monsters.map((monster) => {
            return <Card monster={monster}/>;
        })}
    </CardListStyles>
)

export { CardList as default }