import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = ( { addLog } ) => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState('');
    const [developerOptions, setDeveloperOptions] = useState([]);
    const [developer, setDeveloper] = useState('');

    useEffect(() => {
        const fetchDeveloperData = async () => {
            try {
                // Fetch developer data
                const res = await fetch('/developers')
                const Developers = await res.json();
                // Set developer options in state
                setDeveloperOptions(Developers);
                console.log(Developers);

               // console.log(developerOptions);
            } catch (error) {
                console.error('Error fetching developer data:', error);
            }
        };

        // Call the fetchDeveloperData function
        fetchDeveloperData();
        
    }, []);


    const onsubmit = () => {
        if ( message === '' || developer === '') {
            M.toast({ html: 'Please provide values for message and developer'})
        } else {
            const newLog = {
                message,
                attention,
                developer,
                date: new Date()
            }
            addLog(newLog);
            M.toast({ html: 'Log Added'})
            setMessage('');
            setAttention(false);
            setDeveloper('');
        }
    }

  return (
    <div id='add-log-modal' className='modal'>
        <div className="modal-content">
            <h4>Enter Developer Log</h4>
            <div className="row">
                <div className='input-field'>
                    <input type="text"
                        name='message'
                        value={message}
                        onChange={e => setMessage(e.target.value)} />
                    <label htmlFor="message" className='active'>Developer Log</label>
                </div>
            </div>
            <div className="row">
                <div className='input-field'>
                <select
                    name="developer"
                    value={developer}
                    className='browser-default'
                    onChange={e => setDeveloper(e.target.value)}
                >
                    <option value="" disabled>Select Developer</option>
                    {/* Map over developer options to create option elements */}
                    {developerOptions.map(developer => (
                        <option key={developer.id} value={developer.firstName + ' ' + developer.lastName}>
                            {developer.firstName + ' ' + developer.lastName}
                        </option>
                    ))}
                </select>
                </div>
            </div>
            <div className="row">
                <div className="input-field">
                    <p>
                        <label>
                            <input type="checkbox" 
                                    className='filled-in'
                                    checked={attention}
                                    value={attention}
                                    onChange={e => setAttention(!attention)}
                            />
                            <span>Needs Attention</span>
                        </label>
                    </p>
                </div>
            </div>
        </div>
        <div className="modal-footer">
            <a href="#!" onClick={onsubmit}
                        className='modal-close waves-effect waves-blue btn-flat'
            >
                Submit
            </a>
        </div>      
    </div>
  )
}

AddLogModal.propTypes = {
    addLog: PropTypes.func.isRequired,
}

export default connect(null, {addLog})(AddLogModal)
