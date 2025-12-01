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
    </div>
  );
};

export default Hero;
