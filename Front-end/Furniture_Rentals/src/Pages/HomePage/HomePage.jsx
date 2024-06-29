import React, {useState, useRef} from 'react'
import { NavBar } from './components/NavBar'
import { Link, useNavigate } from "react-router-dom";
import BedRoom from "../../assets/Bedroom.png"
import DinningTable from "../../assets/DinningTable.png"
import Sofa from "../../assets/Sofa.png"
import Office from "../../assets/Office.png"
import Footer from './components/Footer';


const HomePage = () => {

    const navigation = useNavigate()

    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    
    const handleMouseDown = (e) => {
        setIsDragging(true);
    }

      
    const handleMouseMove = (e) => {
        if (isDragging) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const newX = e.clientX - containerRect.left;
        const newY = e.clientY - containerRect.top;
    
        // Ensure the image stays within the container bounds
        const boundedX = Math.min(Math.max(newX, 0), containerRect.width);
        const boundedY = Math.min(Math.max(newY, 0), containerRect.height);
    
        setPosition({ x: boundedX, y: boundedY });
        }
    }
    
    const handleMouseUp = () => {
        setIsDragging(false);
    }

    const gotoProductDetail = () => {
        navigation("/productDetail")
    }
      

    return (
        <div>
            <NavBar />
            <div className='flex p-5  cursor-pointer'   >
                <div>
                    <div className=' m-5 relative bg-customCardColor  w-[30rem] h-[15rem]'>
                        <h1 className='absolute top-10 left-5'>Bring your vision to life.</h1>
                        <h1 className='absolute top-20 left-5 font-bold text-2xl'>Transform <br /> your home</h1>
                        <div className='group'>
                            <button className='absolute top-40 left-5 font-medium'>Explore Products</button>
                            <span className='group-hover:w-[8rem] duration-500 absolute bottom-12 left-5 bg-black  w-[0rem] h-[0.2rem] block'></span>
                        </div>
                        <img className='absolute left-52 object-cover w-[15rem] h-[15rem] '  src="https://www.caffelattehome.com/img/product-page/otter-single-sofa/zoom-test/otter-single-sofa-1.png" alt="" />
                    </div>
                    <div className='m-5 relative bg-customCardColor  w-[30rem] h-[15rem]'>
                        <h1 className='absolute top-10 left-5'>Bring your vision to life.</h1>
                        <h1 className='absolute top-20 left-5 font-bold text-2xl'>Transform <br /> your home</h1>
                        <div className='group'>
                            <button className='absolute top-40 left-5 font-medium'>Explore Products</button>
                            <span className='group-hover:w-[8rem] duration-500 absolute bottom-12 left-5 bg-black  w-[0rem] h-[0.2rem] block'></span>
                        </div>
                        <img className='absolute left-52 object-cover w-[15rem] h-[15rem] '  src="https://www.caffelattehome.com/img/product-page/otter-single-sofa/zoom-test/otter-single-sofa-1.png" alt="" />
                    </div>
                </div>
                <div className=' w-[65rem] h-[33rem] overflow-hidden'
                ref={containerRef}    
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                >
                    <img className='m-5 w-[100rem] h-[31.25rem] ' style={{ left: `${position.x}px`, top: `${position.y}px`, cursor: 'pointer' }}
                    src="https://www.ikea.com/at/en/images/products/ekenaeset-armchair-oak-gunnared-beige__1054268_pe847637_s5.jpg?f=xl" alt="" onMouseDown={handleMouseDown}
                    />

                    <img className='m-5 w-[59rem] h-[31.25rem]' style={{ left: `${position.x}px`, top: `${position.y}px`, cursor: 'pointer' }}
                    src="https://www.ikea.com/at/en/images/products/ekenaeset-armchair-oak-gunnared-beige__1054268_pe847637_s5.jpg?f=xl" alt="" onMouseDown={handleMouseDown}
                    />
                </div>
            </div>



            <div className='flex  mt-5'>
                <div className='text-center mx-12   w-[30rem] h-[20rem]  bg-customCardColor cursor-pointer'>
                    <div className='flex justify-center'>
                        <img className='hover:scale-105 duration-500 mt-3 w-[20rem] h-[15rem]  object-cover' src={BedRoom} alt="" />
                    </div>
                    <h1 className='mt-5'>Bedroom</h1>
                </div>

                <div className='text-center mx-12   w-[30rem] h-[20rem]  bg-customCardColor cursor-pointer'>
                    <div className='flex justify-center'>
                        <img className='hover:scale-105 duration-500 mt-5 ml-5 w-[20rem] h-[15rem]  object-cover' src={DinningTable} alt="" />
                    </div>
                    <h1 className='mt-5'>Dining Room</h1>
                </div>

                <div className='text-center mx-12   w-[30rem] h-[20rem]  bg-customCardColor cursor-pointer'>
                    <div className='flex justify-center'>
                        <img className='hover:scale-105 duration-500 mt-10 w-[20rem] h-[15rem]  object-cover' src={Sofa} alt="" />
                    </div>
                    <h1 className='mt-0'>Living Room</h1>
                </div>

                <div className='text-center mx-12   w-[30rem] h-[20rem]  bg-customCardColor cursor-pointer'>
                    <div className='flex justify-center'>
                        <img className='hover:scale-105 duration-500 mt-5 w-[15rem] h-[15rem]  object-cover' src={Office} alt="" />
                    </div>
                    <h1 className='mt-5'>Office</h1>
                </div>
            </div>



            <div>
                <h1 className='mt-20 ml-5 font-bold text-4xl'>Featured Products</h1>
                <span className='m-5 mb-20 block w-100% h-[0.1rem] bg-gray-500 '></span>
                <div className='pl-11  grid grid-cols-4 gap-4'>
                    <div className='rounded p-2 hover:-translate-y-10 transition ease-out hover:shadow-2xl duration-500 flex justify-center w-[16rem] h-[21rem] mb-5 bg-FeturedCardColor cursor-pointer' onClick={gotoProductDetail}>
                        <div>
                            <img className='rounded w-[15rem] h-[15rem]' src="https://furniture.electrental.webdevia.com/wp-content/uploads/sites/8/2024/02/product_image_furniture_33-600x600.webp" alt="" />
                            <h1 className='font-medium'>Zen Haven Meditation Chair</h1>
                            <h3>Office</h3>
                            <p>Price: $</p>
                        </div>
                    </div>

                    <div className='rounded p-2 hover:-translate-y-10 transition ease-out hover:shadow-2xl duration-500 flex justify-center w-[16rem] h-[21rem] mb-5 bg-FeturedCardColor cursor-pointer'>
                        <div>
                            <img className='rounded w-[15rem] h-[15rem]' src="https://furniture.electrental.webdevia.com/wp-content/uploads/sites/8/2024/02/product_image_furniture_33-600x600.webp" alt="" />
                            <h1 className='font-medium'>Zen Haven Meditation Chair</h1>
                            <h3>Office</h3>
                            <p>Price: $</p>
                        </div>
                    </div>

                    <div className='rounded p-2 hover:-translate-y-10 transition ease-out hover:shadow-2xl duration-500 flex justify-center w-[16rem] h-[21rem] mb-5 bg-FeturedCardColor cursor-pointer'>
                        <div>
                            <img className='rounded w-[15rem] h-[15rem]' src="https://furniture.electrental.webdevia.com/wp-content/uploads/sites/8/2024/02/product_image_furniture_33-600x600.webp" alt="" />
                            <h1 className='font-medium'>Zen Haven Meditation Chair</h1>
                            <h3>Office</h3>
                            <p>Price: $</p>
                        </div>
                    </div>

                    <div className='rounded p-2 hover:-translate-y-10 transition ease-out hover:shadow-2xl duration-500 flex justify-center w-[16rem] h-[21rem] mb-5 bg-FeturedCardColor cursor-pointer'>
                        <div>
                            <img className='rounded w-[15rem] h-[15rem]' src="https://furniture.electrental.webdevia.com/wp-content/uploads/sites/8/2024/02/product_image_furniture_33-600x600.webp" alt="" />
                            <h1 className='font-medium'>Zen Haven Meditation Chair</h1>
                            <h3>Office</h3>
                            <p>Price: $</p>
                        </div>
                    </div>

                    <div className='rounded p-2 hover:-translate-y-10 transition ease-out hover:shadow-2xl duration-500 flex justify-center w-[16rem] h-[21rem] mb-5 bg-FeturedCardColor cursor-pointer'>
                        <div>
                            <img className='rounded w-[15rem] h-[15rem]' src="https://furniture.electrental.webdevia.com/wp-content/uploads/sites/8/2024/02/product_image_furniture_33-600x600.webp" alt="" />
                            <h1 className='font-medium'>Zen Haven Meditation Chair</h1>
                            <h3>Office</h3>
                            <p>Price: $</p>
                        </div>
                    </div>

                    <div className='rounded p-2 hover:-translate-y-10 transition ease-out hover:shadow-2xl duration-500 flex justify-center w-[16rem] h-[21rem] mb-5 bg-FeturedCardColor cursor-pointer'>
                        <div>
                            <img className='rounded w-[15rem] h-[15rem]' src="https://furniture.electrental.webdevia.com/wp-content/uploads/sites/8/2024/02/product_image_furniture_33-600x600.webp" alt="" />
                            <h1 className='font-medium'>Zen Haven Meditation Chair</h1>
                            <h3>Office</h3>
                            <p>Price: $</p>
                        </div>
                    </div>

                    <div className='rounded p-2 hover:-translate-y-10 transition ease-out hover:shadow-2xl duration-500 flex justify-center w-[16rem] h-[21rem] mb-5 bg-FeturedCardColor cursor-pointer'>
                        <div>
                            <img className='rounded w-[15rem] h-[15rem]' src="https://furniture.electrental.webdevia.com/wp-content/uploads/sites/8/2024/02/product_image_furniture_33-600x600.webp" alt="" />
                            <h1 className='font-medium'>Zen Haven Meditation Chair</h1>
                            <h3>Office</h3>
                            <p>Price: $</p>
                        </div>
                    </div>

                    <div className='rounded p-2 hover:-translate-y-10 transition ease-out hover:shadow-2xl duration-500 flex justify-center w-[16rem] h-[21rem] mb-5 bg-FeturedCardColor cursor-pointer'>
                        <div>
                            <img className='rounded w-[15rem] h-[15rem]' src="https://furniture.electrental.webdevia.com/wp-content/uploads/sites/8/2024/02/product_image_furniture_33-600x600.webp" alt="" />
                            <h1 className='font-medium'>Zen Haven Meditation Chair</h1>
                            <h3>Office</h3>
                            <p>Price: $</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default HomePage