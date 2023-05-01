import React from 'react'

const PropertyItem = (props) => {
    const { descs } = props;
    return (
        <>
            <div className="container">
                <div className="card mb-3 " >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://wallpapercave.com/wp/wp6957233.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{descs.place}</h5>
                                <p className="card-text">{descs.description}</p>
                                <b className="card-text">Price: {descs.price}</b>
                                <br></br>
                                <b className="card-text">Phone: {descs.phonenumber}</b>
                                <div className="card-footer">
                                    <small className="text-muted">Posted at {descs.date}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyItem
