import Link from "next/link"
import React from 'react';

const NavBar = () => {
    return (<nav>
        <ul style={{listStyle:'none', display: 'flex'}}>
            <li>
                <Link href="/">Home</Link>    
            </li>
            <li>
                 <Link href="/about">About</Link>    
            </li>
            <li>
                 <Link href="/todos" exact>Todos</Link>    
            </li>
        </ul>
    </nav> );
}
 
export default NavBar;