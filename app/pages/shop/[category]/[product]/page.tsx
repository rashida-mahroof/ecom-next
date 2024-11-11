"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import MainLayout from '@/app/layout/page';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from '../../../../assets/rockwood-charcoal.webp';
import image1 from '../../../../assets/coal.webp';
import image2 from '../../../../assets/premium.webp';
import image3 from '../../../../assets/bbq.jpg';
import WhyChose from '@/app/components/home/whychose/page';
import CartButton from '@/app/components/product/cartButton/page';
import WishListButton from '@/app/components/product/wishlistButton/page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '@/app/components/product/itemCard/page';
import products from '@/app/constants';
import TitleMain from '@/app/components/common/titleMain/page';
import BannerImg from '@/app/components/home/bannerImage/page';
import bnr from '../../../../assets/banner.jpg';
import { useParams } from 'next/navigation';

const productX = {
  id: '1001',
  name: 'Product Name',
  price: 'QAR 99.00',
  cat:'BBQ Charcoal',
  description: 'This is a great product that you will love!',
  desc1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam suscipit illum quia exercitationem alias impedit illo, labore sapiente quasi architecto quod officia iste fugiat nihil nobis at adipisci inventore! Alias!',
  images: [
    image,
    image1,
    image2,
    image3,
    image,
  ],
  discount: '10%', // Example discount
  sku: 'PROD123', // Example SKU
};

const Details = () => {
  const { category, product: productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId.toString()));

  if (!product) {
    return <div>Product not found</div>;
  }

  const [mainImage, setMainImage] = useState(productX.images[0]);
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [reviews, setReviews] = useState([
    { name: 'John Doe', rating: 4, comment: 'Great product!' },
    { name: 'Jane Smith', rating: 5, comment: 'Excellent quality and fast shipping.' },
  ]); // State for reviews
  const [newReview, setNewReview] = useState({ name: '', rating: 0, comment: '' }); // State for new review

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    beforeChange: (current: any, next: any) => setMainImage(productX.images[next]),
  };
  const similarsettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      }
    ],
    beforeChange: (current: any, next: any) => setMainImage(productX.images[next]),
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleReviewSubmit = (e: any) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: '', rating: 0, comment: '' });
  };

  return (
    
    <MainLayout>
      <div className="container mx-auto py-6 flex flex-col lg:flex-row">
        {/* Right side: product images */}
        <div className="w-full lg:w-2/3 md:mr-2">
          <div className="mb-4 h-auto overflow-hidden">
            <Image src={mainImage} alt="Product Image" width={600} height={600} className="rounded-lg w-full" />
          </div>
          <Slider {...settings}>
            {productX.images.map((image, index) => (
              <div key={index} className="p-2">
                <Image src={image} alt={`Product Image ${index + 1}`} width={100} height={100} className="cursor-pointer rounded-lg" />
              </div>
            ))}
          </Slider>
        </div>
        {/* Left side: product details */}
        <div className="w-full lg:w-1/3 p-4 bg-white">
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
          <p className="text-xl text-[var(--color-ember)] text-gray-600 mb-4">{product.price}</p>
          <p className="text-gray-600 mb-2">SKU: {productX.sku}</p>
          <p className="text-gray-600 mb-2">Cat: {product.cat}</p>
          {productX.discount && (
            <p className=" mb-2">Discount: {productX.discount}</p>
          )}
          <p className="text-gray-800 mb-4">{productX.description}</p>
          <p className="text-gray-800 mb-4">{productX.desc1}</p>
          <div className="flex items-center mb-4">
            <button onClick={decrementQuantity} className="bg-gray-200 text-gray-700 px-4 py-1 rounded-lg mr-2">-</button>
            <span className="text-xl">{quantity}</span>
            <button onClick={incrementQuantity} className="bg-gray-200 text-gray-700 px-4 py-1 rounded-lg ml-2">+</button>
          </div>
          <CartButton>Add To Cart</CartButton>
          <WishListButton>Wish List</WishListButton>
        </div>
      </div>

      <div className="container mx-auto py-6 bg-white px-3 flex flex-col md:flex-row">
        <div className="w-full lg:w-2/3 pr-4 overflow-y-scroll max-h-[500px]">
          <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
          <ul className="mb-4">
            {reviews.map((review, index) => (
              <li key={index} className="mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className={`text-yellow-500 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 font-semibold">{review.name}</span>
                </div>
                <p>{review.comment}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-1/3  lg:right-0 lg:top-20 bg-white p-4 border rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Add a Review</h3>
          <form onSubmit={handleReviewSubmit} className="mb-4">
            <div className="mb-2">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="rating" className="block text-gray-700">Rating</label>
              <select
                id="rating"
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border rounded-lg"
                required
              >
                <option value="">Select rating</option>
                {[...Array(5)].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <div className="mb-2">
              <label htmlFor="comment" className="block text-gray-700">Comment</label>
              <textarea
                id="comment"
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <button type="submit" className="px-4 py-2 bg-[var(--color-ember)] text-white rounded-lg">Submit Review</button>
          </form>
        </div>
        
      </div>
      <div className='py-10 container mx-auto'>
        <div className='px-4 bg-white'>
        <TitleMain>Similar Products</TitleMain>
        <Slider {...similarsettings}>
            {products.map((product, index) => (
              <div key={index} className="p-2">
                <ProductCard product = {product}/>
                  </div>
            ))}
          </Slider>
        </div>
        
        </div>
        <div className='container mx-auto pb-10'>
        <BannerImg imageSrc={bnr} altText="Banner 1" />
        </div>
      <WhyChose />
    </MainLayout>
  );
}

export default Details;
