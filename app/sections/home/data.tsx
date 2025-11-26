import DataCard from '~/components/cards/DataCard';

const Data = () => {
  return (
    <div className='py-28 px-60 bg-[#252549] flex flex-col mb-[50px] gap-16'>
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
      <div className='flex  justify-between gap-5'>
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
