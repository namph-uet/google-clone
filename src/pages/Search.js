import React, { useState } from 'react'
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import "./Search.css"
import { Button } from "@material-ui/core"

function Search({ hideButtons }) {
    const [input, setInput] = useState("");

    const search = e => {
        e.preventDefault();
    }

    history.pushState("/search")

    return (
        <div className="search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>

            {!hideButtons ? (
                <div className="search_buttons">
                    <Button type="submit" variant="outlined" onClick={search}>Google Search</Button>
                    <Button variant="outlined">I'm feeling Luckey</Button>
                </div>
            ) : (
                <div className="search_buttons">
                    <Button type="submit" variant="outlined" onClick={search}>Google Search</Button>
                    <Button variant="outlined">I'm feeling Luckey</Button>
                </div>
            )}

        </div>
    )
}

export default Search
