import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { authContext, firebaseContext } from '../../store/firebaseContext';
import { useHistory } from 'react-router-dom';

const Create = () => {
  
  const {Firebase} = useContext(firebaseContext)
  const {user} = useContext(authContext)
  const [name,setName] =useState('')
  const [category,setCategory] = useState('')
  const [price,setPrice] = useState('')
  const [image,setImage] =useState(null)
  const date = new Date()
  const history = useHistory()
  const handleSubmit =(e)=>{
    e.preventDefault();
    if (image == null)
    {
      return;
    }
    
     Firebase.storage().ref(`/Image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url)
        Firebase.firestore().collection('products').add({
          name:name,
          category:category,
          price:price,
          url:url,
          userId : user.uid,
          createdAt : date.toDateString()
        }).then(()=>{
          history.push("/")
        }).catch((error)=>{
          console.log(error)
        })
      })
     })
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
              value={name}
              onChange={(e)=>setName(e.target.value)}
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" value={price} onChange={(e)=>setPrice(e.target.value)} type="number" id="fname" name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
          
            <br />
            <input 
            onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button className="uploadBtn" onClick={handleSubmit}>upload and Submit</button>

          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
