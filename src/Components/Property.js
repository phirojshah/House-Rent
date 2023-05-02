import React, { useContext,useEffect } from 'react'
import roomcontext from '../Context/roomdesc/roomcontext'
import PropertyItem from './PropertyItem';
const Property = () => {
    const context = useContext(roomcontext);
    const { descs,getallDesc } = context;
    useEffect(()=>{
        getallDesc();
        //eslint-disable-next-line
      },[])
    return (
        <div className="container my-3">
            <h1 className="container"><b>Rooms Near KU Area</b></h1>
            {descs.map((desc) => {
                return <PropertyItem  descs={desc} />
            })}
        </div>

    )
}

export default Property
