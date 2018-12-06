import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FadeLoader } from 'react-spinners';
import Helmet from 'react-helmet';

import {
  userRequest,
} from '../../actions/userActions';

class userPage extends Component {
  constructor(props) {
    super(props);

    let user;

    this.state = {
      user,
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({
      user: this.props.userRequest(),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      setTimeout(() => {
        this.setState({
          loading: false,
        });
      }, 1000);
    }
  }

  render() {
    const username =
      !this.state.loading ? this.props.user[0].firstName : 'user';
    return (
      <div>
        <Helmet>
          <title>User page</title>
        </Helmet>
        <FadeLoader
          color={'#123abc'}
          loading={this.state.loading}
        />
        {!this.state.loading &&
          <p>Not loading {username}</p>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userRequest: () => {
      dispatch(userRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(userPage);
