import React from 'react'
import TRnobakcground from '../Images/TRlogonobackgroundpng.png';

function Home() {







  return (
    <>
  
    
    <div className="App">
     <img src={TRnobakcground} /> 
    </div>

    <hr></hr>

   <div className='about'><h2> 
<br>Tech-Refresher is an innovative yet nostalgic approach to educating and refreshing new and aspiring developers with the foundational  coding languages, frameworks, and technology concepts.</br> <br> Tech Refresher is a web application that doubles as an educational flash-card styled memory game. </br>

<br>Just like a standard memory game, the user is offered the chance to choose two random cards at a time out of a 20 card digital pile cards and match the information with the respective language. </br>

<br>Tech-Refresher was developed for and by coding students. We recognized the struggle to constantly remember every single coding language, concept, and framework. We wanted to offer a fun and practical solution to help new and aspiring coders mentally refresh their coding skillsets. </br>

 </h2>
</div> 
    
    

    </>
    
  )
}

export default Home