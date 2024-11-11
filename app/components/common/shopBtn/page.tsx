import Link from 'next/link'
import React from 'react'

function ShopBtn() {
  return (
    <Link href='/pages/shop' className="text-center bg-[var(--color-flame)] text-[var(--color-smoke)] font-bold py-2 px-6 rounded-full hover:bg-[var(--color-ember)] transition-colors duration-300">
    Shop Now
  </Link>
  )
}

export default ShopBtn