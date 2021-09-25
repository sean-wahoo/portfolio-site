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
            </div>
        </SelectionContext.Provider>
    );
}
