import DiningTable from "../../assets/DinningTable.png"
import { useEffect, useRef, useState } from "react"
import Footer from "../HomePage/components/Footer"

const PaymentCart = () => {

    const [Counter, setCounter] = useState(1)

    const IncrementQuantity = () => {
        setCounter(Counter + 1)
    }

    const DecrementQuantity = () => {
        setCounter(Counter - 1)
        
    }

    useEffect(() => {
        if (Counter < 0){
            setCounter(0)
        }
    }, [Counter])
    


  return (
    <div>
        <h1 className='ml-5 mt-[10rem] font-bold text-4xl'>Cart</h1>
        <div className="flex">
            <div>
            <div className='mt-5 ml-5 flex justify-between w-[50rem]'>
                <h1 className="font-semibold">PRODUCT</h1>
                <h1 className="font-semibold">TOTAL</h1>
            </div>
            <hr class="ml-5 w-[50rem] h-1 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
            <div className="flex">
                <div className="mt-5">
                    <img className=" ml-5 w-[15rem] h-[15rem] object-contain rounded" src={DiningTable} alt="" />
                </div>
                <div className="ml-5 mt-10">
                    <h1>Urban Chic Barstool Set</h1>
                    <h3 className="text-green-400">75$</h3>
                    <h3 className="">Equipped with a powerful Hasselblad camera, <br /> the Mavic 3 Pro delivers stunning 20-megapixel photos and…</h3>
                    <form class="">
                        <label for="quantity-input" class="block mb-2 text-sm font-medium text-gray-900 ">Choose quantity:</label>
                        <div class="relative flex items-center max-w-[8rem]">
                            <button onClick={DecrementQuantity} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                </svg>
                            </button>
                            <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={Counter} required />
                            <button onClick={IncrementQuantity} type="button" id="increment-button" data-input-counter-increment="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
                
            </div>
            <hr class="ml-5 mt-5 mb-5 w-[50rem] h-1 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
            </div>
            <div className="">
                <h1 className="mt-5 text-right font-semibold">CART TOTALS</h1>
                <hr class="ml-5 w-[40rem] h-1 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
                <div className="ml-5 mt-5 mb-5 w-[40rem] flex justify-between">
                    <h1 className="">Subtotal</h1>
                    <h1 className="font-semibold">75$</h1>
                </div>
                <hr class="ml-5 mt-5 mb-5 w-[40rem] h-1 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
                <div className="ml-5 w-[40rem] flex justify-between">
                    <h1 className="text-2xl  font-semibold">Total</h1>
                    <h1 className="text-2xl font-semibold">75$</h1>
                </div>
                <div  className='ml-5 w-[40rem] hover:bg-black mt-5 bg-navBarBgColor text-white text-center p-3 rounded cursor-pointer' 
                
                >
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
        <div className="mt-20"></div>
        <Footer />
    </div>
  )
}

export default PaymentCart