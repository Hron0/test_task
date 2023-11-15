import logo_tmn from "../../../assets/logo_tmn.svg"
import map from "../../../assets/map.svg"
import phone from "../../../assets/phone.svg"
import cart from "../../../assets/cart.svg"
import padlock from "../../../assets/padlock.svg"
import { useState } from 'react';
import Modal from "../../RegModal/Modal"


const NavDesktop = () => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className="navbar flex flex-col justify-around w-[100%] xl:w-[1280px] md:w-[100%]">
            <div className="flex flex-row items-center lg:gap-8 xl:gap-16">
                <div className="flex flex-row">
                    <img src={logo_tmn} alt="lol" className="text-blLogo border-r-[1px] border-lgray pr-[55px]" />
                    <div className="flex flex-col items-start pl-[35px]">
                        <p className="text-lgray text-xs">ОФИЦИАЛЬЫНЙ ИНТЕРНЕТ</p>
                        <p className="text-lgray text-xs">МАГАЗИН CASEGURU</p>
                        <div className="flex flex-row">
                            <img src={map} alt="" className="h-[19px] pt-1" />
                            <p className="text-lgray text-ms">Москва</p>
                        </div>

                    </div>
                </div>

                <div className="flex flex-row items-center">
                    <img src={phone} alt="" className="h-[20px] text-blue" />
                    <div className="flex flex-col items-center">
                        <p className="text-black text-base font-bold">+7 987 456 23 23</p>
                        <a className="text-lgray text-ms underline">Заказать звонок</a>
                    </div>
                </div>

                <div className="flex flex-row items-center">
                    <div className="flex">
                        <img src={cart} alt="" className="h-[36px]" />
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="text-lgray text-ms">В корзине</p>
                        <p className="text-lgray text-ms">нет товаров</p>
                    </div>
                </div>

                <div className="flex flex-row gap-2">
                    <img src={padlock} alt="" className="w-[25px]" />
                    <button className="text-blue text-ms border-r-[1px] border-lgray pr-[5px]"
                        onClick={() => setModalActive(true)}
                    >Вход</button>
                    <button className="text-lgray text-ms"
                        onClick={() => setModalActive(true)}
                    >Регистрация</button>
                </div>
            </div>
            <div className="flex flex-row text-xl justify-between lg:gap-5 px-[12px] pb-3
    md:items-center xl:gap-8 md:px-4"> {/* Представь что тут Мапа, и вместо Ашек Линки */}
                <a href='' className=' lg:text-lg xl:text-xl'>Наушники</a>
                <a href='' className=' lg:text-lg xl:text-xl'>Пылесосы</a>
                <a href='' className=' lg:text-lg xl:text-xl'>Умные часы</a>
                <a href='' className=' lg:text-lg xl:text-xl'>Портативные колонки</a>
                <a href='' className=' lg:text-lg xl:text-xl'>Внешние аккумуляторы</a>
                <a href='' className=' lg:text-lg xl:text-xl'>Гарантия</a>
                <a href='' className=' lg:text-lg xl:text-xl'>Контакты</a>
            </div>


            <Modal active={modalActive} setActive={setModalActive} />
        </div>
    )
}

export default NavDesktop