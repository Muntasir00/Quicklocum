import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const About = () => {
  return (
    <div className='relative pt-[172px]   flex flex-col justify-between bg-gradient-to-b from-[#7ED958] to-[#43732F] pb-[411px] px-11 2xl:pl-[140px] 2xl:pr-[156px]'>
      <div className="absolute inset-0 bg-[url('/image/about_section.png')] bg-cover bg-center bg-no-repeat opacity-56"></div>
      <div className='z-10'>
        <p className='font-bold text-[48px] leading-[100%] text-center text-[#18181B] '>
          <span className='text-[#009E4A]'>What our users </span>say about
          Quicklocum
        </p>
      </div>

      {/* swiper */}
      <div className='mt-16 w-full flex justify-center items-center'>
        <Swiper
          // effect='coverflow'
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={32}
          slidesPerView={3}
          //   navigation
          //   pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          //   onSwiper={swiper => console.log(swiper)}
          //   onSlideChange={() => console.log('slide change')}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 5 },
            640: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 2, spaceBetween: 20 },
            1280: { slidesPerView: 3, spaceBetween: 20 },
            1600: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {/* slide */}
          <SwiperSlide>
            <div className=' rounded-2xl  border bg-[#FFFFFF]/25 p-7 flex flex-col justify-between mb-30'>
              <div className='flex flex-col gap-6 '>
                <img src='/image/ratings.svg' alt='ratings' />
                <p className='font-normal text-[24px] leading-9 text-[#09090B]'>
                  "Quicklocum connected our clinic with a qualified nurse within
                  24 hours — seamless experience."
                </p>
              </div>
              <div className='flex gap-1 '>
                <img
                  src='/image/about_card.png'
                  alt=''
                  className='rounded-[9999px] w-12 h-12'
                />
                <div className='flex flex-col gap-1'>
                  <p className='font-bold text-[16px] leading-[100%] text-[#333333]'>
                    Dr. Martin Lefevre
                  </p>
                  <p className='font-normal text-[14px] leading-[100%] text-[#555555]'>
                    Toronto Dental Care
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='rounded-2xl  border bg-[#FFFFFF]/25 p-7 flex flex-col justify-between'>
              <div className='flex flex-col gap-6 '>
                <img src='/image/ratings.svg' alt='ratings' />
                <p className='font-normal text-[24px] leading-9 text-[#09090B]'>
                  "Quicklocum connected our clinic with a qualified nurse within
                  24 hours — seamless experience."
                </p>
              </div>
              <div className='flex gap-1 '>
                <img
                  src='/image/about_card.png'
                  alt=''
                  className='rounded-[9999px] w-12 h-12'
                />
                <div className='flex flex-col gap-1'>
                  <p className='font-bold text-[16px] leading-[100%] text-[#333333]'>
                    Dr. Martin Lefevre
                  </p>
                  <p className='font-normal text-[14px] leading-[100%] text-[#555555]'>
                    Toronto Dental Care
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=' rounded-2xl  border bg-[#FFFFFF]/25 p-7 flex flex-col justify-between'>
              <div className='flex flex-col gap-6 '>
                <img src='/image/ratings.svg' alt='ratings' />
                <p className='font-normal text-[24px] leading-9 text-[#09090B]'>
                  "Quicklocum connected our clinic with a qualified nurse within
                  24 hours — seamless experience."
                </p>
              </div>
              <div className='flex gap-1 '>
                <img
                  src='/image/about_card.png'
                  alt=''
                  className='rounded-[9999px] w-12 h-12'
                />
                <div className='flex flex-col gap-1'>
                  <p className='font-bold text-[16px] leading-[100%] text-[#333333]'>
                    Dr. Martin Lefevre
                  </p>
                  <p className='font-normal text-[14px] leading-[100%] text-[#555555]'>
                    Toronto Dental Care
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=' rounded-2xl  border bg-[#FFFFFF]/25 p-7 flex flex-col justify-between'>
              <div className='flex flex-col gap-6 '>
                <img src='/image/ratings.svg' alt='ratings' />
                <p className='font-normal text-[24px] leading-9 text-[#09090B]'>
                  "Quicklocum connected our clinic with a qualified nurse within
                  24 hours — seamless experience."
                </p>
              </div>
              <div className='flex gap-1 '>
                <img
                  src='/image/about_card.png'
                  alt=''
                  className='rounded-[9999px] w-12 h-12'
                />
                <div className='flex flex-col gap-1'>
                  <p className='font-bold text-[16px] leading-[100%] text-[#333333]'>
                    Dr. Martin Lefevre
                  </p>
                  <p className='font-normal text-[14px] leading-[100%] text-[#555555]'>
                    Toronto Dental Care
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=' rounded-2xl  border bg-[#FFFFFF]/25 p-7 flex flex-col justify-between'>
              <div className='flex flex-col gap-6 '>
                <img src='/image/ratings.svg' alt='ratings' />
                <p className='font-normal text-[24px] leading-9 text-[#09090B]'>
                  "Quicklocum connected our clinic with a qualified nurse within
                  24 hours — seamless experience."
                </p>
              </div>
              <div className='flex gap-1 '>
                <img
                  src='/image/about_card.png'
                  alt=''
                  className='rounded-[9999px] w-12 h-12'
                />
                <div className='flex flex-col gap-1'>
                  <p className='font-bold text-[16px] leading-[100%] text-[#333333]'>
                    Dr. Martin Lefevre
                  </p>
                  <p className='font-normal text-[14px] leading-[100%] text-[#555555]'>
                    Toronto Dental Care
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* slide end */}
        </Swiper>
      </div>
    </div>
  );
};

export default About;
