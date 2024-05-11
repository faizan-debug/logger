import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = () => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState('');
    const [developer, setDeveloper] = useState('');

    const onsubmit = () => {
        if ( message === '' || developer === '') {
            M.toast({ html: 'Please provide values for message and developer'})
        } else {
            console.log(message, attention, developer);
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
                    <select name="developer"
                            value={developer}
                            className='browser-default'
                            onChange={e => setDeveloper(e.target.value)}
                    >
                        <option value="" disabled>Select Developer</option>
                        <option value="Faizan Ali" >Faizan Ali</option>
                        <option value="Adil Altaf" >Adil Altaf</option>
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
            <a href="" onClick={onsubmit}
                        className='modal-close waves-effect waves-blue btn-flat'
            >
                Submit
            </a>
        </div>      
    </div>
  )
}

export default EditLogModal
