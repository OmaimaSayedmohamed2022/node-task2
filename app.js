const forecast =require("./data.js/forecast")
  const geocode= require("./data.js/geocode")
 
  const latitude = process.argv[2];
  const longtitude = process.argv[3];
  
  
  
  forecast( latitude , longtitude , (error , data) => {
    console.log("ERROR : " , error)
    console.log("DATA  : " , data)
  
  if(data){
   geocode (data.country , (error , data) => {
      console.log("ERROR : " , error)
      console.log("DATA  : " , data)
  
    
          } )
        } else {
                  console.log("Data Entered have An Error")
              }
        })

      
    

 


