import React from "react";
class UserClass extends React.Component
{
    constructor(props){
        super(props); //it gives u to access this keyword
            this.state={
                count:0,
                userInfo:{
                    login:"abc",
                    location:"surat",
                },
            }      
    }
    async componentDidMount()
    {
        const data= await fetch("https://api.github.com/users/anjalibani17");
        const json=await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        })
        console.log("mount")
    }
    componentDidUpdate()
    {
        console.log("comp updated");
    }
    componentWillUnmount()
    {
        console.log("unmount");
    }
    render()
    { 
        return(<>
    
            {/* <p>this is class made by {this.props.name}</p> */}
          
            <p>this is class made by {this.state.userInfo.login}</p>
            <p>location:{this.state.userInfo.location}</p>
            <p>count:{this.state.count}</p>
            <button onClick={()=>{this.setState({
                count:this.state.count + 1
            })}}>click</button>
        </>)
    }

}
export default UserClass;