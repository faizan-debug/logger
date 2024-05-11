
import React, { useState, useEffect } from 'react'


const DeveloperListModal = () => {
    const [developers, setDvelopers] = useState ([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getDevelopers();
        // eslint-disable-next-line
    }, [])

    const getDevelopers = async () => {
        setLoading(true);
        const res = await fetch('/developers');
        const data = await res.json();

       
        setLogs(data);
        setLoading(false);
    }

    if (loading) {
        return <Preloader/>
    }
    

  return (
    <ul className="collection with-header">
        <li className="collection-header">
            <h4 className='center'>Developer Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
            <p className='center'>There are currently no Developer Logs</p>
        ) : (
            logs.map(log => <LogItem key={log.id} log={log}/>)
            
        )}
        
       
      </ul>
      
  )
}


export default Logs
