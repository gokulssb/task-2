

 const Navbar = () => {
  return (
    <>
    <div className="p-3">
   <div className="bg-blue-400 p-5  text-white flex justify-between items-center">
    <h1 className="bg-white p-5 text-black heigth-40 w-40 rounded-2xl text-center ">LOGO</h1>
    <Link/>
   </div>
   </div>
    </>
    
  )
}
export default Navbar

 const Link = () => {
  return (
    <>
   <div className="flex gap-5">
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Conact</a>
    <a href="">Address</a>
   </div>
    </>
    
  )
}


