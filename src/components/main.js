import React, { Component } from 'react';
import cx from 'classnames';
import Editor from './editor';
var RestReader=require('react-restui/lib/client/rest_reader');

export default class Main extends Component {
  constructor(props) {
      super(props);
      this.state={screenIndex:1}
  }

  switch(screenIndex){
    this.setState({screenIndex});
  }
  
  render() {
    const {screenIndex}=this.state;
    return (<div className="container">

      <div className="text-center">
        <h1>大屏幕管理系统</h1>
      </div>
      <div className="masthead">
        <ul className="nav nav-justified">
          <li className={cx({"active":screenIndex==1})}><a onClick={()=>this.switch(1)}>第一屏幕</a></li>
          <li className={cx({"active":screenIndex==2})}><a onClick={()=>this.switch(2)}>第二屏幕</a></li>
          <li className={cx({"active":screenIndex==3})}><a onClick={()=>this.switch(3)}>第三屏幕</a></li>
          <li className={cx({"active":screenIndex==4})}><a onClick={()=>this.switch(4)}>第四屏幕</a></li>
        </ul>
      </div>

      <RestReader url='/api/screen' view={Editor}  screenIndex={screenIndex} subscribe={["updated"]}/> 

      <div className="footer">
        <p>&copy; 东南大学 2016</p>
      </div>

    </div>) ;
  }
}