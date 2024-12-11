import React, { useState } from "react";
import './Grid.css';
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
import { useNavigate } from 'react-router-dom';

const Grid = () => {
    const [ageRange, setAgeRange] = useState([25, 50]);
    const [activeTab, setActiveTab] = useState(null);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
    const [viewMode, setViewMode] = useState("grid");
    const navigate = useNavigate();

    const handleViewModeChange = (mode) => {
        setViewMode(mode);
        navigate('/homescreen');
    };

    const handleChange = (event, newValue) => {
        setAgeRange(newValue);
    };

    const isOpenSubmenu = (tabIndex) => {
        if (activeTab === tabIndex) {
            setIsToggleSubmenu(!isToggleSubmenu);
        } else {
            setActiveTab(tabIndex);
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
        <div className="grid-container">

            <header className="grid-home-header">
                <div className="grid-logo">
                    <img src={Logo} alt="Logo" />
                    <h2>Makemymarry</h2>
                </div>
                <nav>
                    <Link to="/home" className="active">Home</Link>
                    <Link to="/interest">Interest</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <div className="grid-profile-section">
                    <MdOutlineAccountBalanceWallet size={25} style={{ color: "grey" }} />
                    <IoMdNotificationsOutline size={25} style={{ color: "grey" }} />
                    <div className="grid-profile-img d-flex align-items-center">
                        <div>
                            <img
                                src={userImg}
                                alt="profile"
                                style={{ height: "40px", width: "40px", borderRadius: "50%" }}
                            />
                        </div>
                        <div>
                            <IoMdArrowDropdown size={17} style={{ color: "grey" }} />
                        </div>
                    </div>
                </div>
            </header>

            <div className="heading">
                <h3>Hello Grid!</h3>
            </div>

            {/* Main Content */}
            <div className="row" style={{ marginLeft: "7vw", marginRight: "7vw" }}>
                {/* Grid Section */}
                <div className="col-md-9 mt-3">
                    <div className="grid-search-container">
                        <TextField
                            className="grid-search-box"
                            variant="filled"
                            placeholder="Search name or location"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" style={{ color: "gray" }}>
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <div className="grid-view-toggle">
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
                        <div className="profiles-container">
                            {profiles.map((profile, index) => (
                                <div key={index} className={`grid-profile-card ${viewMode}`}>
                                    <div className="profile-info align-self-center">
                                        <div className="grid-user-img">
                                            <img
                                                src={userImg}
                                                alt="profile"
                                                className="me-3 rounded-circle grid-user-img"
                                            />
                                        </div>

                                        <div className="grid_profile_details">
                                            <div className="name">
                                                <h4 className="mb-0">{profile.name}</h4>
                                            </div>
                                            <div className="user-age-height">
                                                <span><FiUser />{profile.age} yrs, {profile.height}</span>
                                            </div>
                                            <div className="user-location">
                                                <span>
                                                    <IoLocationOutline />
                                                    {profile.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="btn"
                                        style={{
                                            background: "linear-gradient(90deg, rgba(235, 91, 132, 1) 0%, rgba(201, 24, 74, 1) 100%)",
                                            color: "#fff",
                                            width: "100%"
                                        }}
                                    >
                                        Connect Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Filters Section */}
                <div className="col-md-3 filters">

                    <h4 className="grid-filters-title">Filters</h4>

                    {/* Age Preference */}
                    <div className="grid-filter-group">
                        <h5 className="grid-filter-subtitle">Age Preference</h5>
                        <p className="grid-age-description">
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

                    <div className="grid-filter-group">
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
                                            <label className="custom-checkbox">
                                                <Checkbox />
                                                Doesn't Matter
                                            </label>
                                        </li>
                                        <li>
                                            <label className="custom-checkbox">
                                                <Checkbox />
                                                Private Job
                                            </label>
                                        </li>
                                        <li>
                                            <label className="custom-checkbox">
                                                <Checkbox />
                                                Business/Self Employed
                                            </label>
                                        </li>
                                        <li>
                                            <label className="custom-checkbox">
                                                <Checkbox />
                                                Government Job
                                            </label>
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
            <footer className="grid-footer-section text-center py-3">
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

export default Grid;
