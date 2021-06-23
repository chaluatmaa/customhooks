import React, { useEffect, useState } from 'react'

// forwards = true is added here as a falg to check for type of counter.
// If it's present then it'll be a forward counter , else backward counter.
const useCounter = (forwards = true) =>{
    const [counter, setCounter] = useState(0);
    
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setCounter((prevCounter) => prevCounter + 1);
//       }, 1000);
  
//       return () => clearInterval(interval);
//   }, []);

//   Now we have to reconfigure the above function according to our needs
//   That is whetther it should be a Forward Counter or Backward Counter.
   
useEffect(() => {
    const interval = setInterval(() => {
        if(forwards){

            setCounter((prevCounter) => prevCounter + 1);
        } else
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
}, [forwards]);

return counter
}

export default useCounter