import {Component} from "react";
import {Simulate} from "react-dom/test-utils";

import logo from '../../../images/img_1.png'
import {Link} from "react-router-dom";

export class NavBar extends Component {
    render() {
        return (
            <>
                <div className={"p-4 bg-[#17594A] flex ju"}> {/* apply to Gradiant colur   */}
                    <h1 className={"text-2xl text-[#F3F8FF] pl-2 "}>Organic Shop</h1>
                    <img className={"h-7 w-7 m-1 pt-0.1 "} src={logo} alt={''}></img>

                    <ul className={"list-none ml-[500px] mt-1 " }>
                        <li className={'inline-block mr-2 pl-1 pr-1 text-[17px] text-[#FFFFFF] pt-[5px] hover:text-[#A2FF86]'}>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className={'inline-block mr-2  pl-1 pr-1 text-[17px] text-[#FFFFFF] hover:text-[#A2FF86]'}>
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li className={'inline-block mr-2  pl-1 pr-1 text-[17px] text-[#FFFFFF] hover:text-[#A2FF86]'}>
                            <Link to={'/contact'}>Contact</Link>
                        </li>
                    </ul>

                    <button className={'border-2 font-bold text-fw-b ml-[500px] text-[15px] text-[#FFFFF] bg-green-100 pl-3 pr-3 hover:text-green-600 '} >
                        <Link to={'/login'}>Sing in</Link></button>
                </div>
            </>
        );
    }
    onClick = () => {
        alert("Btn Click")
    }
}

// #17594A