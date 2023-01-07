import React, { Component } from 'react'
import {CountryDropdown,RegionDropdown} from 'react-country-region-selector';
import axios from "axios";
import User from './User';
// import { useNavigate } from 'react-router-dom';
export default class Register extends Component {
    constructor (props) {
        super(props);
        this.state = {name:'',phone:'',email:'',password:'',desc:'',image:'', country: '', region: '',register:false};
        this.selectName = this.selectName.bind(this);
        this.selectPhone = this.selectPhone.bind(this);
        this.selectEmail = this.selectEmail.bind(this);
        this.selectPassword = this.selectPassword.bind(this);
        this.selectDesc = this.selectDesc.bind(this);
        this.selectImage = this.selectImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    //   navigate = useNavigate();
      selectName =((val)=> {
        this.setState({  name: val.target.value});
        console.log(val.target.value);
      });
      selectPhone (val) {
        this.setState({ phone: val.target.value});
      }
      selectEmail (val) {
        this.setState({email: val.target.value });
      }
      selectPassword (val) {
        this.setState({ password: val.target.value});
      }
      selectDesc (val) {
        this.setState({ desc: val.target.value });
      }
      selectImage (val) {
        this.setState({ image: val.target.value});
      }
      selectCountry (val) {
        this.setState({ country: val });
      }
    
      selectRegion (val) {
        this.setState({ region: val });
      }

 
      handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://loginauth0.onrender.com/register",
            {name:this.state.name,email:this.state.email,password:this.state.password}
        )
        .then((result) => {
            this.setState({register:true});
          })
          .catch((error) => {
            error = new Error();
          });
        // this.navigate('/user') 
        // this.props.func(this.state.name,this.state.email,this.state.phone)  
      }

      
  render() {
    
    const { country, region } = this.state;
    const {name} = this.state;
    console.log("name",name);
    <User name={name}/>
    return (
        <div id='Container'>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}><br /><br /><br />
            <label htmlFor="">Name:</label>
            <input type="text" value={this.state.name}
           onChange={this.selectName} /><br/><br /><br />
            <label htmlFor="">Mobile:</label>
            <input type="number" value={this.state.phone}
           onChange={ this.selectPhone} /><br /><br /><br />
            <label htmlFor="Email id">Email:&emsp;</label>
            <input type="email" value={this.state.email}
          onChange={ this.selectEmail}/><br/><br /><br />
            <label htmlFor="">Password:</label>
            <input type="password" value={this.state.password}
           onChange={this.selectPassword}/><br /><br /><br />
            <label htmlFor="">Country</label>
            <CountryDropdown
          value={country}
          onChange={(val) => this.selectCountry(val)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)} />
            <br /><br /><br />
            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="30" rows="10" value={this.state.desc}
           onChange={this.selectDesc}></textarea><br /><br /><br />
            <label htmlFor="">Image</label>
            <input type="file" value={this.state.image}
           onChange={ this.selectImage}/><br /><br />
            <button  onClick={(e) => this.handleSubmit(e)}>Sumbit</button>
            {this.state.register ? (
          <p className="text-success">You Are Registered Successfully</p>
        //   <User name={this.state.name}/>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}
        </form>
    </div>
    )
  }
}
