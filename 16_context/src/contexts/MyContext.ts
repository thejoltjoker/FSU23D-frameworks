import { createContext, useContext } from "react";
import { MyModel } from "../models/MyModel";

export const MyContext = createContext<MyModel[]>([]);

export const useMyContext = () => useContext(MyContext);
