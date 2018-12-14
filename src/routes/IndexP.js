import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

function IndexP({ dispatch, indexP }) {

  function jump() {
    dispatch(routerRedux.push({
      pathname: "/secondP",
      query: {}
    }));
  }

  return (
    <div>
      <ul style={{ margin: 0, listStyle: 'none' }}>
        {indexP.list.length > 0 && indexP.list.map((v, i) => (
          <li key={v.key} onClick={jump}>{v.name}</li>
        ))}
      </ul>
    </div>
  );
}

IndexP.propTypes = {
};

function mapStateToProps({ indexP }) {
  return { indexP }
}

export default connect(mapStateToProps)(IndexP);
