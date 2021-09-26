import { Suspense, useEffect, useContext } from "react";
import Menu from "components/Menu";
import Content from "components/Content";
import styles from "styles/App.module.scss";
import SelectionContext, { SelectionProvider } from "utils/SelectionContext";

// const Menu = lazy(() => import("components/Menu"));
// const Content = lazy(() => import("components/Content"));
// const SelectionContext, {SelectionProvider} = lazy(() => import('utils/SelectionContext'))

function App() {
    const { selection, setSelection } = useContext(SelectionContext);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://kit.fontawesome.com/eb9214e190.js";
        script.crossOrigin = "anonymous";
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    });

    //ALSO TODO: make a fun little code editor that runs code lol

    return (
        <Suspense fallback={() => <p>loading...</p>}>
            <div className={styles.container}>
                <SelectionProvider value={{ selection, setSelection }}>
                    <Menu />
                    <Content />
                </SelectionProvider>
            </div>
        </Suspense>
    );
}

export default App;
