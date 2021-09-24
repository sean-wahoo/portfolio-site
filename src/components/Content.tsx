import styles from "styles/App.module.scss";
import ReactMarkdown from "react-markdown";
import TabList from "components/TabList";
import { useContext } from "react";
import SelectionContext from "utils/SelectionContext";

export default function Content() {
    const selection = useContext(SelectionContext);
    return (
        <div className={styles.content}>
            <TabList tabSelected={selection} />
        </div>
    );
}
