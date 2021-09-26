import styles from "styles/App.module.scss";
import ReactMarkdown from "react-markdown";
import TabList from "components/TabList";
import Footer from "components/Footer";
import { useState, useContext } from "react";
import SelectionContext from "utils/SelectionContext";
import about from "pages/about.md";
import tech from "pages/tech.md";
import projects from "pages/projects.md";
import contact from "pages/contact.md";

export default function Content() {
    const [markdown, setMarkdown] = useState("");
    const { selection } = useContext(SelectionContext);

    selection === "about" &&
        fetch(about)
            .then((response) => response.text())
            .then((text) => setMarkdown(text));

    selection === "tech" &&
        fetch(tech)
            .then((response) => response.text())
            .then((text) => setMarkdown(text));
    selection === "projects" &&
        fetch(projects)
            .then((response) => response.text())
            .then((text) => setMarkdown(text));
    selection === "contact" &&
        fetch(contact)
            .then((response) => response.text())
            .then((text) => setMarkdown(text));

    return (
        <div className={styles.content}>
            <TabList tabSelected={selection} />
            <div className={styles.markdown} key={markdown}>
                <ReactMarkdown linkTarget="_blank">{markdown}</ReactMarkdown>
            </div>
            <Footer isMenu={false} />
        </div>
    );
}
