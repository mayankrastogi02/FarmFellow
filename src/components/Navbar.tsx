import { useMantineColorScheme } from '@mantine/core';
import LightDarkButton from './LightDarkButton'
import Logo from './Logo'

const Navbar = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <div className={`navbar  ${dark ? "bg-darkBackground" : "bg-background"}`}>
            <div className={`navbar-start`}>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className={`mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-52  ${dark ? "bg-darkBackground" : "bg-background"}`}>
                        <li><a href='/chat'>Orders</a></li>
                        <li><a href='/cart'>Cart</a></li>
                        <li>
                            <a href="/profile">
                                Profile
                            </a>
                        </li>
                        <li><a href="/profile">Logout</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl" href='/'>
                    <Logo />
                    SiloFellow
                </a>
            </div>
            <div className='navbar-end flex lg:hidden'>
                <LightDarkButton />
            </div>
            <div className="flex-none gap-2 navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='/chat'>Orders</a></li>
                    <li><a href='/cart'>Cart</a></li>
                </ul>
                <LightDarkButton />
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {/* User Profile Picture */}
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-52">
                        <li><a href='/profile'>Profile</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Navbar