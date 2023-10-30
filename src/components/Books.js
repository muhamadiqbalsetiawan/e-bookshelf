import React from "react";
class Books extends React.Component{
    constructor(props) {
        super(props);
        this.state={isOpen:false}
    }

    handleClick(){
        this.setState({isOpen:!this.state.isOpen});
    }

    render(){
        let modal='';
        if(this.state.isOpen){
            modal=(
                <div className="modal">
                    <div className="modal-inner">
                        <div className="modal-header"></div>
                        <div className="modal-intro">
                            <h2>{this.props.name}</h2>
                            <p>{this.props.introduction}</p>
                        </div>
                        <button onClick={()=>{this.handleClick()}} className='modal-close-btn'>Tutup</button>
                    </div>
                </div>
            );
        }

        return(
            <div onClick={()=>{this.handleClick()}} className='books-card' >
                <div className="books-items">
                    <p>{this.props.name}</p>
                    <img src={this.props.image} />
                </div>
                {modal}
            </div>
        );
    }
}

export default Books;