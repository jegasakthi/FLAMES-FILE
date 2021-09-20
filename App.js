import "./App.css";
import React, {Component} from 'react'



 class App extends Component{
   constructor(){
     super();
     this.state = {
     };
     this.onInputchange = this.onInputchange.bind(this);
     this.onSubmitForm = this.onSubmitForm.bind(this);
   }

   onInputchange(e){
     this.setState({
       [e.target.name]: e.target.value
     });
   }

   onSubmitForm(event){
     event.preventDefault();
     console.log(this.state)
   }
  
   
  

    
   render(){
    
    return(
      
      <div className ="App">
        <p> WOLRD</p>
       <form>
      
      
      <h1> GAME OF LOVE </h1>
      <label>
         Your Name :
        <br></br>
      <input
       name = "yname"
       type ="text"
       placeholder ="Your Name"
       value ={this.state.yname}
       onChange = {this.onInputchange}
        />
        </label>
      <br></br>

      <label>
        Partner Name :
      <br></br>
      <input 
      name = "pname"
      type ="text" 
      placeholder = "Partner Name" 
      value = {this.state.pname}
      onChange = {this.onInputchange}

      />
       </label>
      <br></br>
      

      <button onClick={() => this.onSubmitForm}> FLAMES </button>
      
      </form>
      
      </div>
    )
  }
}




  

export default App;