import React from "react";

class Card extends React.Component
{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container py-5">
                <div className="row justify-content-center">

                    <div className="col-12 col-lg-4">
                        <div className="testBox">
                            Lorem Ipsum

                        </div>
                        {/*<div className="card box-shadow mx-auto my-5" style="width: 18rem;">
                            <div className="card-body">
                                <h5 className="card-title">Product</h5>

                                    <p className="card-text">Some quick example</p>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
        );
    };
}

export default Card