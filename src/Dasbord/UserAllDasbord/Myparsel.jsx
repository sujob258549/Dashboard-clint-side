
import { useState } from 'react';
import UseAxiosPublick from './../../CastomHook/UseAxiosPublick';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Myparsel = () => {
    const axiousPublick = UseAxiosPublick();
    const [productInfo, setProdictInfo] = useState([])
    useEffect(() => {
        axiousPublick.get('/priductinfo')
            .then(res => {
                setProdictInfo(res?.data)
            })
    }, [])
    console.log(productInfo);
    return (
        <div>
            <section className="container px-4 mx-auto">
                <div className="max-w-[1000px]">
                    <div className="flex items-center gap-x-3">
                        <h2 className="text-lg font-medium text-black">All Order</h2>
                        <span className="px-3 py-1 text-xs text-black bg-blue-100 rounded-full  dark:text-blue-400">{productInfo.length}</span>
                    </div>
                    <div className="flex flex-col mt-6 text-black">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 ">
                                        <thead className="bg-gray-50 ">
                                            <tr>
                                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right ">Parcel Type</th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right ">
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Requested Delivery Date</span>
                                                        <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            {/* SVG path for status icon */}
                                                        </svg>
                                                    </button>
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right ">
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Approximate Delivery Date</span>
                                                        <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            {/* SVG path for status icon */}
                                                        </svg>
                                                    </button>
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right ">
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Booking Date</span>
                                                        <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            {/* SVG path for status icon */}
                                                        </svg>
                                                    </button>
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right ">
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Delivery Men ID</span>
                                                        <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            {/* SVG path for status icon */}
                                                        </svg>
                                                    </button>
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right ">
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Booking Status</span>
                                                        <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            {/* SVG path for status icon */}
                                                        </svg>
                                                    </button>
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right ">
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Review Button</span>
                                                        <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            {/* SVG path for status icon */}
                                                        </svg>
                                                    </button>
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right ">
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Pay Button</span>
                                                        <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        </svg>
                                                    </button>
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-black text-left rtl:text-right ">
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Update Button</span>
                                                        <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        </svg>
                                                    </button>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200 ">
                                            {
                                                productInfo.map(product => (
                                                    <tr key={product._id}>
                                                       
                                                    
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">{product.productInfo.parcelType}</td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">{product.productInfo.requestedDeliveryDate}</td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">Design Director</td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">{product.status.date.slice(0, 10)}</td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">10</td>
                                                        <td className="px-4 py-4 text-sm font-medium  whitespace-nowrap">
                                                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 ">
                                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                                                <h2 className="text-sm font-normal text-emerald-500">{product.status.status}</h2>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap"><button className="btn bg-yellow-600 text-white">Review</button></td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap"><button className="btn bg-green-600 text-white">Pay</button></td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap"><Link to={`update/${product._id}`} className="btn bg-green-600 text-white">Update</Link></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Myparsel;
