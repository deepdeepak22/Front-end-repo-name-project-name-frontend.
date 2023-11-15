import React from "react";
import PDF from "./pdf";
import { useState } from "react";

function Billing() {
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [contact , setContact] = useState("")
  const [quantity , setQuantity] = useState("")
  const [address , setAddress] = useState("")
  const [totalprice , setTotalprice] = useState("")
  const [zip , setZip] = useState("")
  return (
    <div>
      <h1>Let's Create Bill</h1>
      <div class="row">
        <div class="col">
          <input
           onChange={(event)=>setName(event.target.value)}
            type="text"
            class="form-control"
            placeholder="Product name"
            
            aria-label="Product Name"
            value={name}
          ></input>
        </div>
      </div>
      <div>
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label"></label>
            <input
            onChange={(event)=>setEmail(event.target.value)}
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Customer Email"
              value={email}
            ></input>
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label"></label>
            <input
            onChange={(event)=>setContact(event.target.value)}
              type="text"
              class="form-control"
              id="inputText"
              placeholder=" customer Phone Number"
              value={contact}
            ></input>
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label"></label>
            <input
            onChange={(event)=>setAddress(event.target.value)}
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Address"
              value={address}
            ></input>
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label"></label>
            <input
            onChange={(event)=>setQuantity(event.target.value)}
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Quantity"
              value={quantity}
            ></input>
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label"></label>
            <input
            onChange={(event)=>setTotalprice(event.target.value)}
              type="text"
              class="form-control"
              id="inputCity"
              placeholder="Total Price"
              value={totalprice}
            ></input>
          </div>

          <div class="col-md-2">
            <label for="inputZip" class="form-label"></label>
            <input
            onChange={(event)=>setZip(event.target.value)}
              type="text"
              class="form-control"
              id="inputZip"
              placeholder="Zip"
              value={zip}
            ></input>
          </div>
          <div class="col-12"></div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Generate PDF
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Billing;
