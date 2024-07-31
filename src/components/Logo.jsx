import image from '../../public/logo.png'

export default function Logo() {
  return (
    <div className='flex items-center font-bold text-2xl '>
    <img src={image} className='aspect-square w-10' alt="mobile_logo_image" />
    <span className='text-[#ff00d3]'>Mobi</span>
    <span>Shop</span>
    </div>
  )
}
