import { useEffect, useState } from "react";
import ProductsWrapper from "./ProductsWrapper";
import product1 from "../../assets/product1.png"
import product2 from "../../assets/product2.png"
import product3 from "../../assets/product3.png"
import product4 from "../../assets/product4.png"
import product5 from "../../assets/product5.png"
import product6 from "../../assets/product6.png"
import useWindowDimensions from './../../hook/useWindowDimensions';

const Products = ({ }) => {
    const [productData, setProductData] = useState([
        { img: product1, name: "CGPODS X", price: "5 990", oldPrice: "10 990", pros: "Защита от воды и алюминиевый кейс", colors: ['black', 'white'], id: 1 },
        { img: product2, name: "CGPODS Lite", price: "5 450", oldPrice: "10 990", pros: "Кейс-антистресс", colors: ['black', 'white'], id: 2 },
        { img: product3, name: "CGPODS Air3", price: "5 990", oldPrice: "10 120", pros: "Качественный звук и сутки без розетки", colors: ['red', 'blue'], id: 3 },
        { img: product4, name: "CGPODS AirPro", price: "6 990", oldPrice: "11 990", pros: "Наушники 3-в-1", colors: ['black', 'white', 'green'], id: 4 },
        { img: product5, name: "CGPODS Allure", price: "9 990", oldPrice: "16 990", pros: "Пять цветов на выбор!", colors: ['white', 'red', "black", "pink", "cyan"], id: 5 },
        { img: product6, name: "CGPODS Sport", price: "2 990", oldPrice: "10 001", pros: "Месяц без подзарядки", colors: ['cyan', 'white'], id: 6 },
        { img: product1, name: "Random Pods", price: "1 990", oldPrice: "10 001", pros: "Текст Текст текст", colors: ['cyan', 'white'], id: 6 },
        { img: product1, name: "Random N2", price: "2 333", oldPrice: "10 001", pros: "Текст Текст текст", colors: ['cyan', 'white'], id: 6 },
        { img: product1, name: "CGPODS Boss", price: "2 111", oldPrice: "10 001", pros: "Текст Текст текст", colors: ['cyan', 'white'], id: 6 },
    ])

    const [shuffledArray, setShuffledArray] = useState([{}])
    const { height, width } = useWindowDimensions()

    const shuffleProducts = (product: Array<Object>) => {
        let result: Array<Object> = []
        if (width > 1442) {
            while (result.length < 6) {
                const rnd = Math.floor(Math.random() * product.length)
                if (!result.includes(product[rnd])) {
                    result.push(product[rnd])
                }
            }
        } else if (width < 500) {
            while (result.length < 1) {
                const rnd = Math.floor(Math.random() * product.length)
                if (!result.includes(product[rnd])) {
                    result.push(product[rnd])
                }
            }
        } else if (width < 800) {
            while (result.length < 2) {
                const rnd = Math.floor(Math.random() * product.length)
                if (!result.includes(product[rnd])) {
                    result.push(product[rnd])
                }
            }
        } else if (width < 1441) {
            while (result.length < 4) {
                const rnd = Math.floor(Math.random() * product.length)
                if (!result.includes(product[rnd])) {
                    result.push(product[rnd])
                }
            }
        }

        return result
    }

    useEffect(() => {
        setShuffledArray(shuffleProducts(productData))
        console.log(shuffleProducts + ' bruh ' + shuffledArray)
    }, [])



    return (
        <div className="flex flex-col items-center gap-8 w-[97%]">
            <div className="flex flex-row items-end justify-evenly gap-4 px-4 relative bg-[#EFF1F4] rounded-[50px] 
        3xl:w-[90%] min-h-[500px] py-10">
                {shuffledArray.map((data) =>
                    <ProductsWrapper img={data.img} name={data.name} price={data.price} oldPrice={data.oldPrice} colors={data.colors} />
                )}
            </div>
            <button
                className="bg-blue text-white text-lg py-4 px-8"
                onClick={() => setShuffledArray(shuffleProducts(productData))}
            >
                Другие продукты
            </button>
        </div>
    )
}

export default Products