const Digitalize = () => {
  return (
    <div className='py-28 bg-gradient-to-b from-[#FFFFFF] to-[#C2E4CE] flex flex-col  px-7 gap-2.5 2xl:px-68 2xl:gap-16'>
      <p className='font-bold  text-center text-[#18181B] text-4xl 2xl:text-[48px]'>
        Digitalizing{' '}
        <span className='text-[#009E4A]'>healthcare recruitment</span> across
        Canada — with real impact.
      </p>
      <div className='p-10 rounded-2xl bg-[#009E4A] flex flex-col gap-12'>
        <p className='text-[20px] leading-8 text-[#FFFFFF] font-normal text-center'>
          Our mission is to deliver a 100% digital and intelligent solution that
          benefits both clients and healthcare professionals.
        </p>
        <div className='flex gap-8 justify-between flex-wrap'>
          <div className='rounded-[12px] bg-[#FFFFFF] flex justify-center items-center px-10 py-5'>
            <p className='font-bold text-[18px] text-center'>
              Faster connections
            </p>
          </div>
          <div className='rounded-[12px] bg-[#FFFFFF] flex justify-center items-center px-10 py-5'>
            <p className='font-bold text-[18px] text-center'>Fairer pay</p>
          </div>
          <div className='rounded-[12px] bg-[#FFFFFF] flex justify-center items-center px-10 py-5'>
            <p className='font-bold text-[18px] text-center'>
              Smarter recruitment
            </p>
          </div>
        </div>
        <p className='text-[20px] leading-8 text-[#FFFFFF] font-normal text-center'>
          Join us to transform the industry together.
        </p>
      </div>
    </div>
  );
};

export default Digitalize;
