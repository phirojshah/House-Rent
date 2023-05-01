import React, { useState } from 'react'
import Roomcontext from './roomcontext'
const RoomState = (props) => {
    const host = "http://localhost:5000";
    const descInitial = []
    const [descs, setDescs] = useState(descInitial)

    //Get Descriptions of the user
    const getDesc = async () => {
        //API Call
        const response = await fetch(`${host}/api/roomdesc/fetchdesc`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0ZTc4YzRjZmNkNTI1ZmE4ZTZkYzEzIn0sImlhdCI6MTY4Mjg3Mzc1NH0.mQMfhBwmVrW-xDP4t6T8bytlV7iX2lYWdz9DILUGLY4",
            }
        });
        const json = await response.json();
        console.log(json);
        setDescs(json);
    }
    //Get all Descriptions 
    const getallDesc = async () => {
        //API Call
        const response = await fetch(`${host}/api/roomdesc/fetchalldesc`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const dd = await response.json();
        console.log(dd);
        setDescs(dd);
    }
    //Add Description
    const addDesc = async (place, description, price, phonenumber) => {
        //API Call
        const response = await fetch(`${host}/api/roomdesc/adddesc`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0ZTc4YzRjZmNkNTI1ZmE4ZTZkYzEzIn0sImlhdCI6MTY4Mjg3Mzc1NH0.mQMfhBwmVrW-xDP4t6T8bytlV7iX2lYWdz9DILUGLY4",
            },
            body: JSON.stringify({ place, description, price, phonenumber }),
        });
        const desc = await response.json();
        setDescs(descs.concat(desc));
    }
    
    //Delete Description
    const deleteDesc = async (id) => {
        //API Call
        const response = await fetch(`${host}/api/roomdesc/deletedesc/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0ZTc4YzRjZmNkNTI1ZmE4ZTZkYzEzIn0sImlhdCI6MTY4Mjg3Mzc1NH0.mQMfhBwmVrW-xDP4t6T8bytlV7iX2lYWdz9DILUGLY4",
            },
        });
        const json = await response.json();
        console.log(json);
        console.log("delete");
        const newdesc = descs.filter((descs) => { return descs._id !== id });
        setDescs(newdesc);
    }

    //Edit Description
    const editDesc = async (id, place, description, price, phonenumber) => {
        //API Call
        const response = await fetch(`${host}/api/roomdesc/updatedesc/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0ZTc4YzRjZmNkNTI1ZmE4ZTZkYzEzIn0sImlhdCI6MTY4Mjg3Mzc1NH0.mQMfhBwmVrW-xDP4t6T8bytlV7iX2lYWdz9DILUGLY4",
            },
            body: JSON.stringify({ place, description, price, phonenumber }),
        });
        const json = await response.json();
        console.log(json);

        let newDescs = JSON.parse(JSON.stringify(descs));
        //Logic to edit in client
        for (let index = 0; index < newDescs.length; index++) {
            const element = newDescs[index];
            if (element._id === id) {
                newDescs[index].place = place;
                newDescs[index].price = phonenumber;
                newDescs[index].phonenumber = price;
                newDescs[index].description = description;
                break;
            }
        }
        setDescs(newDescs);

    }


    return (
        <Roomcontext.Provider value={{ descs, setDescs, addDesc, deleteDesc, editDesc, getDesc, getallDesc }}>
            {props.children}
        </Roomcontext.Provider>
    )

}
export default RoomState;