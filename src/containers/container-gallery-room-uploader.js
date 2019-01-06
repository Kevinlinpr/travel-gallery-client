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
let galleryId;
class GalleryRoomUploader extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(typeof this.props.galleryOperator != 'undefined' && this.props.galleryOperator.active){
            galleryId = this.props.galleryOperator.operatorObj._id;
            console.log(galleryId);
        }
    }

    render() {
        const serverConfig = {
            process: {
                url: 'http://149.28.202.19:3750/upload',
                method: 'POST',
                withCredentials: false,
                onload: (res)=>{
                    let response = JSON.parse(res);
                    console.log(response);
                    let info = {};
                    if(navigator.geolocation){
                        navigator.geolocation.getCurrentPosition(function (position) {
                                console.log('yes');
                                let longitude = position.coords.longitude;
                                let latitude = position.coords.latitude;
                                console.log(longitude);
                                console.log(latitude);
                                // info = {
                                //     _id:galleryId,
                                //     imgUrl:response.imgUrl,
                                //     longitude:longitude,
                                //     latitude:latitude
                                // };
                                // console.log(info);
                                // fetch('http://149.28.202.19:3750/uploadImgInfo',{
                                //     method:'POST',
                                //     body:JSON.stringify(info),
                                //     headers: new Headers({
                                //         'Content-Type': 'application/json'
                                //     })
                                // }).then(res => {return res.json()})
                                //     .then(res => {
                                //         console.log(res)
                                //     });
                            },
                            function (e) {
                                let msg = e.code;
                                let dd = e.message;
                                console.log(msg);
                                console.log(dd)
                            },{
                                enableHighAccuracy: true,
                                timeout: 1000,
                                maximumAge:60*1000
                            })
                    }

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
        galleryRoomUploaderActiveReducer: state.galleryRoomUploaderActiveReducer,
        galleryOperator: state.galleryOperator
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({openUploader: openUploader,closeUploader:closeUploader},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(GalleryRoomUploader);