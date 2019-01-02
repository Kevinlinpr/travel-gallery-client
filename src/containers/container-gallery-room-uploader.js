import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {bindActionCreators} from "redux";
import {openUploader,closeUploader} from "../actions";
// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond';
// Import FilePond styles
import 'filepond/dist/filepond.min.css';
// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
// Register the plugins
//registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core";

function Transition(props) {
    return <Slide direction="up" {...props} />;
}
class GalleryRoomUploader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // Set initial files
            files: ['index.html']
        };
    }
    handleInit() {
        console.log('FilePond instance has initialised', this.pond);
    }
    render() {
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
                                    <FilePond ref={ref => this.pond = ref}
                                              allowMultiple={true}
                                              maxFiles={9}
                                              server={'http://149.28.202.19:3750/upload'}
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