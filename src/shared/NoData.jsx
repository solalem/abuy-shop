import React from 'react';
import * as FaIcons from 'react-icons/fa';

const NoData = () => {
  return (
    <div className="text-center m-4">
      <FaIcons.FaExclamationCircle className="fa-lg"/>
      <p>No Data Found</p>
    </div>
  )
};

export default NoData;
