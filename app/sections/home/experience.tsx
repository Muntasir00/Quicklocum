const Experience = () => {
  return (
    <div className='pt-[360px] pb-28 px-60 bg-white'>
      <div className='flex flex-col gap-14 justify-center items-center'>
        <div className='flex flex-col gap-4'>
          <p className='font-bold text-[48px] text-center'>
            <span className='text-[#009E4A]'>A 100% digital, simple,</span> and
            intelligent experience
          </p>
          <p className='text-[#555555] text-[18px] font-normal text-center'>
            Three steps to find or offer the right opportunity:
          </p>
        </div>

        <div className='flex gap-6'>
          <div className='rounded-2xl p-8 flex flex-col gap-3.5 justify-start'>
            <p className='text-[40px] text-[#252549] font-bold leading-[100%]'>
              01
            </p>
            <div className='flex flex-col gap-2'>
              <p className='font-bold text-[24px] text-[#18181B] leading-[100%]'>
                Create an account
              </p>
              <p className='text-[16px] leading-6 font-normal text-[#334155]'>
                Choose your role: client or professional. Creating an account is
                completely free.
              </p>
            </div>
          </div>
          <div className='rounded-2xl p-8 flex flex-col gap-3.5 justify-start bg-[#252549]'>
            <p className='text-[40px] text-white font-bold leading-[100%]'>
              02
            </p>
            <div className='flex flex-col gap-2'>
              <p className='font-bold text-[24px] text-white leading-[100%]'>
                Post or browse needs
              </p>
              <p className='text-[16px] leading-6 font-normal text-white'>
                Contract types: temporary, replacement, full-time, or
                partnership.
              </p>
            </div>
          </div>

          <div className='rounded-2xl p-8 flex flex-col gap-3.5 justify-start'>
            <p className='text-[40px] text-[#252549] font-bold leading-[100%]'>
              03
            </p>
            <div className='flex flex-col gap-2'>
              <p className='font-bold text-[24px] text-[#18181B] leading-[100%]'>
                Connect and collaborate
              </p>
              <p className='text-[16px] leading-6 font-normal text-[#334155]'>
                AI-powered matching, automated tracking, and secure digital
                contracts.
              </p>
            </div>
          </div>
        </div>

        <div className='flex py-3.5 px-6 rounded-[12px] bg-[#252549] justify-center items-center gap-2.5'>
          <p className='text-[#FFFFFF] text-[16px] font-medium'>Try Now →</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
