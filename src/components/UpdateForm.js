import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { UpdateApiAction } from '../redux/action/actions';
import { useParams } from 'react-router-dom';
import GetDetailsHooks from '../hooks/getDetailsHook';
const UpdateForm = () => {

       const {id} =useParams();
       console.log("params id is::-----",id);


    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [phone,setPhone]=useState();
    const [country,setCountry]=useState();

   
       const dispatch=useDispatch();
       const [detailsById]=GetDetailsHooks(id);
      console.log("details by id each___",detailsById.data);
    
      useEffect(()=>{
        const data=()=>{
            if(detailsById.data){
                setName(detailsById.data[0].name);
                setEmail(detailsById.data[0].email);
                setPhone(detailsById.data[0].phone);
                setCountry(detailsById.data[0].country);
            }
        };
        data();
      },[detailsById.data]);


 const nameHandler=(e)=>{
    setName(e.target.value);
 }
 const emailHandler=(e)=>{
    setEmail(e.target.value);
 }
 const phoneHandler=(e)=>{
    setPhone(e.target.value);
 }
 const countryHandler=(e)=>{
    setCountry(e.target.value);
 }

 const clickHandler=(e)=>{
    e.preventDefault();

    const finalData={
         name:name,
         email:email,
         phone:phone,
         country:country
    };
    dispatch(UpdateApiAction(finalData,id));
 }

  return (
    <div>
      <form className='form-card'>
        <h3 className='heading'>Insert The User</h3>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              defaultValue={name}
              onChange={(e)=>{nameHandler(e)}}
              placeholder="Name"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              defaultValue={email}
              onChange={(e)=>{emailHandler(e)}}
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputPhone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="inputPhone"
              defaultValue={phone}
              onChange={(e)=>{phoneHandler(e)}}
              placeholder="Phone"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCountry">Country</label>
            <input
              type="text"
              className="form-control"
              id="inputCountry"
              defaultValue={country}
              onChange={(e)=>{countryHandler(e)}}
              placeholder="Country"
            />
          </div>
        </div>
        <button type="submit" onClick={(e)=>{clickHandler(e)}} className="btn btn-primary">
          Update Data
        </button>
      </form>
    </div>
  );
}

export default UpdateForm;
  