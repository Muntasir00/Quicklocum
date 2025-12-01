const Match = () => {
  return (
    <div className='bg-[#EFF6F9] py-28 px-60 flex flex-col justify-center items-center gap-16 mx-auto'>
      <div className='flex flex-col gap-5'>
        <p className='font-bold text-[48px] text-[#18181B] leading-[100%] text-center'>
          Technology that finds your{' '}
          <span className='text-[#009E4A]'>perfect match</span>
        </p>
        <p className='text-[18px] leading-7 font-normal text-center text-[#3F3F46]'>
          Our intelligent matching engine analyzes your needs and preferences to
          deliver the best possible connections—fast and reliably.
        </p>
      </div>

      <div className='flex gap-5'>
        {/* Card 1 */}
        <div className='relative overflow-hidden rounded-2xl bg-[#D1D1FA] p-10 min-h-[420px] backdrop-blur-4 w-[50%]'>
          {/* Background image */}
          <div className="absolute inset-0 bg-[url('/image/match.jpg')] bg-cover bg-center bg-no-repeat opacity-10" />

          {/* Text */}
          <div className='relative z-10 flex flex-col gap-2.5 items-center'>
            <p className='font-bold text-[30px] leading-[100%] text-center text-[#252549]'>
              For Talent
            </p>
            <p className='font-normal text-[18px] leading-[26px] text-center text-[#334155]'>
              Get matched to roles that fit your skills, availability, and
              preferences.
            </p>
          </div>

          {/* White cards */}
          <div className='absolute top-[170px] left-0 right-0 flex justify-between px-20'>
            <div className='relative rounded-[20px] bg-white h-[300px] w-[290px] shadow-lg' />
            <div className='relative rounded-[20px] bg-white h-[300px] w-[290px] shadow-lg top-9 -left-[42px]' />
          </div>
        </div>

        {/* Card 2 */}
        <div className='relative overflow-hidden rounded-2xl bg-[#D1D1FA] p-10 min-h-[420px] backdrop-blur-4 w-[50%]'>
          {/* Background image */}
          <div className="absolute inset-0 bg-[url('/image/match.jpg')] bg-cover bg-center bg-no-repeat opacity-10" />

          {/* Text */}
          <div className='relative z-10 flex flex-col gap-2.5 items-center'>
            <p className='font-bold text-[30px] leading-[100%] text-center text-[#252549]'>
              For Professionals
            </p>
            <p className='font-normal text-[18px] leading-[26px] text-center text-[#334155]'>
              Discover opportunities that fit your hourly rate, contract type,
              and location preferences.
            </p>
          </div>

          {/* White cards */}
          <div className='absolute top-[170px] left-0 right-0 flex justify-between px-20'>
            <div className='relative rounded-[20px] bg-white h-[300px] w-[290px] shadow-lg' />
            <div className='relative rounded-[20px] bg-white h-[300px] w-[290px] shadow-lg top-9 -left-[42px]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;
