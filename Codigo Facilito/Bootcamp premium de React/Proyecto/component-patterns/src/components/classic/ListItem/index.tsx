import { FC, ReactNode } from "react";

type ListItemProps = {
    children: ReactNode;
};

const ListItem: FC<ListItemProps> = ({ children, ...props }) => {
    return (
        <li {...props}>
            {children}
        </li>
    );
};

export default ListItem;