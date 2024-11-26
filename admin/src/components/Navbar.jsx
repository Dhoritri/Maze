import {assets} from '../assets/assets';
const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between '>
      <img className='w-[max(8%,80px)]' src={assets.logo} alt="" />
      <button onClick={()=> setToken('')}  className='bg-[#ffffff] hover:bg-[#2c78cf] transition .2s ease-in ease-out text-black px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
