import React, { Component } from 'react';
import { fetchCustomer } from '../service/CustomerService'
import DisplayCustomerDetails from './DisplayCustomerDetails';

class GetCustomerDetails extends Component {

    idRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = { id: -1, customer: this.testCust , errorMsg: undefined };
    }

    submitHandler(event) {
        console.log("inside submit handler function");
        event.preventDefault();
        const promise = fetchCustomer(this.state.id);
        const successFun = (response) => {
            console.log("inside success function")
            const customer = response.data;
            this.setState({ ...this.state, customer: customer, errMsg: undefined });
            console.log("customer fetched", this.state.customer);
        };

        const errFun = (error) => {
            console.log('inside error function')
            this.setState({ ...this.state, customer: undefined, errMsg: error.response.data });
        };

        promise.then(successFun)
        .catch(errFun );
    }

    setIdHandler() {
        let idVal = this.idRef.current.value;
        this.setState({ ...this.state, id: idVal, customer: undefined, errMsg: undefined })
    }

    render() {
        console.log("inside render")
        return (
            <div>
                <h3>Enter Customer Details</h3>
                <form onSuspend={(event)=>this.submitHandler(event)}>
                <div>
                    <label>Enter Customer Id to be fetched</label>
                    <input name="id" type="number" ref={this.idRef} onChange={()=>this.setIdHandler()}/>
                </div>
                <button>Get Customer Details</button>
                </form>
                {this.state.customer?(
                    <div>
                        <h2>Customer Details</h2>
                        <DisplayCustomerDetails customer={this.state.customer}/>
                    </div>
                ):''}
           {this.state.errMsg ? (
            <div>
                Customer does not successfully fetched for given id {this.state.id}
                <br/>
                {this.state.errMsg}
            </div>
           ):''}
            </div>
        );

    }
}

export default GetCustomerDetails;
