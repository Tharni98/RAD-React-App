import {Component} from "react";
import {Product} from '../../common/Product/Product';


export class Home extends Component {
    constructor(props: {}| Readonly <{}>) {
        super(props);
        this.state={
            data:[],
        }
    }

    //React Lifecycle method
    componentDidMount() {
        this.fetchData();
    }

    //asynchronize
    fetchData = async () =>{
        try{
            const responce : Response = await fetch('./product-data.json')
            const jsonData = await responce.json();
            // set json data
            this.setState({data : jsonData})

        }catch(error){
            console.log('Error fetching data',error)
        }
    }


    render() {

        // @ts-ignore
        const {data}=this.state;
        return (
            <>
                <div className={'flex'}>
                    <div className={'flex flex-wrap justify-center items-center mx-auto mt-5 mb-5'}>
                        {/*<Product/>*/}
                        {
                           data.map((product:any)=>( //loop array
                               <Product key={product.id} data={product}/>
                           ) )
                        }
                    </div>
                </div>
            </>
        );
    }
}