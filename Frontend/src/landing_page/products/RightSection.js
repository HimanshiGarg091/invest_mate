import React from 'react'

function RightSection({imageURL, productName, prodDesc,learnMore}) {
  return (
    <div className="container mt-5">
      <div className='row'>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{prodDesc}</p>
          <div>
            <a href={learnMore} >Learn More</a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL}></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection
