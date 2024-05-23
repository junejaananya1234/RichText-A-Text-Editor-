const Header = () =>{
    return(
       <div className="flex justify-evenly bg-slate-900 text-white h-14 items-center">
        <section className="text-2xl font-serif ">Rich Text</section>
        <section><ul className="flex gap-3 text-[20px] cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            </ul></section>
        <section> <button className="border border-solid border-white p-2"> Theme</button></section>
       </div>
    )
}
export default Header;