import React from 'react';
class Contact extends React.Component
{

state={eid:'',ename:'',salary:'',msg:''}

submithtmlForm(e){
        e.preventDefault();
//  console.log(e.target)
//http://localhost:5000/newemp
//  const url = "/newemp";
       var data = new URLSearchParams();
        for(const pair of new FormData(e.target)){
          data.append(pair[0],pair[1])
        }
       fetch('/newemp',{
           method:"post",
           body:data,
       }).then(res=>res.json())
       .then(res2 => this.setState({msg:res2.msg}));
       //.then(res2 => console.log(res2));
      // console.log('DONE>2')

     }

  render()
  {
  return(
         <div>
             <h3> Employee Insert Form</h3>

               <p>{this.state.msg}</p>

             <div className="row">
             <form className="col s12" onSubmit={(e)=>this.submithtmlForm(e)}>
             <div className="row">
               <div className="input-field col s6">
                <input placeholder="Placeholder"  value={this.state.eid}
                id="first_name" type="text" className="validate"
                onChange={(e)=>this.setState({eid:e.target.value})} name="eid" />
                <label htmlFor="first_name">EID</label>
               </div>
              <div className="input-field col s6">
                <input placeholder="Placeholder"  value={this.state.ename}
                id="first_name" type="text" className="validate"
                onChange={(e)=>this.setState({ename:e.target.value})} name="ename" />
                <label htmlFor="first_name">EName</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" value={this.state.salary}
                  onChange={(e)=>this.setState({salary:e.target.value})} name="salary" />
                <label htmlFor="last_name">Salary</label>
              </div>
            </div>

            <div className="row">
                <input  type="submit" value="Save" className="waves-effect waves-light btn" />
            </div>

          </form>
        </div>
 </div>

  )
}
}



export default Contact;
