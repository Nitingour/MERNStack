import React from 'react';
class About extends React.Component
{
state={
 empdata:[{_id:1,eid:'loading',ename:'loading',salary:'loading'}]
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
  console.log('<<<>>>'+item._id);
  return <tr><td>{item.eid}</td><td>{item.ename}</td><td>{item.salary}</td></tr>
});

  return(
               <div className="container">
             <h3> View All Employee </h3>
            <table >
            <tr><th>EID</th><th>Ename</th><th>Salary</th></tr>
         {data}
            </table>
           </div>
  )
}
}
export default About;
