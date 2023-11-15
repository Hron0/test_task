import logo_tmn from "../../../assets/logo_tmn.svg"
import cart from "../../../assets/cart.svg"
import mobMenu from "../../../assets/mobMenu.svg"

const NavMobile = () => {
    return (
        <div className='w-full flex flex-row justify-between align-top border-b-[1.5px] border-gray pb-4'>
            <div className="flex flex-row items-top">
                <img src={logo_tmn} alt="lol" className="text-blLogo border-lgray w-[7rem] sm:w-36" />
                <div className="flex flex-col items-end">
                    <p className="text-gray text-md sm:text-lg font-black">+7 987 463 12 12</p>
                    <p className="text-lgray text-md sm:text-lg underline leading-[12px]">Заказать звонок</p>
                </div>
            </div>

            <div className="flex flex-row justify-end items-center gap-4">
                <img src={cart} alt="" className="h-[36px]" />
                <button
                className="MobileNav w-[6] h-[6] p-2 relative"
                >
                    <img src={mobMenu} alt="" className="w-full h-full"/>
                </button>
            </div>
        </div>
    )
}

export default NavMobile