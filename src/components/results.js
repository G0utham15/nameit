import React from 'react'
import NameCard from './NameCard'
import './results.css'
function Results({SuggestedNames}) {
    const suggestions=SuggestedNames.slice(0,20).map((item) =>{return <NameCard SuggestedName={item}/>})
    return (
        <div className="Suggested-names">
            {suggestions}
        </div>
    )
}

export default Results
