import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = () => {
    return (
        <nav className="container mx-auto flex items-center justify-between">

            <Link to="/">
                <img style={{ height: "45px" }} src="/images/burger1.jpg" alt="burger" />
            </Link>
            <ul className="flex items-center">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/products"> Products</Link>
                </li>
                <li>
                    <Link to="/cart">
                        <div>
                            <span>
                                12
                            </span>
                            <img style={{ height: "45px"}}src="/images/burger2.jpg" alt="burger2" />              
                                 </div>



                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navigation