import { faSearch, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode, FunctionComponent, useState } from "react";
import "./Layout.css";

type LayoutProps = {
    children: ReactNode
}


const Layout: FunctionComponent<LayoutProps> = ({ children }) => {

    const [showSearch, setShowSearch] = useState(false)

    return (
        <div className="layout-container">
            <div className="header">
                <h1>TOP 10</h1>
                <div className={`search ${showSearch ? "show-search" : ""}`}>
                    <FontAwesomeIcon onClick={() => setShowSearch(!showSearch)} icon={faSearch} className="search-icon search" />
                    {showSearch ? <input
                        type="search"
                        onChange={(e) => console.log(e)}
                        placeholder='Search'
                        className='search-input' /> : null}
                </div>
            </div>
            <div className="children-container">
                {children}
            </div>
            <div className="footer">
                Made by NaninSultan
            </div>
        </div>
    )
}

export default Layout;