import React from "react";

export default class Plugin extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(response => {
        response.text().then(componentCode => {
          const pluginFactory = new Function(
            `${componentCode}\nreturn plugin;`
          );
          this.setState({ Plugin: pluginFactory() });
        });
      })
      .catch(console.log);
  }

  render() {
    const { url, ...rest } = this.props;
    const { Plugin } = this.state;
    return !Plugin ? <div>Loading</div> : <Plugin {...rest} />;
  }
}
