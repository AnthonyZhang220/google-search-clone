import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { NavLink } from 'react-router-dom';



const links = [
    { url: '/search', text: `All`, icon: <SearchIcon /> },
    { url: '/news', text: 'News', icon: <NewspaperIcon /> },
    { url: '/images', text: 'Images', icon: <ImageSearchIcon /> },
    { url: '/videos', text: 'Videos', icon: <OndemandVideoIcon /> },
]
export const Links = () => {
    return (
        <div className='flex sm:justify-around justify-between items-center mt-4'>
            {links.map(({ url, text, icon }) => (
                <NavLink to={url} className={({ isActive }) => isActive ? 'text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2' : 'm-4'}>
                    {icon}{text}
                </NavLink>
            ))}
        </div>
    )
};
