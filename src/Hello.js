import React from 'react';
class Hello extends React.Component {

    render(){
        return (
            <div>
                <p>Hello {this.props.name}!</p>
                <p>You are now entering {this.props.zone} zone. Have fun!</p>
            </div>
        );
    }
}
export default Hello;