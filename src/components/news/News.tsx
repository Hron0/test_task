import slider1 from "../../assets/slider1.png"

interface NewsProps{
    img: string;
    head: string;
    text: string;
    hrefName?: string;
    href?: string;
}

const News = ({img, head, text, href, hrefName}: NewsProps) => {
    return (
        <div className="flex flex-col sm:flex-row justify-evenly ms:justify-between bg-[#f6f6f6] rounded-[2.5rem] px-10 py-8 relative h-full w-full">
            <div className="flex flex-col items-start justify-between gap-8 px-2 ms:px-6 w-full ms:w-[30%]">
                <div className="flex flex-col items-start gap-8 w-full sm:w-72 relative">
                    <p className='font-black text-gray text-3xl sm:text-2xl lg:text-4xl text-start break-words w-full ms:w-min'>{head}</p>
                    <p className='text-gray break-words text-lg'>{text}</p>
                </div>
                <a className='font-bold text-black underline text-lg' href={href}>{hrefName}</a> {/* Ну вот сюда тоже Link и ссылку прокинуть */}
            </div>

            <div className="w-full ms:w-[50%]">
                <img src={img} alt="" className="pointer-events-none"/>
            </div>
        </div>
    )
}

News.defaultProps = {
    img: slider1,
    head: "Наушники, рвущие шаблоны!",
    text: "Не оставляет равнодушных: при любом упоминании в интернете — сотни комментариев! Но если хейтеры лают, а локомотив CGPods не остановить!",
    hrefName: "",
    href: "#",
}

export default News