import React from "react";
import "../REquestQutoe/request.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Button } from "@mui/material";
const RequestQuote = (props) => {
  const { productid } = useParams();
  const navigate = useNavigate();
  const handlecancel = () => {
    navigate(-1);
  };
  return (
    <>
      <Layout>
        <div className="container ">
          <div className="icon">
            {/* <AiOutlineCloseCircle size={35} onClick={handlecancel} color="#cc7953" />  */}
          </div>
          <h1 className="head">REQUEST A QUOTE</h1>
          <p className="para">
            You should expect a quick response from us, but if you need an
            immediate response, 
            Call us at 832-501-0450 to speak with one of our sales
            representative right away.  <br/> <br/>
            <strong>Note:</strong> {" "}
            If you call, please reference the{" "}
            <strong>Item No</strong> below for fast service.
          </p>
          <form action="" className="form" method="post">
            <label htmlFor="item">
              Item No
            </label>
            <input type="text" name="" id="item" value={productid} style={{borderRadius: '6px'}} />
            <div className="flex">
              <div className="space-betw">
                <label htmlFor="Name">
                Name
                                </label>
                <input type="text" name="" id="Name"  style={{borderRadius: '6px'}}/>
              </div>
              <div className="space-betw">
                <label htmlFor="Lname">
                Last Name
                </label>
                <input type="text" name="" id="Lname" style={{borderRadius: '6px'}} />
              </div>
            </div>

            <label htmlFor="Email">
            Email
            </label>
            <input type="text" name="" id="Email" style={{borderRadius: '6px'}} />
            <label htmlFor="Phone">
            Phone
            </label>
            <input type="text" name="" id="Phone"  style={{borderRadius: '6px'}}/>
            <label htmlFor="Quantity">
            Quantity
            </label>
            <input type="text" name="" id="Quantity"  style={{borderRadius: '6px'}}/>
            <label htmlFor="tprice">
            Target Price
            </label>
            <input type="text" name="" id="tprice" style={{borderRadius: '6px'}}/>
            <label htmlFor="comments">
            Comments
            </label>
            <textarea name="" id="comments" cols="30" rows="10" style={{borderRadius: '6px'}} />
            
        <div className="btnss" style={{display:'flex', justifyContent: 'center', alignItems: 'center', margin: '20px', marginLeft:'30rem', gap:' 20px'}}>
       
        <Button className="canbtn" onClick={handlecancel} style={{color: '#fff'}}>Cancel</Button>
            <Button className="subbtn" type="submit" style={{color: '#fff'}}>Submit</Button>
        </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default RequestQuote;
