import DataCard from '~/components/cards/DataCard';

const Data = () => {
  return (
    <div className='py-28  bg-[#252549] flex flex-col  gap-16 px-7 xl:px-10 2xl:px-60'>
      <div className='flex flex-col gap-4'>
        <p className='font-bold text-[48px] text-[#FFFFFF] text-center'>
          Your data and collaborations,{' '}
          <span className='text-[#7ED958]'>fully protected</span>
        </p>
        <p className='text-[#F4F4F5] font-normal text-[18px] leading-[30px] text-center'>
          Every profile and healthcare facility is verified. Quicklocum uses
          secure technology and trusted partners to ensure you safety and peace
          of mind.
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 flex-wrap'>
        <DataCard
          image='/image/data_security.svg'
          description='Data encrypted and GDPR- compliant'
        />

        <DataCard
          image='/image/data_security_2.svg'
          description='Verified profiles and digital contract validation'
        />

        <DataCard
          image='/image/data_security_3.svg'
          description='Trusted payment partners'
        />

        <DataCard
          image='/image/data_security_4.svg'
          description='Trust badges displayed on verified profiles'
        />
      </div>
    </div>
  );
};

export default Data;
