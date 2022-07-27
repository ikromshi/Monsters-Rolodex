import { CardListStyles } from "./card-list.style";
import Card from "../card/card-component";
import { Monster } from "../../App";

type CardListProps = {
    monsters: Monster[];
}

const CardList = ({ monsters }: CardListProps) => (
    <CardListStyles>
        {monsters.map((monster) => {
            return <Card monster={monster}/>;
        })}
    </CardListStyles>
)

export { CardList as default }