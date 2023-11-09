import React from 'react'
import './Panel.css'
import { Link } from 'react-router-dom'


const Panel = () => {
    return (
        <div className='admPanCont'>
            <div className='items'>
                <Link className="custom-link" to='/sales'>Sales</Link>
            </div>
            <div className='items'>
                <Link className="custom-link" to='/totalPdcPending'>Total Pending PDC</Link>
            </div>
            <div className='items'>
                <Link className="custom-link" to='/totalPdcIssued'>Total PDC issued</Link>
            </div>
        </div>
    )
}

export default Panel