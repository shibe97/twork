import React from 'react';
import Name from '../../Atoms/Name/Name';
import ScreenName from '../../Atoms/ScreenName/ScreenName';
import CreatedAt from '../../Atoms/CreatedAt/CreatedAt';

export default ({ tweet = {} }) => (
  <div>
    <Name><a href="javascript:void(0);" onClick={() => this.props.setUser(tweet.user)}>{tweet.user.name}</a></Name>
    <span className="ml5px"><ScreenName>@{tweet.user.screen_name}</ScreenName></span>
    <span className="Tweet__createdAt"><CreatedAt>{tweet.created_at}</CreatedAt></span>
  </div>
);
