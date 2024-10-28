import React from 'react'

<<<<<<< Updated upstream
const Team = () => {
  return (
    <div>
      Team
    </div>
  )
=======
function Team() {
  return (
    <div className='container'>
        <div className="row p-5 mt-5 mb-5 border-top">
            <h1 className="text-center ">
            People</h1>
        </div>
      
        <div className="row p-5 text-muted" 
        style={{lineHeight:"1.8",fontSize:"1.2em"}}>

            <div className="col-6 p-5 text-center">
                <img src="media/nithinKamath.jpg" style={{borderRadius:"100%", width:"60%"}}/>
                <h4 className="mt-5">Nithin Kamath</h4>
                <h6>Founder, CEO</h6>
            </div>
            <div className="col-6 p-5">
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, InvestBuddy has changed the landscape of the Indian broking industry.</p>
                <p>
                    <a href="" style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p>
            </div>
        </div>
    </div>
  );
>>>>>>> Stashed changes
}

export default Team
