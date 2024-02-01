import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler =  () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img
                onClick={toggleMenuHandler}
                    className='h-12 cursor-pointer'
                    src='https://static.vecteezy.com/system/resources/thumbnails/001/500/312/small/bullet-menu-icon-free-vector.jpg'
                    alt='menu'></img>
                <img
                    className='h-12 mx-2'
                    src='https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg'
                    alt='logo'></img>
            </div>

            <div className='col-span-10 px-10'>
                <input className="w-1/2 border border-slate-400 rounded-l-3xl p-2" type='text' />
                <button className=' border  border-slate-400 text-white p-2 px-5 py-2 rounded-r-3xl bg-gray-100'>🔍</button>
            </div>
            <div className='col-span-1'>
                <img
                    className='h-12'
                    src='https://t3.ftcdn.net/jpg/05/11/52/90/360_F_511529094_PISGWTmlfmBu1g4nocqdVKaHBnzMDWrN.jpg'
                    alt='user'></img>
            </div>
        </div>
    );
}

export default Header;