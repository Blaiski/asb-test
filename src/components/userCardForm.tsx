import React from 'react';

type userCardFormType = {
    userName?: string;
    cardNumber?: number;
    cvc?: number;
    expDate?: string;
}

class UserCardForm extends React.Component<userCardFormType, userCardFormType>{
    constructor(props: userCardFormType) {
        super(props);
        this.state = { userName: this.props.userName };
        }
    
    
    render(){
        return(
            <div className="App-body">
                <label> Welcome {this.props.userName}</label>
                <br /><br /><br />
                <form onSubmit={this.handleSubmit}>
                    <input maxLength={16} placeholder="Credit Card Number"
                        id="cardNumber" onChange={this.handleChange} value={this.state.cardNumber} />

                    <input maxLength={3} placeholder="CVC" id="cvc" onChange={this.handleChange} style={{ width: "30px" }} value={this.state.cvc} />

                    <input type="month" placeholder="Expiry Date" id="expDate" onChange={this.handleChange} value={this.state.expDate}/>
                    <br /><br /><br />
                    <button >Submit</button>
                </form>
            </div>
        );
    }

    handleChange = (e: any) => {
       
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
    }
}

export default UserCardForm;