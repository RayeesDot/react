import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
// import ChildToP from './PropschildToparent/cToP';
// import MyLocalStorage from './localstorage/myLocalS';
// import Localstorage from './localstorage/Localstorage';
// import UseEffect from './useEffect/UseEffect';
// import LearnUsereducer from './useReducer/learn';
// import UseReducerHomeWork from './useReducer/reducerWithForm/homeWork';
// import UseReducerWithForm from './useReducer/reducerWithForm/reducerWithform';
// import UseState from './useStateFolder/UseStateFile'
// import UseState from './useStateFolder/UseStateFile1'
// import Form from './useStateFolder/form';
// import Form1 from './useStateFolder/myForm'
// import Form2 from './useStateFolder/changesOnmyform'
// import UseReducer from './useReducer/useReducer';
// import UseReducerWithObj from './useReducer/useReducerWithObj';
// import { Avatar, Col, Rate, Row } from "antd"
// import Dstructuring from './learn/dstructuring'
// import Spreadop from './learn/spreadOperator'
   import UseRef from './UserRef/UseRef';
// import TaskUseRef from './UserRef/Task1';
// import UseReducerWithFormWithLocalStorage from './localstorage/storeFormData'
   import UseReducerWithForm1WitihLocalS from './localstorage/StoreFormDataInLocalS'
   import Main from './pages/Main';
   import AnyFile from './AnyFile';
   import FormWithUseContext from './MyUseContextTask/FormWithUseContext'
import DisplayFormData from './MyUseContextTask/DisplayFormData';


const App = () => {
//   const func1 = (value,cData) => {
//     console.log(value, 'AM IN PARENT COMOPONENT') // console mai deikna
//     console.log(cData, "mile na parent main")
//   }
  return (
    <div className="center">
      {/* <UseReducerWithForm1WitihLocalS/> */}
      {/* <UseReducerWithFormWithLocalStorage/> */}
      {/* <ChildToP func1={func1} />*/} {/*sending func1 to ChildToP component and above we recive data from child */}
      {/* <UseRef/> */}
      {/* <TaskUseRef/> */}
      {/* <MyLocalStorage/> */}
      {/* <UseState/> */}
      {/* <LearnUsereducer/> */}
      {/* <UseReducerHomeWork/> */}
      {/* <UseEffect/> */}
      {/* <Localstorage/> */}
      {/* <UseReducerWithForm/> */}
      {/* <UseReducer/> */}
      {/* <UseReducerWithObj/>  */}
      {/* <Form/> */}
      {/* <Form1/> */}
      {/* <Form2/> */}
      {/* <Dstructuring/> */}
      {/* <Spreadop/> */}
      {/* <UseState/>*/}






     
      <div>
        <nav className='bg'>
         <ul className='d-flex'>
            <li>
              <Link to="/" className='color-white text-decoration-none'>Form</Link>
            </li>
            <li>
              <Link to="/Form-useContext" className='color-white text-decoration-none'>Form-useContext</Link>
            </li>
            <li>
              <Link to="/DisplayForm-useContext" className='color-white text-decoration-none'>DisplayForm-useContext</Link>
            </li>
            <li>
              <Link to="/about" className='color-white text-decoration-none'>About</Link>
            </li>
            <li>
              <Link to ="/main" className='color-white text-decoration-none'>Main</Link>
            </li>
            <li>
              <Link to ="/anyFile" className='color-white text-decoration-none'>AnyFile</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<UseReducerWithForm1WitihLocalS />} />
          <Route path="/Form-useContext" element={<FormWithUseContext/>} />
          <Route path="/DisplayForm-useContext" element={<DisplayFormData/>} />
          <Route path="/about" element={<UseRef />} />
          <Route path="/main" element={<Main/>} />
          <Route path="/anyFile" element={<AnyFile/>} />
        </Routes>
      </div>
   




    </div>
  );
}

export default App;
