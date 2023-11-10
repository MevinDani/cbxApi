import React, { useEffect, useState } from 'react'
import './TotalIssuedPdc.css'
import { FaSortDown } from "react-icons/fa";
import { RotatingLines } from 'react-loader-spinner'



const TotalIssuedPdc = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [totalIssuedPdc, setTotalIssuedPdc] = useState(null)

    const [i1date, setI1Date] = useState(100)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        setTotalIssuedPdc(null)
        const url = `https://cubixweberp.com:164/api/Dashboard/DashBoard?cmpcode=PENDULUM&guid=C39F6BCB-86DE-42F2-95B3-3D4DD4278CDA&mod=TOTAL_PDCI&s1=%27test%27&s2=%27test%27&s3=%27test%27&i1=${i1date}&i2=0&dt1=1-1-2022&dt2=1-1-2022`

        fetch(url)
            .then(response => response.json())
            .then(data => setTotalIssuedPdc(data))
            .catch(error => console.error('Error:', error));
    }, [i1date])

    // console.log(totalIssuedPdc)

    return (
        <div className='CBDwrapper'>
            <div className='CBDCont'>
                <div className='CBDMAINDROP'>
                    <div className='CBDDropCont'>
                        <div className='CBDDropItems'>
                            <div className='CBDDText' onClick={() => setI1Date(100)}>Last 100 Days</div>
                            <div className='CBDDText'><FaSortDown className='CBDrop' onClick={toggleDropdown} /></div>
                        </div>
                    </div>
                    {isOpen && (
                        <div className='CBDDropDown'>
                            <div className='CBDDropDownCont'>
                                <div className='CBDDropDownText' onClick={() => setI1Date(30)}>Last 30 days</div>
                                <div className='CBDDropDownText' onClick={() => setI1Date(7)}>Last 7 days</div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='CBDDateCont'>
                    <div className='CBDItems'>
                        <div className='CBDText'>Total Issued PDC</div>
                        <div className='CBDNum'>
                            {
                                totalIssuedPdc ? totalIssuedPdc[0].PDCI : <RotatingLines
                                    strokeColor="#7D681A"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="40"
                                    visible={true}
                                />
                            }
                        </div>
                        <div><button className='CBDButton'>view list</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalIssuedPdc