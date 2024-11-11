import { faFire } from '@fortawesome/free-solid-svg-icons/faFire'
import { faLeaf } from '@fortawesome/free-solid-svg-icons/faLeaf'
import { faRecycle } from '@fortawesome/free-solid-svg-icons/faRecycle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function WhyChose() {
  return (
    
        <div className="bg-[var(--color-charcoal)] text-white py-16">
    <div className="container mx-auto px-4">
      <h2 className="section-title text-white">Why Choose Our Charcoal?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <FontAwesomeIcon icon={faFire} className="text-[var(--color-flame)] text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Superior Heat</h3>
          <p>Our charcoal burns hotter and longer for perfect grilling results.</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faLeaf} className="text-[var(--color-flame)] text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
          <p>Sustainably sourced and produced with minimal environmental impact.</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faRecycle} className="text-[var(--color-flame)] text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Reusable</h3>
          <p>Our charcoal can be reused multiple times, saving you money.</p>
        </div>
      </div>
    </div>
  </div>
    
    
  )
}

export default WhyChose