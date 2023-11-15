import useWindowDimensions from '../../hook/useWindowDimensions'
import NavDesktop from './mobile&desktop/NavDesktop'
import NavMobile from './mobile&desktop/NavMobile'


const Navbar = () => {
    const { width } = useWindowDimensions()

    let mobile: boolean = width < 800

    return (

        <div className="w-full relative">
            {mobile 
            ? <NavMobile />
            : <NavDesktop />
            }
        </div>

    )
}
{/* <Modal active={modalActive} setActive={setModalActive} /> */}
export default Navbar