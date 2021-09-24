import styles from "styles/App.module.scss";
import { useContext } from "react";
import SelectionContext from "utils/SelectionContext";

export default function Tab(props: any) {
    const { selection, setSelection } = useContext(SelectionContext);
    return (
        <div
            className={`${styles.tab} ${
                selection === props.name ? styles.selected : ""
            }`}
            onClick={() => setSelection(props.name)}
        >
            {props.name}
        </div>
    );
}
