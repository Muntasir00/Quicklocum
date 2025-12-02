const Hero = () => {
  return (
    <div className='relative flex flex-col gap-25 pt-[35px]  bg-[#FFFFFF] h-[1080px] '>
      <div className="absolute inset-0 bg-[url('/image/Frame_new.png')] bg-cover bg-center bg-no-repeat opacity-20"></div>
      {/* <div className='pointer-events-none absolute inset-0 -z-10'> */}
      {/* blob 1 - large, subtle */}
      {/* <div
          className='absolute left-[-12%] top-[-10%] w-[900px] h-[900px] rounded-full filter blur-[120px] opacity-30'
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(65,182,92,0.35) 0%, rgba(65,182,92,0.18) 35%, rgba(65,182,92,0.06) 60%, transparent 100%)',
            transform: 'translateZ(0)',
          }}
        /> */}

      {/* blob 2 - medium, brighter */}
      {/* <div
          className='absolute right-[-10%] top-[5%] w-[600px] h-[600px] rounded-full filter blur-[70px] opacity-40'
          style={{
            background:
              'radial-gradient(circle at 40% 40%, rgba(65,182,92,0.45) 0%, rgba(65,182,92,0.22) 40%, rgba(65,182,92,0.06) 70%, transparent 100%)',
            transform: 'translateZ(0)',
          }}
        /> */}

      {/* blob 3 - small, accent */}
      {/* <div
          className='absolute left-[40%] bottom-[-8%] w-[420px] h-[420px] rounded-full filter blur-2xl opacity-45'
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(65,182,92,0.6) 0%, rgba(65,182,92,0.18) 45%, transparent 90%)',
            transform: 'translateZ(0)',
          }}
        /> */}
      {/* </div> */}

      {/* Dotted border */}
      {/* Dotted ellipse arc - LEFT */}
      {/* <div
        className='absolute pointer-events-none 
    z-100
    top-[350px] left-[-350px]
    w-[1200px] h-[1200px]
    rounded-full
    border-[3px] border-dashed border-[rgba(0,0,0,0.25)]
    border-r-0 border-b-0'
      ></div> */}

      {/* Dotted ellipse arc - RIGHT */}
      {/* <div
        className='
    absolute pointer-events-none 
    z-100
    top-[350px] right-[-350px]
    w-[1200px] h-[1200px]
    rounded-full
    border-[3px] border-dashed border-[rgba(0,0,0,0.25)]
    border-l-0 border-b-0
  '
      ></div> */}

      {/* bg-image */}
      <div className="absolute inset-0 bg-[url('/image/hero.png')] bg-cover bg-center bg-no-repeat opacity-20"></div>

      {/* nav section */}
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

      {/* body section */}
      <div className=' flex flex-col gap-8 max-w-[1098px] mx-auto justify-center items-center'>
        <p className='w-[1099px] text-center text-[#18181B] text-[48px] '>
          <span className='text-[#32328C]'>Healthcare recruitment </span>
          reinvented through cutting-edge technology
        </p>
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
            <p className='text-[#FFFFFF] text-[16px] font-medium'>
              Post a Need →
            </p>
          </div>
          <div className='flex py-3.5 px-6 rounded-[12px]  justify-center items-center gap-2.5'>
            <p className='text-[#09090B] text-[16px] font-medium'>
              Create My Profile
            </p>
          </div>
        </div>

        <div className='relative'>
          <div className='absolute top-0 left-[70px] w-[70px] h-[34px] flex items-center'>
            <img
              src='/image/p1.png'
              alt=''
              className='w-12 h-12 rounded-full border-[1.5px] border-white'
            />
            <img
              src='/image/p2.png'
              alt=''
              className='w-12 h-12 rounded-full border-[1.5px] border-white -ml-3'
            />
            <img
              src='/image/p3.png'
              alt=''
              className='w-12 h-12 rounded-full border-[1.5px] border-white -ml-3'
            />
            <img
              src='/image/p2.png'
              alt=''
              className='w-12 h-12 rounded-full border-[1.5px] border-white -ml-3'
            />
            <img
              src='/image/p3.png'
              alt=''
              className='w-12 h-12 rounded-full border-[1.5px] border-white -ml-3'
            />
            <img
              src='/image/p1.png'
              alt=''
              className='w-12 h-12 rounded-full border-[1.5px] border-white'
            />
            <img
              src='/image/p2.png'
              alt=''
              className='w-12 h-12 rounded-full border-[1.5px] border-white -ml-3'
            />
          </div>

          <p className='font-medium text-[16px] leading-[100%] text-[#252549] mt-[70px]'>
            Connect with verified healthcare professionals in real time
          </p>
        </div>
      </div>

      {/* Buttons */}

      <div className='rounded-[20px] p-5 flex gap-5 bg-[rgba(255, 255, 255, 0.4) shadow-[0px_9px_90px_rgba(0,0,0,0.08)] backdrop-blur-[60px] w-fit absolute top-[628px] left-16 '>
        <img src='/image/codicon_account.svg' alt='img' />
        <div className='flex flex-col'>
          <p className='font-medium text-[24px] leading-[100%] text-center text-[#000000]'>
            Create account
          </p>
          <p className='font-light text-[20px] leading-[100%] text-center text-[#000000]'>
            Free & quick
          </p>
        </div>
      </div>

      <div className='rounded-[20px] p-5 flex gap-5 bg-[rgba(255, 255, 255, 0.4) shadow-[0px_9px_90px_rgba(0,0,0,0.08)] backdrop-blur-[60px] w-fit absolute top-[787px] left-[281px] '>
        <img src='/image/codicon_account.svg' alt='img' />
        <div className='flex flex-col'>
          <p className='font-medium text-[24px] leading-[100%] text-center text-[#000000]'>
            Verify profile
          </p>
          <p className='font-light text-[20px] leading-[100%] text-center text-[#000000]'>
            Credentials in 24h
          </p>
        </div>
      </div>

      <div className='rounded-[20px] p-5 flex gap-5 bg-[rgba(255, 255, 255, 0.4) shadow-[0px_9px_90px_rgba(0,0,0,0.08)] backdrop-blur-[60px] w-fit absolute top-[825px] left-[1335px] '>
        <img src='/image/browse.svg' alt='img' />
        <div className='flex flex-col'>
          <p className='font-medium text-[24px] leading-[100%] text-center text-[#000000]'>
            Browse
          </p>
          <p className='font-light text-[20px] leading-[100%] text-center text-[#000000]'>
            Jobs & contracts
          </p>
        </div>
      </div>

      <div className='rounded-[20px] p-5 flex gap-5 bg-[rgba(255, 255, 255, 0.4) shadow-[0px_9px_90px_rgba(0,0,0,0.08)] backdrop-blur-[60px] w-fit absolute top-[628px] left-[1574px] '>
        <img src='/image/colaborate.svg' alt='img' />
        <div className='flex flex-col'>
          <p className='font-medium text-[24px] leading-[100%] text-center text-[#000000]'>
            Collaborate
          </p>
          <p className='font-light text-[20px] leading-[100%] text-center text-[#000000]'>
            Secure contracts
          </p>
        </div>
      </div>

      {/* white box */}
      <div
        className='absolute h-[700px] w-[650px] top-[668px] left-[633px] rounded-[20px] bg-white 
shadow-[0px_9px_90px_rgba(0,0,0,0.08)] backdrop-blur-[80px]
'
      ></div>
    </div>
  );
};

export default Hero;
