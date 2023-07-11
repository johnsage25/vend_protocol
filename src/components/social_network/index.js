
import React from 'react';

import {
  EuiCard,
  EuiIcon,
  EuiFlexGroup,
  EuiPage,
  EuiButtonIcon,
  EuiFlexItem,
  EuiFlexGrid
} from '@elastic/eui';

const icons = [
    {
        'icon' :'/imgs/svg/linkedin.svg',
        'name' : 'linkedin',
        'href': ''
    },
    {
        'icon' :'/imgs/svg/twitter.svg',
        'name' : 'Twitter',
        'href': ''
    },
    {
      'icon' :'/imgs/svg/reddit.svg',
      'name' : 'reddit',
      'href': ''
  },
    {
        'icon' :'/imgs/svg/telegram.svg',
        'name' : 'telegram',
        'href': ''
    },
    {
      'icon' :'/imgs/svg/medium.svg',
      'name' : 'medium',
      'href': ''
    },


];

const cardNodes = icons.map(function (item, index) {
  return (

    <EuiFlexItem key={index} style={{margin:20}} grow={false}  component="span">
      <a href={item.href}><EuiIcon className='icons-list-co' iconType="IconType" type={`${item.icon}`} /></a>
    </EuiFlexItem>

  );
});

export default () => <EuiFlexGrid style={{border:0}} columns={5} responsive={false} alignItems="center" grow={false} gutterSize='l'>{cardNodes}</EuiFlexGrid>;