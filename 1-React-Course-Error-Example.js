import React from 'react';

const ErrorExample = () => {
  let title = "Ramdom title";
  const handleClick = ()=> {
    console.log(title)
    title = 'Hello people';
  }

  return (
    <>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>Change title</button>
    </>
  )
};

export default ErrorExample;
