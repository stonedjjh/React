import { FC, HTMLAttributes, ReactNode } from "react";

type TitleProps = HTMLAttributes<HTMLElement> & {
    as?: string;
    children: ReactNode;
}

const Title: FC<TitleProps> = ({ children, as, ...props }) => {
    const Component = as || 'h1';

    return (
        <Component {...props}>
            {children}
        </Component>
    );
};

export default Title;