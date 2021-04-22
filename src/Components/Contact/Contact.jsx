import React from 'react'
import Styles from './Contact.module.css'
import { MdEmail } from "react-icons/md";
import {AiFillLinkedin} from "react-icons/ai";

const Contact = () => {
    return (
        <div>
{/*             
            <form  className = {Styles.form}>
            <div className = {Styles.form_heading}>Get in touch</div>
                <div className = {Styles.eachInputField}>
                    <label className = {Styles.label}>Name</label>
                    <br/>
                    <input className = {Styles.input}  type = "text" />
                </div>
                <div className = {Styles.eachInputField}>
                    <label className = {Styles.label}>Email</label>
                    <br/>
                    <input className = {Styles.input} type = "text" />
                </div>
                <div className = {Styles.eachInputField}>
                    <label className = {Styles.label}>Message</label>
                    <br/>
                    <textarea className = {Styles.textarea} type = "text" rows = "7" cols = "50" />
                </div>
                <input className = {Styles.submitButton} type = "submit" value = "Send"/>
            </form> */}
            <h3>Send me an email</h3>  
            <div className = {Styles.contact_div}>
                <MdEmail className = {Styles.icons}/>
                <h3 style = {{marginLeft : "20px"}}>abhiarchana14@gmail.com</h3>
            </div>
            <div className = {Styles.contact_div}>
                <div className = {Styles.line}></div>
                <h3>OR</h3>
                <div className = {Styles.line}></div>
            </div>
             
            <div className = {Styles.contact_div}>
            <h3>Send me Hi </h3>
            <img src = "https://c.tenor.com/SNL9_xhZl9oAAAAj/waving-hand-joypixels.gif" alt = "" height = "40px" style = {{marginLeft : "10px" , marginRight : "10px"}}/> 
            <h3> on</h3>
            <a className = {Styles.contact_icons} href = "https://www.linkedin.com/in/singh-archana" target = "blank"><AiFillLinkedin/></a>
            </div>
        </div>
    )
}

export default Contact