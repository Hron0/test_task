import React from 'react'
import product1 from "../../assets/product1.png"
import ProductCard from "./ProductCard"
import FaCheck from "../../assets/FaCheck.svg"

interface productsProp {
    img: string,
    name: string,
    price: string | number,
    oldPrice: string | number,
    pros: string,
    colors: Array<String>
}

const ProductsWrapper = ({ img, name, price, oldPrice, pros, colors }: productsProp) => {
    return (

            <div className="flex flex-col items-center md:w-[34%] lg:w-[12%] h-[90%]">
                <ProductCard img={img} name={name} />

                <div className="flex flex-col bg-white relative rounded-[50px] px-1
                md:min-w-[35%] lg:min-w-[20%] h-[21.2rem]">
                    <div className="flex flex-row relative border-b-[1.5px] border-black w-full px-[0.7rem] py-2 justify-evenly">
                        <p className='break-words text-center text-gray text-lg w-full'>{pros}</p>
                    </div>
                    <div className="flex flex-row relative w-full px-[0.7rem] py-2 justify-evenly">
                        <div className="flex flex-col w-full items-center">
                            <p className="line-through text-lgray text-xl">{price}Р</p>
                            <p className="text-gray font-black text-2xl">{oldPrice}Р</p>
                            <div className="flex flex-row gap-2 py-2 px-1">
                                {colors.map((color, index) =>
                                    <button
                                        className={`w-4 h-4 bg-${color} p-4 border-[1.5px] border-blue rounded-full text-white`}
                                        key={index + 1}
                                    >{/* {color === color ? FaCheck : null} */}</button>
                                )}
                            </div>
                            <a href="#" className="text-white bg-blue text-2xl py-3 px-8 text-center rounded-[40px]">Купить</a>
                            <a href="#" className="text-blue text-xl text-center underline">Купить в 1 клик</a>
                        </div>
                    </div>
                </div>
            </div>



    )
}


ProductsWrapper.defaultProps = {
    img: product1,
    name: "CGPODS X",
    price: "10 990",
    oldPrice: "5 990",
    pros: "Защита от воды и алюминиевый кейс",
    colors: ['black', 'white']
}

export default ProductsWrapper