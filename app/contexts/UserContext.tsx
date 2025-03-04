"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { deleteUser, getUser, saveUser } from "../utils/storage";

interface UserContextType {
    user: string | null,
    setUser: (user: string | null) => void,
    deleteUser: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider( {children}: { children: ReactNode } ) {
    const [user, setUserState] = useState<string | null>(getUser());

    useEffect(() => {
        setUserState(getUser())
    }, [])

    const setUser = (newUser: string | null) => {
        if(newUser) {
            saveUser(newUser)
        } else{
            deleteUser();
        }
        setUserState(newUser)
    };

    const handleDeleteUser = () => {
        deleteUser();
        setUserState(null)
    };

    useEffect(() => {
        const checkUser = () => {
          const storedUser = getUser();
          if (storedUser !== user) setUserState(storedUser);
        };
        window.addEventListener("storage", checkUser);
        return () => window.removeEventListener("storage", checkUser);
      }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser, deleteUser: handleDeleteUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if(!context) throw new Error("useUser must be used within a UserProvider");
    return context
}
