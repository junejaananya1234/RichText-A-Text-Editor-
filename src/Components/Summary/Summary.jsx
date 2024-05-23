const Summary = ({ state }) =>{
    return(
        <div className="flex flex-col  justify-center items-center mt-3 ">
            <p className="text-2xl font-semibold text-white">Session Summary</p>
            <p className="text-xl text-white">Total Words: {state.numWords}</p>
            <p className="text-xl text-white">Total Letters: {state.numChars}</p>
        </div>
    )
}
export default Summary;