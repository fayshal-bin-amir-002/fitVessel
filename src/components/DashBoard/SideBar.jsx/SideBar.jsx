import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";
import AdminMenus from "../Menus/AdminMenus/AdminMenus";
import MenuItems from "../Common/MenuItems/MenuItems";
import useRole from "../../../hooks/useRole";
import TrainerMenus from "../Menus/TrainerMenus/TrainerMenus";
import MemberMenus from "../Menus/MemberMenus/MemberMenus";
import { RxCross2 } from "react-icons/rx";
// import LoadingSpiner from "../../shared/LoadingSpiner/LoadingSpiner";

const SideBar = () => {

    const { role } = useRole();

    const [showSide, setShowSide] = useState(false);

    const toggleBar = () => {
        setShowSide(!showSide);
    }

    // if (isLoading) return <LoadingSpiner isBig={true}></LoadingSpiner>

    return (
        <div>
            <div className='text-gray-800 flex justify-between lg:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to="/" className="text-2xl md:text-3xl lg:text-4xl font-ubuntu font-medium">Fit<span className="text-[#DC5F00]">Vessel</span></Link>
                    </div>
                </div>

                <button
                    onClick={toggleBar}
                    className='mobile-menu-button p-4 focus:outline-none'
                >
                    {
                        showSide ? <FaBarsStaggered className='h-5 w-5 text-black' /> : <RxCross2 className="h-6 w-6 text-black" />
                    }
                </button>
            </div>
            <div className="flex">
                {/* side bar */}
                <div className={`z-10 lg:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${showSide && '-translate-x-full'
                    }  lg:translate-x-0  transition duration-200 ease-in-out`}>

                </div>
                <div
                    className={`z-10 lg:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${showSide && '-translate-x-full'
                        }  lg:translate-x-0  transition duration-200 ease-in-out`}
                >
                    <div>
                        {
                            role === 'admin' && <Navigate to="/dashboard/newsletter"></Navigate>
                        }
                        {
                            role === 'trainer' && <Navigate to="/dashboard/manage-slots"></Navigate>
                        }
                        {
                            role === 'member' && <Navigate to="/dashboard/active-logs"></Navigate>
                        }

                        {role === 'trainer' && <TrainerMenus></TrainerMenus>}
                        {role === 'admin' && <AdminMenus></AdminMenus>}
                        {role === 'member' && <MemberMenus></MemberMenus>}

                    </div>
                    <div>
                        <div className="w-full h-[1px] bg-gray-800"></div>
                        <MenuItems></MenuItems>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;