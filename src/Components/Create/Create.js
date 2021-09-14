import React, { Fragment,useContext,useState} from 'react';
import { useHistory } from "react-router-dom";
import './Create.css';
import Header from '../Header/Header';
import {FirebaseContext,AuthContext} from '../../store/Context'

const Create = () => {
  const history = useHistory()
  const {firebase} =useContext(FirebaseContext)
  const {user} =useContext(AuthContext)
  const [name, setname] = useState('')
  const [category, setcategory] = useState('')
  const [price, setprice] = useState()
  const [img, setimg] = useState()
  const date = new Date
  const handleSubmit=()=>{
      firebase.storage().ref(`/image/${img.name}`).put(img).then(({ref})=>{
        ref.getDownloadURL().then((url)=>{
          console.log(url)
          firebase.firestore().collection('products').add({
            name,
            category,
            price,
            url,
            userId:user.uid,
            createdAt: date.toDateString()
          })
        })
      })
     history.push('/')
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              id="fname"
              onChange={(e)=>setname(e.target.value)}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              id="fname"
              onChange={(e)=>setcategory(e.target.value)}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" value={price} id="fname" onChange={(e)=>setprice(e.target.value)} name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={img ? URL.createObjectURL(img):""}></img>
          <form>
            <br />
            <input onChange={(e)=>{
              setimg(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
