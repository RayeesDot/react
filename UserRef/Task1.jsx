 import React, { useRef } from 'react'
 
 const TaskUseRef = () => {
   const inputRef = useRef()
   const showFileName=()=>{
    alert(`selected file is : ${inputRef.current.files[0].name} `) // useRef not support rerendering so to rerender this it can be done with useState hook
   }
   return (
     <div>
      <input type="file" placeholder='choose file' ref={inputRef} />
       <button onClick={showFileName}>show file name</button>
     </div>
   )
 }
 
 export default TaskUseRef
 



//  If you want to display the selected file after it's chosen by the user and rerender it, you can achieve this by updating the component state with the selected file and then rendering it accordingly. Here's how you can modify the component to achieve this:

// import React, { useRef, useState } from 'react';

// const TaskUseRef = () => {
//   const inputRefMine = useRef();
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = () => {
//     // Access the selected file from inputRefMine.current.files
//     const file = inputRefMine.current.files[0];
//     setSelectedFile(file);
//   };

//   return (
//     <div>
//       {/* Use type="file" for file input */}
//       <input type='file' placeholder='choose file' ref={inputRefMine} onChange={handleFileChange} />

//       {/* Render the selected file if available */}
//       {selectedFile && (
//         <div>
//           <p>Selected File: {selectedFile.name}</p>
//           {/* Display the file content or preview here */}
//           {/* For now, just showing the file name */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TaskUseRef;
