import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import {deleteStream} from "../../actions";
import {connect} from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const StreamDelete = (props) => {


    const handleAgree = () => {
        props.handleClose();
        props.deleteStream(props.streamId);
    }

    const handleDisagree = () => {
        props.handleClose();
    }

    return (<Dialog
        open={props.open}
        TransitionComponent={Transition}

        onClose={props.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
    >
        <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                Are you sure you wanna delete this stream?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleDisagree} color="inherit">
                No
            </Button>
            <Button onClick={handleAgree} color="secondary">
                Yes
            </Button>
        </DialogActions>
    </Dialog>)
}
export default connect(null,{deleteStream})(StreamDelete);