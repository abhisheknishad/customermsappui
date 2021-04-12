function DisplayCustomerDetails({customer}){
    return(
        <div>
            id is {customer.id}
            <br/>
            name is {customer.name}
            <br/>
            address is {customer.address}
            <br/>
            age is {customer.age}

        </div>

    );
}


export default DisplayCustomerDetails;