import { History24Regular } from "@fluentui/react-icons";
import { Button } from "@fluentui/react-components";
import { useTranslation } from "react-i18next";

import styles from "./HistoryButton.module.css";

interface Props {
    className?: string;
    onClick: () => void;
    disabled?: boolean;
}

export const HistoryButton = ({ className, disabled, onClick }: Props) => {
    const { t } = useTranslation();
    return (
        <div className={`${styles.container} ${className ?? ""}`}>
            <Button appearance="secondary" icon={<History24Regular primaryFill="var(--accent)" />} disabled={disabled} onClick={onClick}>
                {t("history.openChatHistory")}
            </Button>
        </div>
    );
};
