type DataCardProps = {
  image: string;
  description: string;
};
const DataCard = ({ image, description }: DataCardProps) => {
  return (
    <div className='bg-[#F7F7F7] rounded-[12px] p-8 flex flex-col gap-8 justify-center items-center'>
      <img src={image} alt='' className='h-[100px] w-[100px]' />
      <p className='text-[#18181B] font-medium text-[20px] leading-[130%] text-center font-nouvelle min-w-[281px] '>
        {description}
      </p>
    </div>
  );
};

export default DataCard;
