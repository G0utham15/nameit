import React from 'react';
import './NameCard.css';
function NameCard({SuggestedName}) {
    const nameCheapUrl ='https://www.namecheap.com/domains/registration/results/?domain=';
    return (
        <a href={nameCheapUrl+SuggestedName} target="_blank" rel="noopener noreferrer">
            <div className="result-name-card">
                <p className="result-text" key={SuggestedName}>{SuggestedName}</p>
            </div>
        </a>
        
    )
}

export default NameCard
