import React, { useState } from "react";
import styles from "styles/App.module.scss";

export default function Menu(props: any) {
    const [folder, toggleFolder] = useState(true);
    const [selected, changeSelected] = useState("about");

    const handleSelectionChange = (selection: string) => {
        changeSelected(selection);
        props.sendDataUp(selection);
    };

    return (
        <div className={styles.menu}>
            <li
                className={`fas ${folder ? "fa-folder-open" : "fa-folder"}`}
                onClick={() => {
                    props.sendDataUp(selected);
                    toggleFolder(!folder);
                }}
            >
                seanreichel.com
            </li>
            {folder && (
                <>
                    <li
                        className={`fab fa-js ${
                            selected === "about" && styles.selected
                        }`}
                        onClick={() => handleSelectionChange("about")}
                    >
                        about
                    </li>
                    <li
                        className={`fab fa-js ${
                            selected === "tech" && styles.selected
                        }`}
                        onClick={() => handleSelectionChange("tech")}
                    >
                        tech
                    </li>
                    <li
                        className={`fab fa-js ${
                            selected === "projects" && styles.selected
                        }`}
                        onClick={() => handleSelectionChange("projects")}
                    >
                        projects
                    </li>
                    <li
                        className={`fab fa-js ${
                            selected === "contact" && styles.selected
                        }`}
                        onClick={() => handleSelectionChange("contact")}
                    >
                        contact
                    </li>
                </>
            )}
        </div>
    );
}
