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
                        id="cardNumber" onChange={this.handleChange}  />

                    <input maxLength={3} placeholder="CVC" id="cvc" onChange={this.handleChange} style={{ width: "30px" }} />

                    <input type="month" placeholder="Expiry Date" id="expDate" onChange={this.handleChange} />
                    <br /><br /><br />
                    <button>Submit</button>
                </form>
            </div>
        );
    }

    handleChange =  async (e: any) => {
       await this.setState({
            [e.target.id]: e.target.value
        });
        console.log(`state has been updated...`, this.state);
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
    }
}

export default UserCardForm;