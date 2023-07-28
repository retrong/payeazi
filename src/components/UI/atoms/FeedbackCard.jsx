/* eslint-disable */
import { quote } from '../../../assets'

const FeedbackCard = ({content, name, title, img}) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[10px] max-w-[370px] md:mr-10 mr-0 sm:mr-5 feature-card">
        <img src={quote} alt="quotes" className='w-[42px] h-[27px] object-contain' />
        <p className='font-cabin font-normal text-[20px] leading-[32px] text-white my-10'>{content}</p>

        <div className='flex flex-row mb-4'>
            <img src={img} alt={name} className='rounded-full w-[48px] h-[48px]' />
        </div>

        <div className="">
            <h4 className={`font-cabin font-semibold text-[22px] leading-[32px] text-white`}>{name}</h4>
            <p className="font-cabin font-normal text-[18px] leading-[24px] text-dimWhite">{title}</p>
        </div>

    </div>
  )
}

export default FeedbackCard