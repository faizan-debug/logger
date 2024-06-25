import React, { useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchLogs } from '../../actions/logActions'

const SearchBar = ({ searchLogs }) => {

  const text = useRef();

  const onChange = (e) => {
    e.preventDefault(); // Prevent form submission

    // Get the current value of the input field
    const searchText = text.current.value;

    // Check if the input field is not empty
    if (searchText.trim() !== '') {
      // Call the action creator with the value
      searchLogs(searchText);
      
    } else {
      // Handle empty input if needed
    }
  };


  return (
    <nav className='blue'>
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search" placeholder='Search Developer Logs'
                ref={text}
                onChange={onChange}
          />
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
  )
}

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
}

export default connect(null, {searchLogs})(SearchBar);
