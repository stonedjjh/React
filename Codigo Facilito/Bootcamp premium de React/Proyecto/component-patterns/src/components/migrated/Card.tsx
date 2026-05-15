import { FC, ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

interface CardHeaderProps {
    children: ReactNode;
}

interface CardContentProps {
    children: ReactNode;
}

interface CardFooterProps {
    children: ReactNode;
}

interface CardComposition extends FC<CardProps> {
    Header: FC<CardHeaderProps>;
    Content: FC<CardContentProps>;
    Footer: FC<CardFooterProps>;
}

const Card: CardComposition = ({ children }: CardProps) => (
    <div>
        {children}
    </div>
);

const CardHeader: FC<CardHeaderProps> = ({ children }) => (<div>{children}</div>);

const CardContent: FC<CardContentProps> = ({ children }) => (<div>{children}</div>);

const CardFooter: FC<CardFooterProps> = ({ children }) => (<div>{children}</div>);

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;