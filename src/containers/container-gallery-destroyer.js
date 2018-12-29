import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {bindActionCreators} from "redux";
import {openDestroyer, closeDestroyer, getGalleryList} from "../actions";
import {connect} from "react-redux";

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class GalleryDestroyer extends React.Component {
    deleteGalleryListItem = (info) => {
        fetch('http://127.0.0.1:3750/delete',{
            method:'POST',
            body:JSON.stringify(info),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => {return res.json()})
            .then(res => {
                fetch('http://127.0.0.1:3750/list/gallery')
                    .then(res => {return res.json()})
                    .then(res => {
                        this.props.getGalleryList(res);
                    });
            });
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
                                {"是否删除此线路?"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    路线名：{this.props.galleryDestroyActive.deleteObj.name}<br/>
                                    创建时间：{this.props.galleryDestroyActive.deleteObj.time}<br/>
                                    请再次确认将要删除路线的信息，此操作不可逆！
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={()=>{this.props.closeDestroyer()}} color="primary">
                                    否
                                </Button>
                                <Button onClick={()=>{
                                    this.deleteGalleryListItem(this.props.galleryDestroyActive.deleteObj);
                                    this.props.closeDestroyer();
                                }} color="primary">
                                    是
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
    return bindActionCreators({openDestroyer: openDestroyer,closeDestroyer:closeDestroyer,getGalleryList: getGalleryList},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(GalleryDestroyer);
