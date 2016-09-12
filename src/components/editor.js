import React from 'react';
var _=require ('lodash');

import SlidesEditor from './slides_editor';
import UrlEditor from './url_editor';

function getStateFrom(data,screenIndex){
  return _.find(data,{_id:screenIndex})||{show:"url"};
}


export default class Editor extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    const {data,screenIndex}=props;
    this.state=getStateFrom(data,screenIndex);
  }

  render() {
    const {screenIndex}=this.props;
    const {show}=this.state;
    if(!show){return null;}
    return (
      <div>
      <div className="row pad-v">
        <div className="col-sm-6">
          <label className="radio-inline" onClick={()=>this.setState({show:'url'})}>
            <input type="radio" name="inlineRadioOptions" id="url" value="url" checked={show=='url'}/> 网页链接
          </label>
          <label className="radio-inline" onClick={()=>this.setState({show:'slides'})}>
            <input type="radio" name="inlineRadioOptions" id="slides" value="slides" checked={show=='slides'}/> 幻灯片
          </label> 
        </div>
        <div className="col-sm-5">
       </div>
        <div className="col-sm-1">
          <a type="button" className="btn btn-success" target="_blank" href={"/show/"+screenIndex}>预览</a>
       </div>
      </div>
      <div className="row pad-v">
        <div className="col-sm-12">
        {show=="url"?<UrlEditor/>:<SlidesEditor/>}
        </div>
      </div>
      </div>
    );
  }
}
