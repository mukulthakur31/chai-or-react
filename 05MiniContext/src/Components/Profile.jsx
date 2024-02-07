import React, {useContext} from 'react'
import {UserContext} from"../Context/UserContextProvider"

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}
    <div>passord:{user.password}</div>
    </div>
}

export default Profile