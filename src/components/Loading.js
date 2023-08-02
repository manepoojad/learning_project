import React from 'react';
import './loading.css'

const Loading = () => {
  return (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
};

export default Loading;