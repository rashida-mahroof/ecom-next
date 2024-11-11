import About from '@/app/components/home/about/page'
import CallToAction from '@/app/components/home/calltoaction/page'
import WhyChose from '@/app/components/home/whychose/page'
import MainLayout from '@/app/layout/page'
import React from 'react'

function AboutUs() {
  return (
    <MainLayout>
        <About/>
        <CallToAction/>
    </MainLayout>
  )
}

export default AboutUs