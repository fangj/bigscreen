require('./ImageEditor.less');
import ImageUploader from "../../components/image_uploader";
var agent = require('superagent-promise')(require('superagent'),Promise);
import PubSub from 'pubsub-js';
var RestReader=require('react-restui/lib/client/rest_reader');
var _=require('lodash');



const ThumbView=(props)=>props.data?<img src={props.data.url} onClick={_=>PubSub.publish('img-remove',props.data.url)}/>:<div></div>
const browser=(props)=>{
    const ThumbView=props.thumbView;
    console.log('ThumbView',props.data)
    return (<div className="browser">
                    {props.data.slides.map((d,i)=><ThumbView data={d} key={i}/>)}
            </div>)
}
class ImageEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        const {data,screenIndex}=this.props;
        return (
            <div className="image_editor">
                 <ImageUploader data={data} screenIndex={screenIndex}/>
                 <RestReader view={browser} url={"/api/screen/"+screenIndex} thumbView={ThumbView} subscribe={['img-removed','img-uploaded']} />
            </div>
        );
    }

    removeImage(data,url){
        // var idx=_.findIndex(slides, {type:"img",url:url});
        _.remove(data.slides,{type:"img",url:url});
        agent.put('/api/screen/'+data._id,data).then(_=>PubSub.publish('img-removed')); //更新
    }

    componentWillMount() {
    }

    componentDidMount() {
        const me=this;
        const {data,screenIndex}=this.props;
        var mySubscriber = function(  url ){
            console.log("remove", url );
            me.removeImage(data,url);
        };
        this.token=PubSub.subscribe( 'img-remove', mySubscriber );
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
        PubSub.unsubscribe( this.token );
    }
}

module.exports = ImageEditor;
