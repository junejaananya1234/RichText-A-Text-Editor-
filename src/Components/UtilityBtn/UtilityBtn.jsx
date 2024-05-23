const UtilityBtn = ({ text, dispatch}) =>{
    const convertToUpperCase = ()=>{
        dispatch({
            
            type : "UPPER_CASE",
        });

        
    }

    const changeToLowerCase = () =>{
        dispatch({
            type : "LOWER_CASE",
        })
    }

    const changeToClear = () =>{
        dispatch({
            type : "CLEAR",
        })
    }

    const copyToClipboard = (text) =>{
            navigator.clipboard.writeText(text)
            dispatch({
                type : "COPY_TEXT",
            })
            
    }

    const removeSpace = (e) =>{
        dispatch({
            type : "EXTRA_SPACE",
        })
    }
    return(
        <div className="flex justify-center items-center">
        <section className="flex gap-4 ">
        <div><button className="border border-solid border-white text-[15px] px-1 py-1 text-white" onClick={convertToUpperCase}>UpperCase</button></div>
        <div><button className="border border-solid border-white text-[15px] px-1 py-1 text-white" onClick={changeToLowerCase}>LowerCase</button></div>
        <div><button className="border border-solid border-white text-[15px] px-1 py-1 text-white" onClick={changeToClear}>Clear</button></div>
        <div><button className="border border-solid border-white text-[15px] px-1 py-1 text-white" onClick={copyToClipboard}>Copy To Clipboard</button></div>
        <div><button className="border border-solid border-white text-[15px] px-1 py-1 text-white" onClick={removeSpace}>Extra Space</button></div>
    </section>
    </div>
    )
}

export default UtilityBtn;