/* eslint-disable */
import { quote } from '../../../assets'

const FeedbackCard = ({content, name, title, img}) => {
  return (
    <div className="flex justify-center flex-col px-10 py-12 rounded-[10px] max-w-[320px] md:mr-10 mr-0 sm:mr-5 ">
        <img src={quote} alt="quotes" className='w-[42px] h-[27px] object-contain' />
        <p className='font-cabin font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>

        <div className='flex flex-row'>
            <img src={img} alt={name} className='rounded-full w-[48px] h-[48px]' />
        </div>

        <div className="">
            <h4 className={`font-cabin font-semibold text-[20px] leading-[32px] text-white`}>{name}</h4>
            <p className="font-cabin font-normal text-[16px] leading-[24px] text-white">{title}</p>
        </div>

    </div>
  )
}

export default FeedbackCard