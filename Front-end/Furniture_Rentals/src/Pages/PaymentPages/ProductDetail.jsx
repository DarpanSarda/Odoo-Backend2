import React, {useState} from 'react'
import { NavBar } from '../HomePage/components/NavBar'
import Office from "../../assets/Office.png"
import SecurityCheckout from "../../assets/securityCheckout.png"

const ProductDetail = () => {

    const [seeToast, setseeToast] = useState(false)

    const ToastMsg = () => {
        if (seeToast == false) {
            setseeToast(true)
        }
        else {
            setseeToast(false)
        }
    }

  return (
    <div>
        <NavBar/>
        {
            seeToast? <div id="toast-success" class="absolute top-20 left-10  flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="sr-only">Check icon</span>
            </div>
            <div class="ms-3 text-sm font-normal">“Urban Chic Barstool Set” has been added to your cart.</div>
            <button onClick={ToastMsg} type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                <span class="sr-only">Close</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
        </div>:null
        }
        <div className='flex justify-center gap-20'>
            <div>
                <img className='mt-10 w-[40rem] h-[30rem] object-cover bg-black' src={Office} alt="" />
            </div>
            <div className='w-[30rem] '>
                <h1 className='mt-10 text-3xl font-semibold'>Urban Chic Barstool Set</h1>
                <p className='mt-5'>Equipped with a powerful Hasselblad camera, the Mavic 3 Pro delivers stunning 20-megapixel photos and stunning 4K videos with exceptional clarity and details. Its large one-inch CMOS sensor and advanced image processing capabilities ensure every shot is incredibly sharp and vibrant, even in low-light conditions.</p>
                <h1 className='mt-5 font-medium text-2xl'>Price: $75/Month</h1>
                <span className='mt-5 w-100% h-[0.2rem] bg-navBarBgColor block'></span>
                <div  className='hover:bg-black mt-5 bg-navBarBgColor text-white text-center p-3 rounded cursor-pointer' 
                onClick={() => setseeToast(true)}
                >
                    <button>Add to cart</button>
                </div>
                <h1 className='mt-5'>Category: Office</h1>
                <div className='flex items-center mt-5'>
                    <img className='w-[2rem]' src={SecurityCheckout} alt="" />
                    <h1 className='ml-2'>Guarantee Safe Checkout</h1>
                </div>
            </div>
        </div>

        <div className='mt-20 px-36 mb-10'>
            <h1>Description</h1>
            <p>The Mavic 3 Pro takes creativity to new heights with its array of intelligent flight features. From ActiveTrack 4.0, which enables the drone to autonomously track and capture subjects while avoiding obstacles, to Point of Interest 3.0, which automatically circles a selected subject, the Mavic 3 Pro empowers you to effortlessly create captivating aerial shots. <br /><br />
            Designed with user convenience in mind, the Mavic 3 Pro is incredibly easy to fly, whether you're a seasoned pilot or a beginner. <br /> Its intuitive controls and intelligent flight modes allow you to focus on capturing breathtaking footage without worrying about the technicalities. <br /><br />
            Say goodbye to limitations with extended flight times of up to 45 minutes, thanks to the Mavic 3 Pro's innovative battery technology. Additionally, its cutting-edge obstacle avoidance system ensures a worry-free flight experience, while redundant sensors provide extra safety and precision.

            </p>
        </div>
    </div>
  )
}

export default ProductDetail