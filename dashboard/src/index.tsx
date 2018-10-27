import React from "react";

export default class App extends React.Component<{ hostText: string }> {
  render() {
    return (
      <div style={{ backgroundColor: "#FFBA49" }}>
        <div>Hello from Dashboard (Server 3)</div>
        <div>Text from host application: {this.props.hostText}</div>
      </div>
    );
  }
}
