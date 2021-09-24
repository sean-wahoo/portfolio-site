import Tab from "components/Tab";

export default function TabList() {
    const tabNames = ["about.js", "tech.js", "projects.js", "contact.js"];

    const tabs = tabNames.map((tab, i) => {
        <Tab name={tab} key={i} />;
    });

    return ();
}
