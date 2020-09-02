import React from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from "./StreamForm";
import Container from "@material-ui/core/Container";

class StreamCreate extends React.Component{


    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render(){

        return(
            <Container fixed>
                <StreamForm initialValues={{title:"",description:""}} title={"Create Stream"} onSubmit={this.onSubmit}/>
            </Container>
        );
    }
}



export default connect(null,{createStream}) (StreamCreate);