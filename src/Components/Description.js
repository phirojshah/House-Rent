import React, { useContext, useEffect, useRef, useState } from 'react'
import roomcontext from '../Context/roomdesc/roomcontext'
import DescItem from './DescItem';

const Description = () => {
  const context = useContext(roomcontext);
  const { descs, getDesc, editDesc } = context;
  const ref = useRef(null);
  const refclose = useRef(null);
  useEffect(() => {
    getDesc();
    //eslint-disable-next-line
  }, [])
  const [desc, setDesc] = useState({ id: "", eplace: "", ephonenumber: "", edescription: "", eprice: "" })
  const updateDesc = (currentDesc) => {
    ref.current.click();
    setDesc({ id: currentDesc._id, eplace: currentDesc.place, edescription: currentDesc.description, eprice: currentDesc.price, ephonenumber: currentDesc.phonenumber });
  }
  const handleClick = (e) => {
    refclose.current.click();
    e.preventDefault();
    editDesc(desc.id, desc.eplace, desc.edescription, desc.eprice, desc.ephonenumber)
  }
  const onChange = (e) => {
    setDesc({ ...desc, [e.target.id]: e.target.value })
  }
  return (
    <>
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit the Room Description</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="/stats" encType="multipart/form-data" method="post">
                <div className="form-group mb-3 mx-1">
                  <div className="input-group mb-3">
                    <input type="file" className="form-control" id="eimage" required value={desc.eimages} onChange={onChange} />
                    <label className="input-group-text" htmlFor="inputGroupFile02" >Upload</label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message-text" className="col-form-label my-1"  >Place:</label>
                    <input type="text" className="form-control" placeholder="Place" aria-label="place" aria-describedby="basic-addon1" id='eplace' value={desc.eplace} required onChange={onChange} minLength={3} />
                    <label htmlFor="message-text" className="col-form-label my-1">Description:</label>
                    <textarea className="form-control" id="edescription" placeholder="Description" required value={desc.edescription} onChange={onChange} minLength={3} ></textarea>
                    <label htmlFor="message-text" className="col-form-label my-1">Price:</label>
                    <input type="text" className="form-control" id='eprice' placeholder="Price" aria-label="number" aria-describedby="basic-addon1" value={desc.eprice} required onChange={onChange} minLength={3} />
                    <label htmlFor="message-text" className="col-form-label my-1">Phone Number:</label>
                    <input type="number" className="form-control" id='ephonenumber' placeholder="Phone Number" aria-label="number" aria-describedby="basic-addon1" required value={desc.ephonenumber} onChange={onChange} minLength={10} />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" ref={refclose} data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success" onClick={handleClick} >Update Description</button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="container"><b>Your Posts</b></h1>
      <div className="container my-3">
        {descs.length === 0 && "You haven't Posted Yet"}
        {descs.map((desc) => {
          return <DescItem key={descs._id} updateDesc={updateDesc} descs={desc} />
        })}
      </div>
    </>
  )
}

export default Description
