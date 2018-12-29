import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {bindActionCreators} from "redux";
import {openDestroyer, closeDestroyer} from "../actions";
import {connect} from "react-redux";

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class GalleryDestroyer extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                {
                    typeof this.props.galleryDestroyActive.active === "boolean"?
                    <div>
                        <Dialog
                            open={this.props.galleryDestroyActive.active}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={()=>{this.props.closeDestroyer()}}
                            aria-labelledby="alert-dialog-slide-title"
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle id="alert-dialog-slide-title">
                                {"Use Google's location service?"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    Let Google help apps determine location. This means sending anonymous location data to
                                    Google, even when no apps are running.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={()=>{this.props.closeDestroyer()}} color="primary">
                                    Disagree
                                </Button>
                                <Button onClick={()=>{this.props.closeDestroyer()}} color="primary">
                                    Agree
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>:<div></div>
                }
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{
        galleryDestroyActive: state.galleryDestroyActive
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({openDestroyer: openDestroyer,closeDestroyer:closeDestroyer},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(GalleryDestroyer);
