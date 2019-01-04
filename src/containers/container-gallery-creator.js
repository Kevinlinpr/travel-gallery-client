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
import {bindActionCreators} from "redux";
import {getGalleryList} from "../actions";
import {connect} from "react-redux";

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
        agree: false,
        galleryName: ''
    };

    handleClickOpen = () => {
        this.setState({ open: true ,agree:false});
    };
    handleClickAgree = () => {
        this.setState({ agree: true });
    };
    handleClose = () => {
        this.setState({
            galleryName: ''
        });
        this.setState({ open: false });
    };
    handleCancel = () => {
        this.setState({
            galleryName: ''
        });
        this.setState({ agree:false});
    };
    handleConfirm = () => {
        fetch('http://149.28.202.19:3750/create',{
            method:'POST',
            body:JSON.stringify({
                name: this.state.galleryName
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => {return res.json()})
            .then(res => {
                fetch('http://149.28.202.19:3750/list/gallery')
                    .then(res => {return res.json()})
                    .then(res => {
                        this.props.getGalleryList(res);
                    });
            });
        this.setState({
            galleryName: ''
        });
        this.setState({ open: false});
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                {
                    this.state.open?
                        <div></div>:
                        <Button variant="outlined" color="primary" className={classes.button} onClick={this.handleClickOpen}
                                disableTouchRipple={true}>
                            创建新路线
                        </Button>
                }
                {
                    this.state.agree?
                        <div>
                            <Dialog
                                open={this.state.open}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={this.handleClose}
                                aria-labelledby="alert-dialog-slide-title"
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogTitle id="alert-dialog-slide-title">
                                    请填写路线名称
                                </DialogTitle>
                                <DialogContent>
                                    <TextField
                                        id="outlined-dense"
                                        label="路线名称"
                                        className={classes.dense}
                                        margin="dense"
                                        variant="outlined"
                                        value={this.state.galleryName}
                                        onChange={e=>this.setState({
                                            galleryName: e.target.value
                                        })}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleCancel} color="primary" disableTouchRipple={true}>
                                        上一步
                                    </Button>
                                    <Button onClick={this.handleConfirm} color="primary" disableTouchRipple={true}
                                            disabled={this.state.galleryName===''}>
                                        立即创建
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>:
                        <div>
                            <Dialog
                                open={this.state.open}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={this.handleClose}
                                aria-labelledby="alert-dialog-slide-title"
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogTitle id="alert-dialog-slide-title">
                                    是否创建新路线？
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-slide-description">
                                        创建新路线，上传照片自动生成画廊并分享您的旅游风景！
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleClose} color="primary" disableTouchRipple={true}>
                                        否
                                    </Button>
                                    <Button onClick={this.handleClickAgree} color="primary" disableTouchRipple={true}>
                                        是
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                }
            </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({getGalleryList: getGalleryList},dispatch);
}
export default connect(null,matchDispatchToProps)(withStyles(styles)(GalleryCreator));