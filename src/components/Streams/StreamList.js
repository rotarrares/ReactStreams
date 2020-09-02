import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from "../../actions";
import List from "@material-ui/core/List";
import VideocamIcon from '@material-ui/icons/Videocam';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import StreamDelete from "./StreamDelete";

class StreamList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {modalOpen:false};
    }

    componentDidMount() {

        this.props.fetchStreams();

    }

    renderEdit= (stream) => {

        if(stream.userId===this.props.currentUserId){
            return <ListItemSecondaryAction>
                <Button size={"small"} style={{marginRight:"20px"}} variant={"contained"} component={Link} to={`/streams/edit/${stream.id}`}>Edit</Button>
                <Button size={"small"} onClick={() => {
                    this.setState({modalOpen:true},()=>{console.log(this.state.modalOpen);});
                }}  color="secondary" variant={"contained"}>Delete</Button>
               <StreamDelete
                    streamId = {stream.id}
                    handleClose={()=>{
                        this.setState({modalOpen:false},()=>{console.log(this.state.modalOpen);});
                    }}
                    open={this.state.modalOpen}/>
            </ListItemSecondaryAction>
        }
        else{
            return null;
        }
    }

    renderList(){
        return this.props.streams.map(stream=>{
            return (
                <ListItem key={stream.id}>
                    <ListItemIcon><VideocamIcon/></ListItemIcon>
                    <ListItemText>
                        <Typography variant={"h6"}>
                            {stream.title}
                        </Typography>
                        <Typography variant={"subtitle1"}>
                            {stream.description}
                        </Typography>
                    </ListItemText>
                    {this.renderEdit(stream)}
                </ListItem>
            )
        })
    }

    renderCreateStream= ()=>{
        if(this.props.isSignedIn){
            return <Grid container justify={"flex-end"} >
                <Grid style={{margin:'40px'}} item>
                    <Button color={"primary"} size="large" variant={"contained"}  component={Link} to={'/streams/new'}>Create Stream</Button>
                </Grid>
            </Grid>
        }
        else return null;
    }

    render(){

        return <Container fixed ><List>{this.renderList()}</List>
            {this.renderCreateStream()}
        </Container>
    }
}

const mapStateToProps = (state) => {
    return {streams: Object.values(state.streams),
    currentUserId:state.auth.userId,
    isSignedIn:state.auth.isSignedIn}
}

export default connect(
    mapStateToProps,
    {fetchStreams}
    )(StreamList);