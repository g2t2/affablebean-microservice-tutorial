import React from 'react';

const Checkout = () => {
    return (
        <div className="container">
            <form>
                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Total</label>
                    <div className="col-md-9">
                        <span className="text-primary">0 XLM</span>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Email</label>
                    <div className="col-md-9">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-3 col-form-label">Source Account</label>
                    <div className="col-md-9">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="offset-3 col-md-9 text-right">
                        <input type="button" value="Confirm Payment" className="btn btn-warning"/>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Checkout;