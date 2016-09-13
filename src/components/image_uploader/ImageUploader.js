require('./ImageUploader.less');
var UploadZone=require('react-restui/lib/client/upload_zone');

var agent = require('superagent-promise')(require('superagent'),Promise);
var PubSub=require('pubsub-js');

class ImageUploader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let me = this;
        const {url}=this.state;
        return (
            <div className="image_uploader">
              <UploadZone url="/upload" onUploaded={this.onUploaded.bind(this)} accept="image/*"/>
            </div>
        );
    }

    onUploaded(files){
        console.log(files[0])
        var url=files[0].url;
        this.setState({url});

        const {screenIndex,data}=this.props;
        var slides=data.slides||[];
        slides.push({type:"img",url:url});
        var obj={
            _id:screenIndex,
            show:"slides",
            slides:slides
        }
        if(!data._id){
            agent.post('/api/screen',obj).then(_=>PubSub.publish('img-uploaded')); //创建
        }else{
            agent.put('/api/screen/'+data._id,obj).then(_=>PubSub.publish('img-uploaded')); //更新
        }
    }


    componentWillMount() {
    }

    componentDidMount() {
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
    }
}

module.exports = ImageUploader;
