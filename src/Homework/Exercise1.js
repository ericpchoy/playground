//import logo from './logo.svg';
import React from "react"
import '../App.css'

function Exercise1() {


  return (
     <form>
        <label for="fname">First name:</label> 
        <br></br>
        <input type="text" id="fname" name="fname" maxLength='128'></input>
        <br></br>
        <label for="lname">Last name:</label>
        <br></br>
        <input type="text" id="lname" name="lname" maxLength='128'></input>
        <br></br>
        Gender:
        <br></br>
        <input type="radio" id="male" name="gender" value="male"></input>
        <label for="male">Male</label>
        <br></br>
        <div className='gender'>
            <input type="radio" id="female" name="gender" value="female"></input>
            <label for="female">Female</label>
            <br></br>
        </div>
        

        <label for="MDF">Master's Degree Field</label>
        <br></br>
        <select name="options" id="options" multiple>
          <option value="Computer Science">Computer Science</option>
          <option value="Electrical">Electrical</option>
          <option value="Instrumentation">Instrumentation</option>
          <option value="Civil">Civil</option>
        </select>
        <br></br>

        <label for="email">Email Address:</label> <br></br>
        <input type="email" id="email" name="email"></input>
        <br></br>

        <label for="myfile">Select a file:</label> <br></br>
        <input type="file" id="myfile" name="myfile" multiple></input> <br></br>

        <label for="date">Graduation Date:</label> <br></br>
        <input type="date" id="date" name="date" value="today" min= "today" max="2121-2-17"></input> <br></br>

        <br></br>
        <input type="submit" value="Submit"></input>
    </form> 
  )
}

export default Exercise1;
