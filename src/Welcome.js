
import React from 'react';

//定義歡迎頁面
 class Welcome extends React.Component {
    render() {
      return <h1>Welcome, {this.props.name}</h1>;
    }
  }

  export default Welcome
  