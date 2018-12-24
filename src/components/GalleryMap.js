import React, { Component } from 'react';
import { Map, Markers } from 'react-amap';
const randomPosition = () => ({
    longitude: 120 + Math.random() * 20,
    latitude: 30 + Math.random() * 20
});
const YOUR_AMAP_KEY = 'fd73199240ef1a8ffe2c3f86f412d8d9';
class GalleryMap extends Component{
    constructor() {
        super();
        var _this = this;
        // 随机生成 10 个标记点的原始数据
        this.mapCenter = {longitude: 130, latitude: 40};
        this.markers = Array(10).fill(true).map(function(e, i){
            var position = randomPosition();
            return {
                position,
                // 这个属性就可以用来确定点击的是哪个坐标点
                myIndex: i
            }
        });
        this.markersEvents = {
            click(e, marker){
                // 通过高德原生提供的 getExtData 方法获取原始数据
                const extData = marker.getExtData();
                const index = extData.myIndex;
                alert(`点击的是第${index}号坐标点`);
                console.log(extData === _this.markers[index]);
            }
        }
        const markerStyle = {
            padding: '5px',
            border: '1px solid #ddd',
            background: '#fff',
        };
        this.renderMarkerFn = (extData) => (
            <div style={markerStyle}>{extData.myIndex}</div>
        );
    }

    render() {
        return <div style={{width: '100%', height: 400}}>
            <Map plugins={['ToolBar']} center={this.mapCenter} zoom={4}
                amapkey={YOUR_AMAP_KEY}
            >
                <Markers
                    render={this.renderMarkerFn}
                    markers={this.markers}
                    events={this.markersEvents}
                    useCluster
                />
            </Map>
        </div>
    }
}
export default GalleryMap;