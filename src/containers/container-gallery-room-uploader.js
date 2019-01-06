import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {bindActionCreators} from "redux";
import {openUploader,closeUploader} from "../actions";
import { FilePond} from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import {connect} from "react-redux";

function Transition(props) {
    return <Slide direction="up" {...props} />;
}
class GalleryRoomUploader extends React.Component {
    render() {
        const serverConfig = {
            process: {
                url: 'http://149.28.202.19:3750/upload',
                method: 'POST',
                withCredentials: false,
                onload: (res)=>{
                    console.log(JSON.parse(res));
                },
            }
        };
        return (
            <div>
                {
                    typeof this.props.galleryRoomUploaderActiveReducer.active === "boolean"?
                        <div>
                            <Dialog
                                open={this.props.galleryRoomUploaderActiveReducer.active}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={()=>{this.props.closeUploader()}}
                                aria-labelledby="alert-dialog-slide-title"
                                aria-describedby="alert-dialog-slide-description"
                                maxWidth={"xl"}
                            >
                                <DialogTitle id="alert-dialog-slide-title">
                                    {"上传照片"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-slide-description">
                                        点击或拖拽上传照片自动生成画廊！
                                    </DialogContentText>
                                    <FilePond ref={ref => {
                                        this.pond = ref;
                                    }}
                                              allowMultiple={true}
                                              maxFiles={9}
                                              server={serverConfig}
                                    >

                                    </FilePond>
                                </DialogContent>
                            </Dialog>
                        </div>:<div></div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        galleryRoomUploaderActiveReducer: state.galleryRoomUploaderActiveReducer
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({openUploader: openUploader,closeUploader:closeUploader},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(GalleryRoomUploader);