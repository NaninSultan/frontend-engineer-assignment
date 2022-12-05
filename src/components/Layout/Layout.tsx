import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode, FunctionComponent, useState, useEffect } from "react";
import "./Layout.css";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../store";
import { search, showSearch } from '../../features/search/searchSlice'

type LayoutProps = {
    children: ReactNode
}


const Layout: FunctionComponent<LayoutProps> = ({ children }) => {

    const dispatch = useDispatch()
    const searchValue = useSelector((state: RootState) => state.search.search)
    const show = useSelector((state: RootState) => state.search.showSearch)

    // const [showSearch, setShowSearch] = useState(false)

    return (
        <div className="layout-container">
            <div className="header">
                <h1>TOP 10</h1>
                <div className={`search ${show ? "show-search" : ""}`}>
                    <FontAwesomeIcon onClick={() => dispatch(showSearch(!show))} icon={faSearch} className="search-icon search" />
                    {show ? <input
                        type="search"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(search(e.target.value))}
                        placeholder='Search'
                        className='search-input'
                        value={searchValue}
                    /> : null}
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