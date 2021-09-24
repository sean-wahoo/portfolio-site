import Tab from "components/Tab";
import styles from "styles/App.module.scss";

export default function TabList(props: any) {
    const tabNames = ["about", "tech", "projects", "contact"];

    const tabs = tabNames.map((tab, i) => {
        return <Tab name={tab} key={i} />;
    });

    return <div className={styles.tablist}>{tabs}</div>;
}
