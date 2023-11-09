import React, { useEffect, useState } from 'react'
import './Sales.css'
import { FaSortDown } from "react-icons/fa";
import { RotatingLines } from 'react-loader-spinner'



const TodaySales = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [salesData, setSaleData] = useState(null)

    const [totalSales, setTotalSales] = useState(null)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const url = 'https://cubixweberp.com:164/api/Dashboard/DashBoard?cmpcode=PENDULUM&guid=C39F6BCB-86DE-42F2-95B3-3D4DD4278CDA&mod=TOTAL_SALES&s1=%27%27&s2=%27%27&s3=%27%27&i1=100&i2=0&dt1=1-1-2022&dt2=1-1-2022';

        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setSaleData(data)
                const totalSales = data.reduce((acc, item) => acc + item.SALES_AMT, 0);

                const roundedTotalSales = totalSales.toFixed(2);

                if (roundedTotalSales) setTotalSales(roundedTotalSales)
                console.log(roundedTotalSales);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    console.log(salesData)

    return (
        <div className='TSSaleswrapper'>
            <div className='TSCont'>
                <div className='TSMAINDROP'>
                    <div className='TSDropCont'>
                        <div className='TSDropItems'>
                            <div className='TSDText'>Last 30 days</div>
                            <div className='TSDText'><FaSortDown onClick={toggleDropdown} /></div>
                        </div>
                    </div>
                    {isOpen && (
                        <div className='TSDropDown'>
                            <div className='TSDropDownCont'>
                                <div className='TSDropDownText'>Last 10 days</div>
                                <div className='TSDropDownText'>Last 5 days</div>
                                <div className='TSDropDownText'>Last 2 days</div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='TSSalesCont'>
                    <div className='TSSalesItems'>
                        <div className='TSText'>Total Sales</div>
                        <div className='TSNum'>
                            {
                                totalSales ? totalSales : <RotatingLines
                                    strokeColor="#107F6A"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="40"
                                    visible={true}
                                />
                            }
                        </div>
                        <div><button className='TSSalesButton'>view list</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodaySales