import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import News from './News'
import slider1 from "../../assets/slider1.png"
import slider_ilon from "../../assets/slider_ilon.png"
import slider_stats from "../../assets/slider_stats.png"
import slider_guinness from "../../assets/slider_guinness.jfif"

const Slider = () => {

    const newsData = [
        {img: slider1, head: "Наушники, рвущие шаблоны!", text: "Не оставляет равнодушных: при любом упоминании в интернете — сотни комментариев! Но если хейтеры лают, а локомотив CGPods не остановить!", hrefName: "", href: ""},
        {img: slider_guinness, head: "Наушники, залетающие в Книгу Рекордов Гиннесса...", text: "Готовится заявка в книгу Гиннесса сразу по шести мировым рекордам!", hrefName: "Рекорды Гиннесса", href: ""},
        {img: slider_ilon, head: "Инновационный визионерский подход к привычным вещам", text: "Создателя CGPods Вадима Бокова прозвали \"Тюменским Илоном Маском!\"", hrefName: "Визионер из Тюмени", href: ""},
        {img: slider_stats, head: "Самый обсуждаемый и быстрорастущий бренд наушников", text: "Интерес к CGPods растёт, в то время как интерес к остальным ТОПовым брендам стагнирует - Яндекс не врёт!", hrefName: "", href: ""}
    ]


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
            partialVisibilityGutter: 100
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className="relative w-full flex items-center justify-center py-6"> {/* TODO: Эта штука не хочет показывать края соседних слайдов, это както связано с размерами, но у меня не получилось  */}
            <Carousel responsive={responsive}
                swipeable={true}
                draggable={true}
                infinite={true}
                centerMode={false}
                containerClass="container"
                itemClass='carouselItem'
            >
                {newsData.map((data, index) => 
                    <News img={data.img} head={data.head} text={data.head} hrefName={data.hrefName} href={data.href} key={index+1}/>
                )}
            </Carousel>
        </div>
    )
}

export default Slider