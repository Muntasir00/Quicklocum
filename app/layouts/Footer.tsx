import { Button } from '~/components/ui/button';

const Footer = () => {
  return (
    <div className='bg-[#252549] px-60 pt-28 pb-16 w-full relative flex flex-col gap-5'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-6 max-w-[554px]'>
          <p className='font-nouvelle font-bold text-[40px] text-[#FFFFFF]'>
            Ready to experience smarter healthcare recruitment?
          </p>
          <p className='font-nouvelle font-normal text-[18px] leading-7 text-[#E2E8F0]'>
            Join Quicklocum today and connect with verified professionals or
            trusted clients in minutes.
          </p>
        </div>
        <div className='flex items-center gap-3'>
          <Button className='bg-[#009E4A] rounded-[12px] py-3.5 px-6 font-medium text-[16px]'>
            Post a Need
            <img src='/image/ArrowRight.svg' alt='' />
          </Button>
          <Button className='bg-[#252549] rounded-[12px] py-3.5 px-6 font-medium text-[16px] text-[#FFFFFF] border-[1.5px] border-[#FFFFFF]'>
            Create My Profile
          </Button>
        </div>
      </div>
      <div className='absolute bottom-0 left-0'>
        <img src='/image/footer_1.svg' alt='' className='h-[200px] w-[215px]' />
      </div>
      <div className='border-[#FFFFFF1A] border-t border-b  flex justify-center py-11 mt-[60px]'>
        <ul className='flex gap-8'>
          <li className='font-normal text-[16px] leading-[100%] text-[#FBFBFB] font-nouvelle '>
            About
          </li>
          <li className='font-normal text-[16px] leading-[100%] text-[#FBFBFB] font-nouvelle '>
            Privacy Policy
          </li>
          <li className='font-normal text-[16px] leading-[100%] text-[#FBFBFB] font-nouvelle '>
            Terms of Service
          </li>
          <li className='font-normal text-[16px] leading-[100%] text-[#FBFBFB] font-nouvelle '>
            Contact
          </li>
        </ul>
      </div>
      <div className='flex justify-between'>
        <p className='font-bold text-[20px] text-[#FFFFFF]'>Quicklocum</p>
        <p className='font-normal text-[16px] text-[#FFFFFF]'>
          © 2025 Quicklocum Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
