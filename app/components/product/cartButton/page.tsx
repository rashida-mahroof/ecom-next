import Link from 'next/link'
import React from 'react'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function CartButton({children}:any) {
  return (
    <Link href={''} className='text-center text-[var(--on-primary)] bg-[var(--color-ember)] px-2 py-2 w-full hover:bg-[var(--color-flame)] text-xs'>
       <FontAwesomeIcon icon={faShoppingCart} className='pr-1'/>
       
       {children}
    </Link>
  )
}

export default CartButton