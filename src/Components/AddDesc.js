import React, { useRef, useContext } from 'react'
import styled from "styled-components";
import roomcontext from '../Context/roomdesc/roomcontext'
import { useState } from 'react';
const AddDesc = () => {
  const context = useContext(roomcontext);
  const { addDesc } = context;
  const [desc, setDesc] = useState({ place: "", phonenumber: "", description: "", price: "" })
  const ref = useRef(null);
  const refclose = useRef(null);
  const adddesc = () => {
    ref.current.click();
    console.log("added")
  }
  const handleAdd = (e) => {
    refclose.current.click();
    e.preventDefault();
    addDesc(desc.place, desc.description, desc.phonenumber, desc.price);
  }
  const onChange = (e) => {
    setDesc({ ...desc, [e.target.id]: e.target.value })
  }
  return (
    <>
      <button type="button" ref={ref} className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <Button>
        <button className="post" onClick={adddesc}><b>Post +</b></button>
      </Button>
      <div className="modal fade  " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Post the Room Description</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="/stats" encType="multipart/form-data" method="post">
                <div className="form-group mb-3 mx-1">
                  <div className="input-group mb-3">
                    <input type="file" className="form-control" id="image" required onChange={onChange} />
                    <label className="input-group-text" htmlFor="inputGroupFile02" >Upload</label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message-text" className="col-form-label my-1">Place:</label>
                    <input type="text" className="form-control" placeholder="Place" aria-label="place" aria-describedby="basic-addon1" id='place' required onChange={onChange} minLength={3} />
                    <label htmlFor="message-text" className="col-form-label my-1">Description:</label>
                    <textarea className="form-control" id="description" placeholder="Description" required onChange={onChange} minLength={3} ></textarea>
                    <label htmlFor="message-text" className="col-form-label my-1">Price:</label>
                    <input type="text" className="form-control" id='phonenumber' placeholder="Price" aria-label="number" aria-describedby="basic-addon1" required onChange={onChange} minLength={3} />
                    <label htmlFor="message-text" className="col-form-label my-1">Phone Number:</label>
                    <input type="number" className="form-control" id='price' placeholder="Phone Number" aria-label="number" aria-describedby="basic-addon1" required onChange={onChange} minLength={10} />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refclose} className="btn btn-secondary mx-2" data-bs-dismiss="modal">Close</button>
              <button type="button" disabled={desc.place.length < 3 || desc.description.length < 3 || desc.phonenumber.length < 3 || desc.price.length < 10} className="btn btn-success mx-2" onClick={handleAdd}>Post</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddDesc


const Button = styled.div`
      button{
        width: 100px;
      background: #00bcd4;
      color: #fff;
      border: none;
      cursor: pointer;
      padding: 10px;
      font-size: 18px;
      border-radius: 10px;
      margin-left:105rem;
      margin-top:20px;
}
      `