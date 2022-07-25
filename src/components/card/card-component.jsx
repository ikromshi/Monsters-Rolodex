import { CardContainer } from "./card.style";

const Card = ({ monster }) => {
    const { id, name, email } = monster;
    return (
        <CardContainer key={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </CardContainer>
    )
}

export { Card as default};