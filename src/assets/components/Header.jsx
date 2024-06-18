import newenLogo from '../img/newen_icon.png'
export default function Header() {
  return (
    <>
      <header className='flex items-center justify-center bg-gradient-to-t from-[#010d13] to-[#17262f] md:rounded-b-[50%] rounded-b-none h-56 w-full md:h-80'>
        <div>
          <img
            className='md:w-[33em] object-contain w-full py-5 px-10'
            src={newenLogo}
            alt=''
          />
          <p className='text-center text-xl md:text-2xl text-[#cfed8e]'>
            Tu idea realidad
          </p>
        </div>
      </header>
    </>
  )
}
