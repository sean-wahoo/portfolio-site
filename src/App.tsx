import { useEffect, useContext } from "react";
import Menu from "components/Menu";
import Content from "components/Content";
import styles from "styles/App.module.scss";
import SelectionContext, { SelectionProvider } from "utils/SelectionContext";

//<script src="https://kit.fontawesome.com/eb9214e190.js" crossorigin="anonymous"></script>

function App() {
    const { selection, setSelection } = useContext(SelectionContext);
    // const handleSelectionUpdate = (selFromChild: string) => {
    //     setSelection(selFromChild);
    // };
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://kit.fontawesome.com/eb9214e190.js";
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    });

    //TODO: make a markdown page for each selection and start using git dumbass
    //ALSO TODO: make a fun little code editor that runs code lol

    return (
        <div className={styles.container}>
            <SelectionProvider value={{ selection, setSelection }}>
                <Menu />
                <Content />
            </SelectionProvider>
        </div>
    );
}

export default App;
