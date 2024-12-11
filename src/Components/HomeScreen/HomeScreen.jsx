import React, { useState } from "react";
import './HomeScreen.css';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.png';
import userImg from '../../assets/user.png';
import { FiUser } from "react-icons/fi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLanguage } from "react-icons/md";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { IoBagRemoveOutline } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa6";
import Button from '@mui/material/Button';
import { FaAngleRight } from "react-icons/fa";
import { Slider, Box } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
    const [ageRange, setAgeRange] = useState([20, 50]);
    const [activeTab, setActiveTab] = useState(null);
    const [activeProfile, setActiveProfile] = useState(null);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
    const [viewMode, setViewMode] = useState("list");
    const navigate = useNavigate();

    const handleViewModeChange = (mode) => {
        setViewMode(mode);
        navigate('/grid');
    };

    const handleChange = (event, newValue) => {
        setAgeRange(newValue);
    };

    const isOpenSubmenu = (index) => {
        if (activeTab === index) {
            setIsToggleSubmenu(!isToggleSubmenu);
        } else {
            setActiveTab(index);
            setIsToggleSubmenu(true);
        }
    };

    const profiles = new Array(5).fill({
        name: "Alia Sharma",
        id: "MMY23D456",
        age: 24,
        height: "4'8\"",
        location: "Pune, Maharashtra",
        language: "Hindi",
        profession: "Banking Professional",
    });

    return (
        <div className="homescreen-container">

            <header className="home-header">
                <div className="list-logo">
                    <img src={Logo} alt="Logo" />
                    <h2>Makemymarry</h2>
                </div>
                <nav>
                    <Link to="/home" className="active">Home</Link>
                    <Link to="/interest">Interest</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <div className="profile-section d-flex align-items-center">
                    <MdOutlineAccountBalanceWallet size={25} style={{color:"grey"}} />
                    <IoMdNotificationsOutline size={25} style={{color:"grey"}} />
                    <div className="profile-img d-flex align-items-center">
                        <div>
                            <img
                                src={userImg}
                                alt="profile"
                                style={{ height: "40px", width: "40px", borderRadius: "50%" }}
                            />
                        </div>
                        <div>
                            <IoMdArrowDropdown size={17} style={{color:"grey"}} />
                        </div>
                    </div>
                </div>
            </header>

            <div className="heading">
                <h3>20 Matches for you!</h3>
            </div>

            {/* Main Content */}
            <div className="row" style={{ marginLeft: "7vw", marginRight: "7vw" }}>
                {/* HomeScreen Section */}
                <div className="col-md-9 mt-3">
                    <div className="first-line">
                        <TextField
                            className="search-box"
                            variant="filled"
                            placeholder="Search name or location"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" >
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <div className="view-toggle">
                            <button
                                className={`d-flex btn btn-outline-secondary ${viewMode === "grid" ? "active" : ""}`}
                                onClick={() => handleViewModeChange("grid")}
                            >
                                <IoGridOutline /> Grid
                            </button>
                            <button
                                className={`d-flex btn btn-outline-secondary ${viewMode === "list" ? "active" : ""}`}
                                onClick={() => handleViewModeChange("list")}
                            >
                                <FaListUl /> List
                            </button>
                        </div>
                    </div>

                    <div className={`profiles-list ${viewMode}`}>
                        {profiles.map((profile, index) => (
                            <div key={index} className={`profile-card ${viewMode}`}>

                                <div className="profile-info d-flex align-items-center">
                                    {/* Profile Image */}
                                    <div className="user-img rounded-circle">
                                        <img
                                            src={userImg}
                                            alt="profile"
                                        />
                                    </div>

                                    {/* Profile Details */}
                                    <div className="profile_details">
                                        <div className="name-id gap-2">
                                            <h4 className="mb-0">{profile.name}</h4>
                                            <span className="id">({profile.id})</span>
                                        </div>

                                        <div className="age-height d-flex gap-3">
                                            <span className="d-block"><FiUser />{profile.age} yrs, {profile.height}</span>
                                            <span className="d-block">
                                                <IoLocationOutline />
                                                {profile.location}
                                            </span>
                                        </div>

                                        <div className="lang-prof d-flex gap-3">
                                            <span className="d-block"><MdOutlineLanguage />{profile.language}</span>
                                            <span className="d-block"><IoBagRemoveOutline />{profile.profession}</span>
                                        </div>

                                    </div>
                                </div>

                                <button
                                    className="btn"
                                    style={{
                                        background: "linear-gradient(90deg, rgba(235, 91, 132, 1) 0%, rgba(201, 24, 74, 1) 100%)",
                                        color: "#fff"
                                    }}
                                >
                                    Connect Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Filters Section */}
                <div className="col-md-3 filters">

                    <h4 className="filters-title">Filters</h4>

                    {/* Age Preference */}
                    <div className="filter-group">
                        <h5 className="filter-subtitle">Age Preference</h5>
                        <p className="age-description">
                            Selected age is in between {ageRange[0]} and {ageRange[1]}
                        </p>
                        <Box className="age-range">
                            <Slider
                                value={ageRange}
                                onChange={handleChange}
                                valueLabelDisplay="on"
                                min={0}
                                max={100}
                                sx={{
                                    mt: 1,
                                    color: '#c65b73df',
                                    '& .MuiSlider-thumb': {
                                        width: '0.6vw',
                                        height: '0.6vw',
                                        backgroundColor: '#c65b73df',
                                    },
                                    '& .MuiSlider-track': {
                                        backgroundColor: '#c65b73df',
                                    },
                                    '& .MuiSlider-rail': {
                                        backgroundColor: 'grey',
                                    },
                                }}
                            />
                        </Box>
                    </div>

                    {/* Profile Preference */}
                    <div className="filter-group">

                        <ul>
                            <li>
                                <Button
                                    className={`w-100 ${activeTab === 0 && !isToggleSubmenu ? 'active' : ''}`}
                                    onClick={() => isOpenSubmenu(0)}
                                >
                                    Profile Preference
                                    <span className="arrow"><FaAngleRight /></span>
                                </Button>
                                <div className={`submenuWrapper ${activeTab === 0 && !isToggleSubmenu ? 'colapse' : 'colapsed'}`}>
                                    <ul className="submenu">
                                        <li>
                                            <Checkbox />
                                            Doesn't Matter
                                        </li>
                                        <li>
                                            <Checkbox />
                                            Private Job
                                        </li>
                                        <li>
                                            <Checkbox />
                                            Business/Self Employed
                                        </li>
                                        <li>
                                            <Checkbox />
                                            Government Job
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <Button className={`w-100 ${activeTab === 1 ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
                                    Personal Preference
                                    <span className='arrow'><FaAngleRight /></span>
                                </Button>
                            </li>

                            <li>
                                <Button className={`w-100 ${activeTab === 2 ? 'active' : ''}`} onClick={() => isOpenSubmenu(2)}>
                                    Religion Preference
                                    <span className='arrow'><FaAngleRight /></span>
                                </Button>
                            </li>

                            <li>
                                <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`} onClick={() => isOpenSubmenu(3)}>
                                    Career Preference
                                    <span className='arrow'><FaAngleRight /></span>
                                </Button>
                            </li>

                            <li>
                                <Button className={`w-100 ${activeTab === 4 ? 'active' : ''}`} onClick={() => isOpenSubmenu(4)}>
                                    Lifestyle Preference
                                    <span className='arrow'><FaAngleRight /></span>
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer className="footer-section text-center py-3">
                <div className="footer-section-1 d-flex gap-3">
                    <p>Interest</p>
                    <p>Contact</p>
                </div>

                <div className="footer-section-2 d-flex gap-3">
                    <p>Privacy Policy</p>
                </div>

                <div className="footer-section-3 d-flex gap-3">
                    <p> Terms of Use</p>
                    <p>&copy; 2022 Makemymarry. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomeScreen;
