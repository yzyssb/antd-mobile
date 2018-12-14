import React from 'react';
import { connect } from 'dva';

function SecondP({ dispatch,secondP }) {
  
  return (
    <div>
      2222
    </div>
  );
}

SecondP.propTypes = {
};

function mapStateToProps({ secondP }) {
  return { secondP }
}

export default connect(mapStateToProps)(SecondP);
