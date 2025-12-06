import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';

const Faq = () => {
  return (
    <div className='py-28  bg-gradient-to-b from-[#7ED958]/40 to-[#FFFFFF]/40  flex justify-between px-7 2xl:px-60 flex-wrap'>
      <div className=''>
        <p className='text-[#18181B] text-[48px] font-bold '>
          <span className='text-[#009E4A]'>Frequently</span> Asked Questions
        </p>
      </div>
      <div className='w-[800px]'>
        <Accordion
          type='single'
          collapsible
          className='w-full '
          defaultValue='item-1'
        >
          <AccordionItem
            value='item-1'
            className='bg-white rounded-[12px] border border-[#E2E8F0] p-2'
          >
            <AccordionTrigger>
              How do I verify my professional license?
            </AccordionTrigger>
            <AccordionContent className='flex flex-col gap-4 '>
              <p>
                You can upload your credentials directly on your profile; our
                verification team reviews and validates them within 24 hours.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value='item-2'
            className='bg-white rounded-[12px] border border-[#E2E8F0] p-2'
          >
            <AccordionTrigger>How fast can I find a match?</AccordionTrigger>
            <AccordionContent className='flex flex-col gap-4 '>
              <p>
                We offer worldwide shipping through trusted courier partners.
                Standard delivery takes 3-5 business days, while express
                shipping ensures delivery within 1-2 business days.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value='item-3'
            className='bg-white rounded-[12px] border border-[#E2E8F0] p-2'
          >
            <AccordionTrigger>
              What payment methods are supported?
            </AccordionTrigger>
            <AccordionContent className='flex flex-col gap-4 '>
              <p>
                We stand behind our products with a comprehensive 30-day return
                policy. If you&apos;re not completely satisfied, simply return
                the item in its original condition.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
