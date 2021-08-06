import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider';
import useGoogleSearch from './../useGoogleSearch';
import { Link } from 'react-router-dom';
import GoogleLogoTwo from '../images/Google-LogoTwo.png'
import Search from './Search';
import DescriptionIcon from '@material-ui/icons/Search';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ImageIcon from '@material-ui/icons/Image';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
    const [{term}, dispatch] = useStateValue();
    const {data} = useGoogleSearch(term);

    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <Link to="/">
                    <img className='searchPage__logo' src={GoogleLogoTwo} />
                </Link>
                <div className='searchPage__headerBody'>
                    <Search hideButtons />

                    <div className='searchPage__options'>
                        <div className='searchPage__optionsLeft'>
                            <div className='searchPage__option'>
                                <DescriptionIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className='searchPage__option'>
                                <AnnouncementIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className='searchPage__option'>
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className='searchPage__option'>
                                <ShoppingCartIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className='searchPage__option'>
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className='searchPage__option'>
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>

                        <div className='searchPage__optionsRight'>
                            <div className='searchPage__option'>
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {term && (
                <div className='searchPage__results'>
                    <p className='searchPage__resultsCount'>                        
                        About {data?.searchInformation.formattedTotalResults}
                        results ({data?.searchInformation.formattedSearchTime}
                        seconds) for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className='searchPage_result'>
                            <a href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img
                                        className="searchPage_resultImage"
                                        src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                                        alt=''
                                    />
                                )}

                                {item.displayLink} ✔
                            </a>
                            <a className='searchPage_resultTitle' href={item.link}>
                            <h2>{item.title}</h2>
                            </a>
                            <p className='searchPage_resultSnippet'>{item.snippet}</p>
                        </div>
                    ))}

                </div> 
            )}
        </div>
    )
}

export default SearchPage
