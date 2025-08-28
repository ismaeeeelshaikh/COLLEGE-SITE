// src/components/Hero.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// --- Your Final Data for the Slides ---
const slidesData = [
  {
    id: 1,
    imageUrl: '/principal.jpg',
    caption: 'Convocation Ceremony @APSIT',
  },
  {
    id: 2,
    imageUrl: '/recru.jpg',
    caption: 'Our Recruiters',
  },
  {
    id: 3,
    imageUrl: '/students.jpeg',
    caption: 'LTI Mind Tree Placed Students',
  },
  {
    id: 4,
    imageUrl: '/placed-student.png',
    caption: 'Capgemini Placed Students of 2025 Batch',
  },
  {
    id: 5,
    imageUrl: '/society.jpg',
    caption: 'APSIT: Indian Society for Technical Education (ISTE), Maharashtra-Goa has awarded APSIT "The Best Engineering College" and "Best Principal"',
  },
  {
  id: 6,
  imageUrl: '/aurionpro.jpeg',
  caption: 'Aurionpro Placed Students',
  }
];

export default function Hero() {
  return (
    // UPDATED: Added back the modern container styling for a polished look
    <div className="relative my-1 rounded-lg border border-gray-200 shadow-lg overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        className="mySwiper"
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[500px] w-full">
              <img
                src={slide.imageUrl}
                alt={slide.caption}
                className="w-full h-full object-cover"
              />
              {/* UPDATED: Improved the text overlay for better readability */}
              <div className="absolute bottom-0 left-0 w-full pt-20 pb-6 px-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-lg font-semibold drop-shadow-md">
                  {slide.caption}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
