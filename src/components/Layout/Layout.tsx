import React, { ReactNode, FunctionComponent } from "react";
import { search, showSearch } from '../../features/search/searchSlice';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from 'react-redux'
import "./Layout.css";
import { RootState } from "../../store";

type LayoutProps = {
    children: ReactNode
}


const Layout: FunctionComponent<LayoutProps> = ({ children }) => {


    const dispatch = useDispatch()
    const searchState = useSelector((state: RootState) => state.search)

    return (
        <div className="layout-container">
            <div className="header">
                <h1>TOP 10</h1>
                <div className={`search ${searchState.showSearch ? "show-search" : ""}`}>
                    <div onClick={() => dispatch(showSearch(!searchState.showSearch))} style={{ display: 'flex' }} >
                        <FontAwesomeIcon icon={faSearch} className="search-icon search" />
                        {!searchState.showSearch && <div>Search</div>}
                    </div>

                    {searchState.showSearch ? <input
                        autoFocus
                        type="search"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(search(e.target.value))}
                        placeholder='Search'
                        className='search-input'
                        value={searchState.search}
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