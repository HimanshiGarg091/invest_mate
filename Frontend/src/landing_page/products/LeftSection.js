import React from 'react'

const LeftSection = ({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) => {
  return (
    <div className='container mt-3'>
      <div className='row p-5'>
        <div className='col-6 p-5'>
          <img src={imageURL} alt='product image' className='img-fluid' />
        </div>
        
          <div className='col-6 p-5 mt-4'>
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div className='mt-3'>
            <a href={tryDemo}> Try Demo</a>
            <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
            </div>
            <div className='mt-3'>
            <a href={googlePlay}><img src="media/googlePlayBadge.svg"/></a>
            <a href={appStore}><img src="media/appstoreBadge.svg" style={{marginLeft:"50px"}}/></a>
            </div>

          
        </div>
      </div>
      
    </div>
  )
}

export default LeftSection
