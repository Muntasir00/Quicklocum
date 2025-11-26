type DataCardProps = {
  title: string;
  description: string;
};
const MethodCard = ({ title, description }: DataCardProps) => {
  return (
    // backdrop-blur-3xl
    <div className='bg-black p-6 rounded-2xl flex flex-col justify-between min-w-[472]'>
      <p className='font-normal text-[16px] text-[#FFFFFF]'>{title}</p>
      <p className='font-normal text-[24px] text-[#FFFFFF]'>{description}</p>
    </div>
  );
};

export default MethodCard;
