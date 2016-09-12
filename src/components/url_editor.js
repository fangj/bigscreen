import React from 'react';
import Form from "react-jsonschema-form";


var RestWriter=require('react-restui/lib/client/rest_writer');

const schema = {
  title: "网页链接编辑",
  type: "object",
  required: ["url"],
  properties: {
    url: {type: "string", title: "网址", default: "http://www.seu.edu.cn"}
  }
};



export default class UrlEditor extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {data, screenIndex}=this.props;
    const urlFormCreate=(props)=>(<Form schema={schema} onSubmit={(obj)=>{
      var formData=obj.formData;
      formData.show="url";
      formData._id=screenIndex;
      formData.url=obj.formData.url;
      props.save(formData);
    }}> <button type="submit" className="btn btn-success">保存</button></Form>);
    const urlFormUpdate=(props)=>(<Form schema={schema} formData={props.data} onSubmit={(obj)=>{
      var formData=obj.formData;
      formData.show="url";
      formData._id=screenIndex;
      formData.url=obj.formData.url;
      props.update(obj.formData)
    }}>
            <div className="btn-toolbar">
                <button type="submit" className="btn btn-success">保存</button>
                <a className="btn btn-danger" onClick={props.remove}>删除</a>
            </div>
    </Form>);

    if(data._id){
      return <RestWriter id={data._id} url="/api/screen" view={urlFormUpdate}  publish="updated"/>    
    } else {
      return <RestWriter  url="/api/screen" view={urlFormCreate}  publish="updated"/>
    }

  }
}
