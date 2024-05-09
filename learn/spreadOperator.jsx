const spreadOp = () =>{
let arr = [10,20,30,40]
const sum =(a,b,c,d)=>{
    // console.log(a+b+c+d)
  return a+b+c+d
}
const result = sum(...arr) // abb yeh array ko tood tood ke bejega


let fullName = {
    fName : "Rayees",
    mName : "Ahmad",
    lName : "Gadda"
}
let address ={
    locality : "Jawbrara",
    city :"Awantipora",
    district : "Pulwama"
}
const fullBioData ={
    id : 786,
    ...fullName,
    ...address,
    gender : "male"
}
console.log(fullBioData)

return(
    <>
    {result}
   
    </>
)
}
export default spreadOp

