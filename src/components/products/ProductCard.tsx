import product1 from "../../assets/product1.png"

interface ProdProps {
    img: string,
    name: string
}

const ProductCard = ({img, name}: ProdProps) => {
    return (
        <div className="flex flex-col items-center relative w-full">
            <img src={img} alt="" className='pointer-none w-full' />
            <p className='break-words text-center text-gray text-xl font-bold w-[30%] md:w-[95%] xl:w-[50%] 2xl:w-[31%]'>{name}</p>
        </div>
    )
}

ProductCard.defaultProps = {
    img: product1,
    name: "CGPODS X"
}

export default ProductCard