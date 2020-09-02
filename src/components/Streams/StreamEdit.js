import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {fetchStream, editStream} from "../../actions";
import StreamForm from "./StreamForm";
import Skeleton from "@material-ui/lab/Skeleton";
import {FormLabel} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id,formValues);
    }

    render(){
        const classes={
            form:{
                margin:'10px',
            }
        };
        if(this.props.stream) {
            return (<Container>
                <StreamForm initialValues={_.pick(this.props.stream,'title','description')} title={"Edit Stream"} onSubmit={this.onSubmit}/>
            </Container>);
        }
        else{
            return (
                <Container fixed>
                    <FormControl style={classes.form}>
                        <FormLabel> Edit New Stream</FormLabel>
                        <Skeleton variant="rect" component={"h2"} width={210} height={50} />
                        <Skeleton variant="rect" component={"h2"} width={210} height={50} />
                        <Button color={"primary"} type="submit" variant={"contained"}  disabled>Submit</Button>
                    </FormControl>
                </Container>
            );
        }
    }

}

const mapStateToProps = (state,ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit);