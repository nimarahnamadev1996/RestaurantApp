import Link from 'next/link'
import Image from 'next/image'



import Menu from './Menu'
import phoneIcon from '../../public/phone.png'
import CartIcon from './CartIcon'




const Navbar = () => {

  const user = false
  
  return (
    <>
    <div className='h-12 text-red-500 p-4 flex items-center  border-b-2 border-b-red-500 uppercase justify-between md:h-24 lg:px-20 xl:px-40'>
      
      {/* ----- lg screen menu item----- */}

      <div className='hidden  md:flex gap-4 flex-1'>
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

      {/* ---- Logo ---- */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href='/'>
          Massimo
        </Link>
      </div>

      {/* ---- Mobile menu----- */}
      <div  className="md:hidden">
        <Menu/>
      </div>

       {/* ---- Right links ----- */}

      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>

       <div className='className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
        <Image src={phoneIcon} alt='icon' width={20} height={20} />
        <span>123 456 78</span>
       </div>

       {
        !user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )
       }

       <CartIcon/>

      </div>
    </div>
    </>
  )
}

export default Navbar