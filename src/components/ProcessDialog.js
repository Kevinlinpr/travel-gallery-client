import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Process from './Process';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class ProcessDialog extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        open: false
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
                {/*<Button onClick={this.handleClickOpen}>Slide in alert dialog</Button>*/}
                <Dialog
                    open={this.state.open||this.props.loading}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogContent>
                        <Process/>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default ProcessDialog;