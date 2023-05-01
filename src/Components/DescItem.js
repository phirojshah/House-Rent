import React, { useContext } from 'react'
import roomcontext from '../Context/roomdesc/roomcontext'
import { FaEdit, FaTrashAlt } from "react-icons/fa";
const DescItem = (props) => {
    const { descs, updateDesc } = props;
    const context = useContext(roomcontext);
    const { deleteDesc } = context;
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
                                <div className="d-flex ">
                                    <h5 className="card-title ">{descs.place}</h5>
                                    <i className='mx-2 fs-5' onClick={() => { updateDesc(descs) }}><FaEdit /></i>
                                    <i className='mx-2 fs-5' onClick={() => { deleteDesc(descs._id) }}><FaTrashAlt /></i>
                                </div>
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

export default DescItem
