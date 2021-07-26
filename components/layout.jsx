import NavBar from "../pages/navbar";

const Layout = ({children}) => {
    return (
        <div>
            <NavBar />
             {children}
        </div>
       
     );
}
 
export default Layout;