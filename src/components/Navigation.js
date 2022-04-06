import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = (props) => {
    const cartStyle = {
        background: 'blue',
        display: "flex",
        borderRadius:'54px'
    }
    return (
        <>
        <nav className="container mx-auto flex items-center justify-between">
            <Link to="/">
                <img style={{ height: "45px" }} src="/images/burger1.jpg" alt="burger" />
            </Link>
            <ul className="flex items-center">
                <li className="" >
                    <Link to="/">Home</Link>
                </li>
                <li className="ml-2 mr-2" >
                    <Link to="/products"> Products</Link>
                </li>
                <li>
                    <Link to="/cart">
                        <div style={cartStyle}>
                            <span className="mr-4 mt-4">
                                12
                            </span>

                            <img style={{ height: "45px" }} src="/images/burger2.jpg" alt="burger2" />
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
        {props.children}
        </>
    )
}

export default Navigation