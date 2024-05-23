const Preview = ({ state }) =>{
    return(
        <>
       {/* <div className="flex flex-col w-[40%] rounded-lg shadow-xl p-4 gap-2 border border-solid border-white">
                <p className="text-xl">Preview</p>
                <div>
                    {state.text}
                </div>
            </div> */}

            <div className="flex flex-col justify-center items-center gap-3">
                <section>
                  <p className="text-2xl font-semibold ">Preview</p>
                </section>
                <section className="h-16 w-[40%] border-2 border-solid border-black bg-white p-2 mb-5  shadow-md ">
                    {state.text}
                </section>
            </div>
        </>
    )
}

export default Preview;