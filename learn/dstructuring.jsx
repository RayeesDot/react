const Dstructuring = ()=>{
    // destructuring on array
    // with out destructuring (by tredition)
let arr = [10,20,30,40]
let a=arr[0]
let b=arr[1]
let c=arr[2]
let d=arr[3]
// with destructuring 
let [e,f,g,h] = arr

// destructuring on objects
let obj = {
    name : "Rayees",
    lastName : "Ahamd",
    id : 786
}

 // with out destructuring (by tredition)
 let nameN = obj.name
 let lastNameN = obj.lastName
 let idN = obj.id 
// console.log(nameN)
// with destructuring 
const {name,lastName,id} = obj
// console.log(lastName)
 return(
    <>
    {a + " " + b +" " + c + " "+d}<br></br> {/*10 20 30 40*/} 
    {e + " " + f +" " + g + " "+h}  {/* 10 20 30 40 */} <br></br>

     {nameN + " " + lastNameN + " " + idN} <br></br>  {/*Rayees Ahmad 786 */}
    {name + " " + lastName + " " + id} {/*Rayees Ahmad 786 */}
    </>
)
}
export default Dstructuring