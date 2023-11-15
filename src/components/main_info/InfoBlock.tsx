
interface blueShitProps {
    img: any;
    text: string;
    boldText: string;
    btnText: string;
}

const InfoBlock = ({ img, text, boldText, btnText }: blueShitProps) => {
    return (
        <div className="flex flex-row relative items-start w-[95%] ms:w-[80%] min-h-[100px] 
        md:w-[45%] lg:w-[38%] xl:w-[45%] 2xl:w-[45%] 3xl:w-[35%] 3xl:px-52 xl:px-32 lg:px-10">
            <img src={img} alt="" className='h-24 sm:h-18' />
            <div className="flex flex-col relative items-start w-[70%] ms:w-min">
                <p className='text-white w-[100%] ms:w-min'><a className='text-white font-bold'>{boldText}</a>{text}</p>
                <button className='text-black bg-white text-sm px-5 py-2 min-w-1 rounded-full mt-2'>{btnText}</button>
            </div>

        </div>
    )
}

export default InfoBlock