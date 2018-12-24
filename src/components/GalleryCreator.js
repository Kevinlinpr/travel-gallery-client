import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import {withStyles} from "@material-ui/core";

function Transition(props) {
    return <Slide direction="up" {...props} />;
}
const styles = theme => ({
    button: {
        width: '100%',
        marginTop: theme.spacing.unit,
    },
    dense: {
        marginTop: 8,
    },
});
class GalleryCreator extends React.Component {
    state = {
        open: false,
        agree: false
    };

    handleClickOpen = () => {
        this.setState({ open: true ,agree:false});
    };
    handleClickAgree = () => {
        this.setState({ agree: true });
    };
    handleClose = () => {
        this.setState({ open: false });
    };
    handleCancel = () => {
        this.setState({ agree:false});
    };
    handleConfirm = () => {
        this.setState({ open: false});
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                {
                    this.state.open?
                        <div></div>:
                        <Button variant="outlined" color="primary" className={classes.button} onClick={this.handleClickOpen}>
                            创建新路线
                        </Button>
                }
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    {
                        this.state.agree?
                            <DialogTitle id="alert-dialog-slide-title">
                                请填写路线名称
                            </DialogTitle>:
                            <DialogTitle id="alert-dialog-slide-title">
                                是否创建新路线？
                            </DialogTitle>
                    }
                    <DialogContent>
                        {
                            this.state.agree?
                                <TextField
                                    id="outlined-dense"
                                    label="路线名称"
                                    className={classes.dense}
                                    margin="dense"
                                    variant="outlined"
                                />:
                                <DialogContentText id="alert-dialog-slide-description">
                                    创建新路线，上传照片自动生成画廊并分享您的旅游风景！
                                </DialogContentText>
                        }
                    </DialogContent>
                    <DialogActions>
                        {
                            this.state.agree?
                                <div>
                                    <Button onClick={this.handleCancel} color="primary">
                                        取消
                                    </Button>
                                    <Button onClick={this.handleConfirm} color="primary">
                                        确认
                                    </Button>
                                </div>:
                                <div>
                                    <Button onClick={this.handleClose} color="primary">
                                        下次吧
                                    </Button>
                                    <Button onClick={this.handleClickAgree} color="primary">
                                        立即创建
                                    </Button>
                                </div>
                        }

                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(GalleryCreator);