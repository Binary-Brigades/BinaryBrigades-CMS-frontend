import React, {useState} from 'react'
import image from '/tumeiget.png'
function UserProfile({image, description}) {
  return(
    <div className='user-profile'>
      <img src={image} alt="Profile Picture" />
      <p>{description}</p>
    </div>
  )
            
}
function Hero(){
  const user = {
    image,
    description: 'software Engineer passionate about building user-friendly applications.'
  }
  return(
    
    <div className='App'>
      <UserProfile image = {image} description = {user.description}/>
      <p>IMAGE</p>
    </div>
  )
}
export default Hero;

// export default function Hero() {
  


//       <div className="w-screen justify-center items-center flex ">

//         {/* <img 
//           src={image} alt="Project" 
//           className="object-cover"
//           height= "600"
//           width="800"
//           style={{
//             aspectRatio: "800/400",
//             objectFit: "cover"
//           }}
//           /> */}


//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-1 md:px-2 w-[90%] max-w-[780px] ">
          
          
//         </div>
//       </div>
    
// }
