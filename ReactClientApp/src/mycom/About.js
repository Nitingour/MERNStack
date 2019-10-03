import React from 'react';
class About extends React.Component
{
state={
        empdata:[{_id:1,eid:'loading',ename:'loading',salary:'loading'}]
      }

deleteEmp(e,empid)
{
  e.preventDefault();
  fetch('/delemp?eid='+empid)
  .then(res=>res.json())
  .then(res1=>{
    console.log(res1);
    const newEmpdata=this.state.empdata.filter(item=>{
      return  item.eid !== empid;
    });
    this.setState({
                empdata: newEmpdata
          });
})
}

componentDidMount(){
fetch("/viewallemp")
.then(res=>res.json()).then(res1=>
  {
   console.log(res1.data);
   this.setState({
//empdata: this.state.empdata.concat(res1.data)
//empdata: [...this.state.empdata,...res1.data]
  empdata: res1.data
});
  });
}

  render()
  {
const data=this.state.empdata.map(item=>{
  return <tr><td>{item.eid}</td><td>{item.ename}</td><td>{item.salary}</td>
  <td><a href="" onClick={(e)=>this.deleteEmp(e,item.eid)}>Delete</a></td></tr>
  });
  return(
           <div className="container">
             <h3> View All Employee </h3>
            <table >
              <tr><th>EID</th><th>Ename</th><th>Salary</th><th></th></tr>
                {data}
            </table>
           </div>
  )
}
}
export default About;
