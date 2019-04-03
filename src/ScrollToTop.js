import { Component } from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      window.setTimeout(() => {
        window.scrollTo(0, 0);
      }, 600);
    }
  }

  render() {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
