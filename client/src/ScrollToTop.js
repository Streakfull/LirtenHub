import React, { Component } from "react";
import { withRouter } from "react-router";
const $ = window.$;
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      $("#scrollable-content > div > div, body").animate(
        {
          scrollTop: 0
        },
        300
      );
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
