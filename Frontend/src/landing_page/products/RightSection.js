import React from 'react'

function RightSection({imageURL, productName, prodDesc,learnMore}) {
  return (
    <div className="container mt-1">
      <div className="row align-items-center">
        <div className="col-6 p-5 mt-4">
          <h1>{productName}</h1>
          {/* <p>{prodDesc}</p> */}
          <p dangerouslySetInnerHTML={{ __html: prodDesc }}></p>
          <div>
            <a href={learnMore} >Learn More</a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} className="img-fluid"></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection
