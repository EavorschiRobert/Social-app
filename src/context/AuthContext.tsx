import { getCurrentUser } from '@/lib/appwrite/api';
import React, { useContext, useState } from 'react'
import { createContext } from 'vm';


export const INITIAL_USER = {
    id: '',
    name: '',
    username: '',
    email: '',
    imageUrl: '',
    bio: ''
};

export const INITIAL_STATE = {
    user: INITIAL_USER,
    isLoading: false,
    isAuthenticated: false,
    setUser: () => {},
    setIsAuthenticated: () => {},
    checkAuthUser: async () => false as boolean,
}

const AuthContext = createContext(INITIAL_STATE);

const AuthProvider = ({children} : {children : React.ReactNode}) => {
    const [user, setUser] = useState(INITIAL_USER);
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const checkAuthUser = async () => {
        try{
            const currentAccount = await getCurrentUser();

            if(currentAccount){
                setUser({
                    id: currentAccount.$id,
                    name: currentAccount.$name,
                    username: currentAccount.$username,
                    email: currentAccount.$email,
                    imageUrl: currentAccount.$imageUrl,
                    bio: currentAccount.$bio,
            })
            }
        }catch(error){
            console.log(error);
            return false;
        }finally{
            setIsLoading(false);
        }
    };

    const value = {user, setUser, isLoading, isAuthenticated, setIsAuthenticated, checkAuthUser}
  return (
    <AuthContext.Provider value={value}>

    </AuthContext.Provider>
  )
}

export default AuthProvider