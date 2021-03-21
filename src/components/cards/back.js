import React from "react";

class Back extends React.Component {
    render() {
        return (
               <div className={'back'}>
                   <div className="card">
                       <h1 className={'text-primary'}>{this.props.iconName}</h1>
                       <span className={`bi ${this.props.iconClass} icon`}></span>
                   </div>
               </div>


        );
    }
};

export default Back;