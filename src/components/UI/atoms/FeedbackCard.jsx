import { quote } from '../../../assets'

const FeedbackCard = ({content, name, title, img}) => {
  return (
    <div>
        <img src={quote} alt="quotes" className='w-[42px] h-[27px] object-contain' />
        <p className='font-cabin font-normal'>{content}</p>

        <div className='flex flex-row'>
            <img src={img} alt={name} className='rounded-full w-[48px] h-[48px]' />
        </div>

        <div>
            <h4>{name}</h4>
            <p>{title}</p>
        </div>

    </div>
  )
}

export default FeedbackCard