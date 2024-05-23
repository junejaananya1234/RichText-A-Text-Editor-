import { useReducer } from "react"
const Editor = ({ state, dispatch }) =>{

    const handleTextChange = (e)=>{
      dispatch({
        type : "UPDATE_TEXT",
        payload : e.target.value,
      })
    }
    return(
        <>
        <div className="flex justify-center items-center flex-col gap-20 ">
            <div className="text-3xl  font-medium">
            <p>Text Rich: Word Counter, Character Counter, Remove ExtraSpace</p>
            </div>
            <div className="flex flex-col gap-6">
            <p className="text-2xl font-semibold">Enter your Text Here:</p>
            <section >
                <textarea rows={8} cols={80} className="p-3 outline-none border-2 border-solid border-black shadow-lg" value={state.text}
                    onChange={handleTextChange}>
                    
                 
                </textarea>

            </section>
           
            </div>


           
        </div>
        </>
    )
}
export default Editor;