import React, { useEffect, useState } from 'react'
import './Sales.css'
import { FaSortDown } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { RotatingLines } from 'react-loader-spinner'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



const TodaySales = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [salesData, setSaleData] = useState(null)

    const [totalSales, setTotalSales] = useState(null)

    const [i1date, setI1Date] = useState(30)

    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        setTotalSales(null)
        const url = `https://cubixweberp.com:164/api/Dashboard/DashBoard?cmpcode=PENDULUM&guid=C39F6BCB-86DE-42F2-95B3-3D4DD4278CDA&mod=TOTAL_SALES&s1=%27%27&s2=%27%27&s3=%27%27&i1=${i1date}&i2=0&dt1=1-1-2022&dt2=1-1-2022`;

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
    }, [i1date]);

    console.log(salesData)
    console.log(i1date)

    return (
        <div className='TSSaleswrapper'>
            <div className='TSCont'>
                <div className='TSMAINDROP'>
                    <div className='TSDropCont'>
                        <div className='TSDropItems'>
                            <div className='TSDText' onClick={() => setI1Date(30)}>Last 30 days</div>
                            <div className='TSDText'><FaSortDown className='TSDrop' onClick={toggleDropdown} /></div>
                            <div className='TSDText'><FaListUl className='TSList' onClick={handleOpen} /></div>
                        </div>
                    </div>
                    <Modal
                        open={openModal}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box sx={{ width: 300, bgcolor: '#C2F3FF', outline: 'none', p: 2, height: '300px', overflowY: 'scroll' }}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Sales Data
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {
                                    salesData && salesData.map((i, k) => (
                                        <div className='salesModelCont' key={k}>
                                            <div className='salesDeptNo'>
                                                <div className='salesDeptNoText'>Dept. No</div>
                                                <div className='salesDeptNoNum'>{i.DeptName}</div>
                                            </div>
                                            <div className='salesDeptName'>
                                                <div className='salesDeptNameText'>Dept. Name</div>
                                                <div className='salesDeptNameNum'>{i.Deptno}</div>
                                            </div>
                                            <div className='salesName'>
                                                <div className='salesNameText'>Sales</div>
                                                <div className='salesNameNum'>{i.SALES_AMT}</div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Typography>
                            <Button sx={{ color: '#FF6A32' }} onClick={handleClose}>Close Modal</Button>
                        </Box>
                    </Modal>
                    {isOpen && (
                        <div className='TSDropDown'>
                            <div className='TSDropDownCont'>
                                <div className='TSDropDownText' onClick={() => setI1Date(10)}>Last 10 days</div>
                                <div className='TSDropDownText' onClick={() => setI1Date(7)}>Last 7 days</div>
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