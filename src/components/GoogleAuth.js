import React from 'react';
import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {connect} from 'react-redux';
import {signIn,signOut} from "../actions";

class GoogleAuth extends React.Component{
    componentDidMount() {
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init(
                {clientId:"442708971297-rpf7a98q15rbrshk3lgj0hb7kg7uudcm.apps.googleusercontent.com",
                scope:'email'}).then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });

    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());

        }
        else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    };

    onLogOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null
        } else if(this.props.isSignedIn){
            return <Button variant={"contained"} onClick={this.onLogOutClick} ><img style={{width:'20px',marginRight:'10px'}} alt="Google" src={"https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/2659939281579738432-512.png"}/>
            Sign Out</Button>
        } else{return <Button variant={"contained"} onClick={this.onSignInClick}  ><img style={{width:'20px',marginRight:'5px'}} alt="Google" src={"https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/2659939281579738432-512.png"}/>
        <Typography variant={"button"}>Sign In</Typography>
        </Button>}
    }


    render(){

        return <div >{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);