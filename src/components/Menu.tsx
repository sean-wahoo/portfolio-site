import { useState, useContext } from "react";
import SelectionContext from "utils/SelectionContext";
import styles from "styles/App.module.scss";

export default function Menu() {
    const [folder, toggleFolder] = useState(true);
    const { selection, setSelection } = useContext(SelectionContext);

    const handleSelectionChange = (selection: string) => {
        console.log(selection);
        setSelection(selection);
    };

    return (
        <SelectionContext.Provider value={{ selection, setSelection }}>
            <div className={styles.menu}>
                <li
                    className={`fas ${folder ? "fa-folder-open" : "fa-folder"}`}
                    onClick={() => {
                        toggleFolder(!folder);
                    }}
                >
                    seanreichel.com
                </li>
                {folder && (
                    <>
                        <li
                            className={`fab fa-js ${
                                selection === "about" && styles.selected
                            }`}
                            onClick={() => handleSelectionChange("about")}
                        >
                            about
                        </li>
                        <li
                            className={`fab fa-js ${
                                selection === "tech" && styles.selected
                            }`}
                            onClick={() => handleSelectionChange("tech")}
                        >
                            tech
                        </li>
                        <li
                            className={`fab fa-js ${
                                selection === "projects" && styles.selected
                            }`}
                            onClick={() => handleSelectionChange("projects")}
                        >
                            projects
                        </li>
                        <li
                            className={`fab fa-js ${
                                selection === "contact" && styles.selected
                            }`}
                            onClick={() => handleSelectionChange("contact")}
                        >
                            contact
                        </li>
                    </>
                )}
                <div className={styles.socials}>
                    <a
                        href="https://github.com/sean-wahoo"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className={`${styles.icon} fab fa-github`}></i>
                    </a>
                    <a
                        href="mailto:sean.p.reichel@gmail.com?subject=FreelanceProject"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className={`${styles.icon} fas fa-envelope`}></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sean-reichel-a6a9461a7/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className={`${styles.icon} fab fa-linkedin`}></i>
                    </a>
                </div>
            </div>
        </SelectionContext.Provider>
    );
}
