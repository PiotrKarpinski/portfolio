import React from 'react';
import { withRouter } from 'react-router-dom'
// this also works with react-router-native

export const Redirect = withRouter(({ history }) => (
  <button
    type='button'

    onClick={() => {console.log('test'); history.push('/organizer') }}
  >
    Click Me!
  </button>
))
export default Redirect;