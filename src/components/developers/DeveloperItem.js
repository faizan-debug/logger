import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteDeveloper } from '../../actions/developerActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const DeveloperItem = ({ developer, deleteDeveloper }) => {

  const onDelete = () => {
    deleteDeveloper(developer.id);
    M.toast({ html: 'Developer Deleted'})
    window.location.reload();
}

  return (
    <li className='collection-item'>
        <div>
            {developer.firstName } {developer.lastName}
            <a href="#!" onClick={onDelete} className='secondary-content'>
            <i className='material-icons grey-text' >delete</i>
            </a>
        </div>
    </li>
  )
}

DeveloperItem.propTypes = {
    developer: PropTypes.object.isRequired,
    deleteDeveloper: PropTypes.func.isRequired,
}

export default connect(null, {deleteDeveloper})(DeveloperItem)
