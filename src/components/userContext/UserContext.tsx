import { createContext, ReactNode, useState } from "react";

interface IFormValues {
        firstName: string;
        lastName: string;
        email: string;
        age: string
}

interface IUserContext {
    user: IFormValues,
    setUser: React.Dispatch<React.SetStateAction<IFormValues>>;
}

interface IUserProviderProps {
    children:ReactNode
}

const initialContext: IUserContext = {
    user: {
        firstName: '',
        lastName: '',
        email: '',
        age: ''
    },
    setUser: () => {}
}

export const UserContext = createContext<IUserContext>(initialContext)

export function UserProvider({children}: IUserProviderProps) {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        age: ''
    })

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>


    )
}