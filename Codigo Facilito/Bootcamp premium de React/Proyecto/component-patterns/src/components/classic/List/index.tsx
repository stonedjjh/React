import { FC } from "react";
import ListItem from "../ListItem";

type ListProps = {
    items: string[];
};

const List: FC<ListProps> = ({ items }) => {

    if (items.length === 0) {
        return <p>No items found</p>;
    }

    return (
        <ul>
            {items.map((item, index) => <ListItem key={`list-item-${index}-${item.toString()}`}>{item}</ListItem>)}
        </ul>
    );
};

export default List;