import MethodCard from '~/components/cards/MethodCard';

const Method = () => {
  return (
    <div className='relative py-28 px-60 flex flex-col gap-16 justify-center items-center bg-[#252549] '>
      {/* Background Image Layer with 20% opacity */}
      <div className="absolute inset-0 bg-[url('/image/method-bg.png')] bg-cover bg-center bg-no-repeat opacity-20"></div>

      {/* Content above background image */}
      <div className='relative z-10 flex flex-col items-center gap-16'>
        <p className='font-bold text-[48px] text-[#FFFFFF] text-center max-w-[778px]'>
          <span className='text-[#7ED958] '>Why choose Quicklocum </span>
          over traditional methods?
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3'>
          <MethodCard
            title='Verified Professionals'
            description='Connect with verified healthcare professionals'
          />
          <MethodCard
            title='Speed of Matching'
            description='Hours, powered by our renowned partners'
          />
          <MethodCard
            title='Cost Transparency'
            description='Clear fees, best market rates'
          />
          <MethodCard
            title='Contract Flexibility'
            description='Full range: part-time, full-time, temporary'
          />
          <MethodCard
            title='Payment Security'
            description='Payment secured through reliable methods'
          />
          <MethodCard
            title='Ease of Use'
            description='Simple interface, instant posting and matching'
          />
          <MethodCard
            title='Customer Support'
            description='Dedicated support'
          />
          <MethodCard
            title='Access to Talent Pool'
            description='Large verified network'
          />
          <MethodCard
            title='Trusted Partnerships'
            description='Works with top partners to ensure quick match and best rates'
          />
        </div>
      </div>
    </div>
  );
};

export default Method;
