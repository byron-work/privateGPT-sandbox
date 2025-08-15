import { ArrowCircleDown24Filled } from "@fluentui/react-icons";
import { Button } from "@fluentui/react-components";
import styles from "./JumpToLatestButton.module.css";

interface Props {
    className?: string;
    onClick: () => void;
}

export const JumpToLatestButton = ({ className, onClick }: Props) => {
    return (
        <div className={`${styles.container} ${className ?? ""}`}>
            <Button
                shape="circular"
                size="large"
                appearance="primary"
                icon={<ArrowCircleDown24Filled primaryFill="var(--accent)" />}
                onClick={onClick}
                aria-label="Jump to latest"
            />
        </div>
    );
};
