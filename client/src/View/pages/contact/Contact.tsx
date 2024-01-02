import {Component} from "react";

export class Contact extends Component {
    render() {
        return (
            <>
                {/*<h1 className={'text-center text-3xl text-[#005B41]'}>This is a Contact Component</h1>*/}
                <div className={'flex'}>
                    <div className={'h-auto pt-5 pb-5 pl-10 mx-auto'}>
                        <div className={'p-2'}>
                            <h1 className={'text-3xl text-green-400 text-center underline decoration-10'}>Contact Us</h1>
                            <p className={'pb-3 text-[15px]' }>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ipsum!
                            </p>
                        </div>
                        <form className='h-auto p-2 justify-center'>
                            <div className='pb-2'>
                                <label className='text-[20px] pr-2 font-bold pl-10'> Your Email:</label>
                                <input className='float-right border-[2px] border-black-900 pr-10' type={'email'}/>
                            </div>

                            <div className='pb-2'>
                                <label className='text-[20px] pr-2 font-bold pl-10'> Subject:</label>
                                <input className='float-right border-[2px] border-black-900 pr-10' type={'email'}/>
                            </div>

                            <div className='pb-2'>
                                <label className='text-[20px] pr-2 font-bold pl-10'> Your Message:</label>
                                <textarea className='float-right border-[2px] border-black-900 pr-10'/>
                            </div>

                            <div className='mt-2'>
                                <button className={'p-[5px] bg-green-500  text-[15px] mt-5 ml-10'} type={'button'}>Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </>
        );
    }
}