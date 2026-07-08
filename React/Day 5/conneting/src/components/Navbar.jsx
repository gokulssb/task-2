
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className=' bg-amber-50 p-3 flex  justify-between   '>
      <div className='bg-amber-400 text-white p-3 rounded-2xl flex justify-center ml-10 '>
        LOGO
      </div>
      <div className='flex gap-5 items-center justify-center mr-20'>
        <Link to="/home">HOME</Link>
        <Link to="/id">ABOUT</Link>
        <Link to="/help">HELP</Link>
      </div>
    </div>
    </>
  )
}

export default Navbar