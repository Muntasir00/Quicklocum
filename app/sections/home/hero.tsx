const Hero = () => {
  return (
    <div className='relative flex flex-col gap-25 pt-[35px]  bg-[#FFFFFF] h-[1080px] '>
      <div className="absolute inset-0 bg-[url('/image/hero.png')] bg-cover bg-center bg-no-repeat opacity-20"></div>
      <div className='flex justify-between rounded-[12px] border border-[rgba(255, 255, 255, 0.52)] backdrop-blur-21 p-4 bg-[rgba(255, 255, 255, 0.19)] items-center w-[1300px] mx-auto'>
        <p className='font-bold text-[28px] leading-[100%] text-[rgba(37, 37, 73, 1)]'>
          Quicklocum.
        </p>
        <ul className='flex gap-12 '>
          <li className='font-normal text-[16px] leading-[100%] text-[rgba(24, 24, 27, 1)]'>
            How It Works
          </li>
          <li className='font-normal text-[16px] leading-[100%] text-[rgba(24, 24, 27, 1)]'>
            For Clients
          </li>
          <li className='font-normal text-[16px] leading-[100%] text-[rgba(24, 24, 27, 1)]'>
            For Professionals
          </li>
          <li className='font-normal text-[16px] leading-[100%] text-[rgba(24, 24, 27, 1)]'>
            Pricing
          </li>
        </ul>
        <div className='flex gap-2.5'>
          <div className='rounded-[12px] py-3.5 px-2.5 border border-[rgba(37, 37, 73, 0.5)]'>
            <p className='font-normal text-[16px] text-[rgba(24, 24, 27, 1)] leading-[100%] '>
              En
            </p>
          </div>
          <div className='rounded-[12px] py-3.5 px-5 bg-[#252549]'>
            <p className='font-medium text-[16px] text-white leading-[100%] '>
              Create My Profile
            </p>
          </div>
        </div>
      </div>

      {/* inner section */}
      <div className='pt-[140px] flex flex-col gap-8 max-w-[1098px] mx-auto justify-center items-center'>
        <p className='font-normal text-[16px] leading-4 text-center text-[rgba(24, 24, 27, 1)]'>
          An intelligent digital platform that connects clients and healthcare
          professionals in dentistry, pharmacy, nursing, and general medicine.
          <span className='font-medium'>
            Save time, automate your processes, and find the right match in just
            a few clicks.
          </span>
        </p>
        <div className='flex gap-3'>
          <div className='flex py-3.5 px-6 rounded-[12px] bg-[#252549] justify-center items-center gap-2.5'>
            <p className='text-[#FFFFFF] text-[16px] font-medium'>Try Now →</p>
          </div>
          <div className='flex py-3.5 px-6 rounded-[12px]  justify-center items-center gap-2.5'>
            <p className='text-[#09090B] text-[16px] font-medium'>Try Now →</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
