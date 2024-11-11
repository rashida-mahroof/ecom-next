import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

function WishListButton({children}:any) {
  return (
    <Link href={''} className='text-xs text-center text-[var(--on-primary)] bg-[var(--color-ash)] px-4 py-2 w-full hover:bg-[var(--color-charcoal)]'>
        <FontAwesomeIcon icon={faHeart} className='pr-1'/>
       {children}
    </Link>
  )
}

export default WishListButton