import React,{Component} from 'react';

class user extends Component{
    render(){
        return(
            <div>
                <div>
                User Data
                <button onClick={this.props.fetchUserData}>
                    User Data</button>
                </div>
                <div>
                    <h2> List </h2>
                    <ul>
                    {this.props.userList.map((item, index) => {
                        return<li key={'repo'+index}>{item.name}</li>
                    })}
                    </ul>
                    </div>
            
            </div>
        )
    }
}