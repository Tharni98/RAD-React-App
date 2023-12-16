import {Component} from "react";
import Spinach from "../../../images/product/Spinach.png";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

interface ProductProps {
    data: any
}

export class Product extends Component<ProductProps> {

    render() {

        const {data}=this.props;
        const image = require('../../../images/product/' + data.image)

        return (
            <>
                <div className={' justify-center items-center w-28 h-36 bg-white mr-2 mb-2 border-gray-500 border-[0.5px] '}>
                    <div>
                        <img src={image}/>
                    </div>

                    <div className={'flex'}>

                        <div>
                            <h3 className={'text-red-700 text-[#000000] text-[12px] pl-2 hover:bg-green-200 '}>{data.name}</h3>
                        </div>

                        <div className={'bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2 '}>
                            <h3 className={'text-[12px]  pl-2'}>{data.price}<small className={'text-[7px] '}>{data.currency}</small>

                            </h3>
                        </div>

                    </div>

                    <div className={'flex justify-center'}>
                        <button className={'w-full mt-1.5 p-[2px] font-bold bg-green-500 hover:bg-green-200'}>Add to Card</button>
                    </div>

                </div>
            </>
        );
    }
}