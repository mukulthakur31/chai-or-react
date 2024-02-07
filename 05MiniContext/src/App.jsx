
import Login from './Components/Login'
import Profile from './Components/Profile'
import { UserContextProvider } from'./Context/UserContextProvider'
// **********************************NOTES*****************************************************
// so we use context so that one component can access value of another component for that first we have to ceate a context by using createcontext() which provide us a context provider  and we have to wrap all the components in contextprovider in which we want to exchange data so in this code we first create a context by createcontext() in usercontextprovider function than we make a usercontextprovider function  in which we paass a prop as a {children} which means all the component in usercontextprovider are children  and we make a usestate hook so that we can update value in context  so when we use usercontextprovider component we pass the values of hook in it so that all the children or we can say that all the components wrap in it can access these values user and setuser  now as we now login component is in usercontextprovider so it can accesss both  user and set user function but in login we want to set values so we use setuserfunction but we can not access in directly we have to use usecontext hook in component in which we want too use context now  with the help of usecontext hook we use setuser function const {setUser} = useContext(UserContext) this i ssyntax to use usecontext hook and with the help of hook we use usercontext which we make in  usercontextprovider funtion and from  there we can access setuser as we know contextprovider is part of context and set user is part of contextprovider so it makes a chain and we can use it  soo  when we click submit with the help of setuser it set the values in context setUser({username, password}) like that . so these values are set in context now when another component want to access these values they can import usecontext and takes values from the context because we make an hook in context provider const [user,setuser]=React.useState(null) so in previous componet set users value in context and next component can access it  like we have profile component it access user function from const {user} = useContext(UserContext) and  access  values like that Welcome {user.username}

function App() {
  return (
    <UserContextProvider>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
