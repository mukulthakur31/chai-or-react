import React from 'react'
// import UserContext from './UserContext'
// on thing we have to make sure that here we export two functions  so we export them in curly brackets  so if we want to import them in any other component then we have import them with the help of curly brackets 
const UserContext=React.createContext()

const UserContextProvider=({children})=>{
    const [user,setuser]=React.useState(null)
    return(
        <UserContext.Provider value={{user,setuser}}>
        {children}
        </UserContext.Provider>
    )
}

export{UserContext,UserContextProvider}

