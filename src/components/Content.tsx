import React from "react";
import styles from "styles/App.module.scss";
import ReactMarkdown from "react-markdown";

export default function Content(props: any) {
    return <div className={styles.content}>{props.page}</div>;
}
