

import React, { useState, useEffect } from 'react'
import DeveloperItem from './DeveloperItem';


const DeveloperListModal = () => {
    const [developers, setDevelopers] = useState ([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getDevelopers();
        // eslint-disable-next-line
    }, [])

    const getDevelopers = async () => {
        setLoading(true);
        const res = await fetch('/developers');
        const data = await res.json();
        

       
        setDevelopers(data);
        setLoading(false);
    }
    

    return (
        <div id='developer-list-modal' className="modal">
            <div className="modal-content">
                <h4>Developer List</h4>
                <ul className='collection'>
                    {!loading &&
                        developers.map(developer => (<DeveloperItem developer={developer} key={developer.id}/>))
                    }
                </ul>
            </div>
        </div>
    )
}


export default DeveloperListModal
