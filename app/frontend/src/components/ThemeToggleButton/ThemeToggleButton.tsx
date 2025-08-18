import { useContext } from "react";
import { IconButton, IIconProps } from "@fluentui/react";
import { ThemeContext } from "../../themeContext";
import styles from "./ThemeToggleButton.module.css";

interface Props {
    className?: string;
}

export const ThemeToggleButton = ({ className }: Props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const iconProps: IIconProps = { iconName: theme === "light" ? "ClearNight" : "Sunny" };

    return <IconButton iconProps={iconProps} className={styles.themeButton} onClick={toggleTheme} ariaLabel="Toggle color theme" />;
};

export default ThemeToggleButton;
