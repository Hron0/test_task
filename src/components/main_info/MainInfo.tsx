import InfoBlock from "./InfoBlock"
import image1 from "../../assets/image1.png"
import rock from "../../assets/rock.png"
import Frame from "../../assets/Frame.png"
import fingers from "../../assets/fingers.png"
import Frame1 from "../../assets/Frame1.png"

const MainInfo = () => {
    const postData = [
        { img: rock, text: "но с кучей \"фишек\", которых просто нет у \"яблок\"", boldText: "В четыре раза дешевле Apple, то же качество, ", btnText: "Смотреть фишки!" },
        { img: Frame, text: "без переплаты розничным сетям и посредникам.", boldText: "Честная прямая цена производителя - ", btnText: "Честные цены" },
        { img: fingers, text: "по всему миру. В т.ч. по России (2-3 дня), Беларусии и Казахстану. Послушать-пощупать -  в шоурумах в Мск и Тюмени", boldText: "Супер-быстрая доставка ", btnText: "О Доставке" },
        { img: Frame1, text: "вместо волокиты и гарантийного ремонта - сразу замена сломанных наушников на новые!", boldText: "VIP-сервис всем: ", btnText: "О Гарантии и  сервисе" }
    ]

    return (
        <div className="w-full flex flex-col items-center">
            <div className="content relative flex flex-col items-center min-h-[69vh] gap-7 pb-2 xl:w-[1280px] md:w-[100%]">
                <p className='break-words text-center text-gray text-4xl ms:text-6xl font-bold w-[65%] ms:w-[60%] pb-4 ms:pb-10'>Легендарные тюменские наушники CGPODS</p>
                <div className="relative w-full">
                    <p className='break-words text-center text-gray text-[2rem] font-bold leading-8'>
                        По качеству и функциям не уступают топовым "фруктовым" аналогам - Apple, по некоторым функциям - даже превосходят,</p>
                    <p className='text-center text-gray font-bold text-3xl'>а по цене - в ЧЕТЫРЕ РАЗА ДЕШЕВЛЕ</p>
                </div>

                <button className='font-white bg-blue px-16 py-5 text-5xl rounded-full mt-16 mb-10' >
                    Заказать
                </button>

                <img src={image1} className='mb-10' />

                <p className='text-gray break-words text-center text-xl w-[63%]'>На середину 2023 года <a className='text-black font-black'>500 000+ человек </a>
                    уже купили тюменские наушники CGPODS.
                    К концу 2023 года - будет <a className='text-black font-black'>1 000 000!</a>
                </p>

            </div> {/* Часть с наушниками и градиентом */}

            {/* TODO: Вобще надо кнопки в Линки переделать, и ещё им ссылки прокинуть, но мне лень роутер делать*/}

            <div className="flex flex-col md:flex-row flex-wrap gap-16 justify-evenly relaive bg-blue px-10 py-11 w-full min-h-[300px]">

                {postData.map((data, index) =>
                    <InfoBlock img={data.img} text={data.text} boldText={data.boldText} btnText={data.btnText} key={index + 1} />
                )}

            </div>
        </div>

    )
}

export default MainInfo