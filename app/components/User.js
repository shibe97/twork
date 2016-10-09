import React, { Component } from 'react';
import { Link } from 'react-router';
import Name from './Atoms/Name';
import ScreenName from './Atoms/ScreenName';
import Modal from 'react-awesome-modal';

export default class User extends Component {
  render() {
    if (!this.props.user.user.profile_background_image_url_https) {
      return <div />;
    }
    const style = {
      background : `url(${this.props.user.user.profile_background_image_url_https}) repeat center -40px`
    };
    return (
      <Modal visible={this.props.user.modal} width="340" height="340" effect="fadeInDown" onClickAway={() => this.props.closeUserModal()}>
        <div className="User" style={style}>
          <div className="User__whiteArea">
            <div className="User__info">
              <img className="User__img" src={this.props.user.user.profile_image_url_https} alt="profile_image" />
              <Link to={`userTimeline/${this.props.user.user.id_str}`} onClick={() => this.props.closeUserModal()}><Name>{this.props.user.user.name}</Name></Link>
              <br />
              <ScreenName>@{this.props.user.user.screen_name}</ScreenName>
            </div>
            <p className="User__description">{this.props.user.user.description}</p>
            <ul className="User__count">
              <li className="User__countItem">
                <dl>
                  <dd className="User__countValue">{this.props.user.user.statuses_count.toLocaleString()}</dd>
                  <dt className="User__countKey">tweets</dt>
                </dl>
              </li>
              <li className="User__countItem">
                <dl>
                  <dd className="User__countValue">{this.props.user.user.friends_count.toLocaleString()}</dd>
                  <dt className="User__countKey">friends</dt>
                </dl>
              </li>
              <li className="User__countItem">
                <dl>
                  <dd className="User__countValue">{this.props.user.user.followers_count.toLocaleString()}</dd>
                  <dt className="User__countKey">followers</dt>
                </dl>
              </li>
            </ul>
          </div>
        </div>
      </Modal>
    );
  }
}