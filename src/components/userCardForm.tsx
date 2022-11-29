import React from 'react';

type userCardFormType = {
    userName?: string;
    cardNumber?: number;
    cvc?: number;
    expDate?: string;
    cacheState?: any;
    cachedState?: any;
}

/**
 * For now props and state will do fine with one type. Can create separate types in future when needed
 */
class UserCardForm extends React.Component<userCardFormType, userCardFormType>{
    constructor(props: userCardFormType) {
        super(props);
        this.state = { userName: this.props.userName };
        if(this.props.cachedState !== undefined ){
            this.state = {
                cardNumber: this.props.cachedState.cardNumber,
                cvc: this.props.cachedState.cvc,
                expDate: this.props.cachedState.expDate,
            };
        }
    }

    render() {
        return (
            <div className="App-body">
                <label> Welcome {this.props.userName}</label>
                <br /><br /><br />
                <form onSubmit={this.handleSubmit}>
                    <input maxLength={16} placeholder="Credit Card Number"
                        id="cardNumber" onChange={this.handleChange} value={this.state.cardNumber}/>

                    <input maxLength={3} placeholder="CVC" id="cvc" onChange={this.handleChange} style={{ width: "30px" }} value={this.state.cvc}/>

                    <input type="month" placeholder="Expiry Date" id="expDate" onChange={this.handleChange} value={this.state.expDate}/>
                    <br /><br /><br />
                    <button>Submit</button>
                </form>
            </div>
        );
    }

    handleChange = async (e: any) => {
        await this.setState({
            [e.target.id]: e.target.value
        });
        console.log(`state has been updated...`, this.state);
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(`form has been submitted with following state: `, this.state);
        alert("Submit is sucessful! See Console for logs :) ");
    }

    componentWillUnmount() {
        this.props.cacheState(this.state);
    }
}

export default UserCardForm;