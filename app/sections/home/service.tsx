const Service = () => {
  return (
    <div className=' pb-28 bg-white lg:px-7 2xl:px-60'>
      <div className='rounded-[40px]  flex flex-wrap gap-6 bg-gradient-to-b from-[#7ED958] to-[#43732F] justify-center items-stretch p-7 2xl:p-20'>
        {/* card 1 */}

        <div className='rounded-2xl p-10 flex flex-col gap-8 bg-[#FFFFFF] w-full xl:w-[50%]'>
          <div className='flex flex-col gap-5'>
            <p className='font-bold text-[30px] leading-9 text-[#252549]'>
              For Clients
            </p>
            <p className='font-normal text-[20px] leading-[100%] text-[#333333]'>
              Manage your staffing needs with ease
            </p>
          </div>
          <div className='flex justify-start '>
            <ul className='list-disc pl-10 space-y-5'>
              <li className='font-normal text-[18px] leading-[29.25px] text-[#3F3F46] marker:text-[30px] '>
                Post your staffing needs in a few clicks
              </li>
              <li className='font-normal text-[18px] leading-[29.25px] text-[#3F3F46] marker:text-[30px] '>
                Connect with verified healthcare professionals
              </li>
              <li className='font-normal text-[18px] leading-[29.25px] text-[#3F3F46] marker:text-[30px] '>
                Track assignments and contracts in real time
              </li>
              <li className='font-normal text-[18px] leading-[29.25px] text-[#3F3F46] marker:text-[30px] '>
                Automate invoicing and approvals
              </li>
              <li className='font-normal text-[18px] leading-[29.25px] text-[#3F3F46] marker:text-[30px] '>
                Collaborate with trusted partners
              </li>
            </ul>
          </div>
          <div className='w-fit py-3.5 px-6 rounded-[12px] bg-[#252549] '>
            <p className='font-medium text-[16px] text-[#FFFFFF] flex  justify-center items-center'>
              Post a Need →
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div className='rounded-2xl p-10 flex flex-col gap-8 bg-[#FFFFFF] w-full xl:w-[50%]'>
          <div className='flex flex-col gap-5'>
            <p className='font-bold text-[30px] leading-9 text-[#252549]'>
              For Professionals
            </p>
            <p className='font-normal text-[20px] leading-[100%] text-[#333333]'>
              Tailored, high-value opportunities at your fingertips
            </p>
          </div>
          <div className='flex justify-start flex-wrap'>
            <ul className='list-disc pl-10 space-y-5'>
              <li className='font-normal text-[18px] leading-[29.25px] text-[#3F3F46] marker:text-[30px] '>
                Access verified assignments suited to your expertise
              </li>
              <li className='font-normal text-[18px] leading-[29.25px] text-[#3F3F46] marker:text-[30px] '>
                Enjoy contracts offering higher-than-average hourly rates
              </li>
              <li className='font-normal text-[18px] leading-[29.25px] text-[#3F3F46] marker:text-[30px] '>
                Manage your availability and contracts online
              </li>
              <li className='font-normal text-[18px] leading-[29.25px] text-[#3F3F46] marker:text-[30px] '>
                Receive personalized matches powered by smart algorithms
              </li>
              <li className='font-normal text-[18px] leading-[29.25px] text-[#3F3F46] marker:text-[30px] '>
                Partner with trusted professionals and clinics.Collaborate with
                trusted partners
              </li>
            </ul>
          </div>
          <div className='w-fit py-3.5 px-6 rounded-[12px] bg-[#252549] '>
            <p className='font-medium text-[16px] text-[#FFFFFF] flex  justify-center items-center'>
              Create My Profile →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
