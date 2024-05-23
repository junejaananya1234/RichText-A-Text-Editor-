import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header/Header'
import './App.css'
import Editor from './Components/Editor/Editor'
import UtilityBtn from './Components/UtilityBtn/UtilityBtn'
import Summary from './Components/Summary/Summary'
import { useReducer } from 'react'
import Preview from './Components/Preview/Preview'

const initialState = {
  text : "",
  numWords: 0,
  numChars: 0,
  copySuccess : false,
}
const reducer = (state, action) => {
   switch (action.type) {
    case "UPDATE_TEXT":
      // console.log(action)
      const updateNoOfWords = action.payload.split(" ").filter((word) => word.trim().length > 0).length;
      return {
        ...state, 
        numWords : updateNoOfWords,
        numChars : action.payload.length,

        text : action.payload,
  
      };
      case "UPPER_CASE":
        return{
          ...state,// spreading all the state as i dont want to disturb/ or change the other state apart from uppercase
          text : state.text.toUpperCase(),
          copySuccess : false,
        };
        
        case "LOWER_CASE":
          return{
            ...state,
            text : state.text.toLowerCase(),
            copySuccess : false,
          };

          case "CLEAR":
          return initialState

          case "COPY_TEXT":
            return {
              ...state,
              copySuccess : true,
            };

            case "EXTRA_SPACE":
              return{
                ...state,
                text : state.text.trim(),
              }
          default:
      return state;
   }
}
function App() {
const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
     <Header></Header>
     <Editor state={state} dispatch={dispatch}></Editor>
     <UtilityBtn  dispatch={dispatch}></UtilityBtn>
     <Summary state={state}></Summary>
     <Preview state={state}></Preview>
    </>
  )
}

export default App
