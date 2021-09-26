import { createContext, useState } from "react";

type SelectionContextType = {
    selection: string;
    setSelection: (value: string) => void;
};

const SelectionContext = createContext<SelectionContextType>({
    selection: "about",
    setSelection: () => {},
});
export const SelectionProvider = (props: any) => {
    const [selection, setSelection] = useState("about");

    return (
        <SelectionContext.Provider value={{ selection, setSelection }}>
            {props.children}
        </SelectionContext.Provider>
    );
};

export default SelectionContext;
