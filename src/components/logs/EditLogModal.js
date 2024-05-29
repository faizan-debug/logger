import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateLog } from '../../actions/logActions';
import { getDeveloper } from '../../actions/developerActions';
import M from 'materialize-css/dist/js/materialize.min.js';


const EditLogModal = ({updateLog, current, getDeveloper}) => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
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

    useEffect(() => {
        if (current) {
            setMessage(current.message);
            setAttention(current.attention);
            setDeveloper(current.developer);
        } else {
            setMessage('');
            setAttention(false);
            setDeveloper('');
        }
    }, [current])

    const onsubmit = () => {
        if ( message === '' || developer === '') {
            M.toast({ html: 'Please provide values for message and developer'})
        } else {
            const updatedLog = {
                id: current.id,
                message,
                attention,
                developer,
                date: new Date()
            }

            updateLog(updatedLog);
            M.toast({ html: 'Log Updated'})

            setMessage('');
            setAttention(false);
            setDeveloper('');
        }
    }


  return (
    <div id='edit-log-modal' className='modal'>
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

EditLogModal.propTypes = {
    current: PropTypes.object,
    updateLog: PropTypes.func.isRequired,
    getDeveloper: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    current: state.log.current
})

const mapDispatchToProps = {
    getDeveloper,
    updateLog,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditLogModal)
