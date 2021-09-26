import styles from "styles/App.module.scss";

export default function Footer(props: any) {
    const variableStyle = props.isMenu
        ? styles.footer_menu
        : styles.footer_content;

    return (
        <div className={`${styles.footer} ${variableStyle}`}>
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
            <div className={styles.copyright}>
                <p>Copyright © 2021 Sean Reichel. All Rights Reserved</p>
            </div>
        </div>
    );
}
