import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Banner from '@/app/components/home/banner/page';
import ShopByCategories from '@/app/components/home/categories/page';
import OurBestsellers from '@/app/components/home/bestSellers/page';
import ServiceHighlights from '@/app/components/home/highlights/page';
import MainLayout from '@/app/layout/page';
import WhyChose from '@/app/components/home/whychose/page';
import Hero from '@/app/components/home/hero/page';
import FeaturedItems from '@/app/components/home/featured/page';
import CallToAction from '@/app/components/home/calltoaction/page';
import About from '@/app/components/home/about/page';
import BannerImg from '@/app/components/home/bannerImage/page';
import bnr from '../../assets/banner.jpg';
import NewItems from '@/app/components/home/newItems/page';
function HomePage() {
  return (
    <div>
      <MainLayout>
        <Banner />
        <ServiceHighlights />

        <ShopByCategories />
       
        <OurBestsellers />
        <FeaturedItems />
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 my-6">
        <BannerImg imageSrc={bnr} altText="Banner 1" />
        <BannerImg imageSrc={bnr} altText="Banner 2" />
      </div>
        <NewItems/>
        
        <WhyChose />
        <CallToAction />
       
       
        
      </MainLayout>
    </div>


  )
}

export default HomePage