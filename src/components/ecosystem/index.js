
import React from 'react';

import {
  EuiCard,
  EuiIcon,
  EuiFlexGroup,
  EuiPage,
  EuiFlexItem,
} from '@elastic/eui';

const icons = [
    {
        'icon' :'/imgs/svg/wallet.svg',
        'name' : 'Wallet',
        'discription': 'Make and track payment, stake and earn Vend Tokens.',
    },
    {
        'icon' :'/imgs/svg/online-shopping.svg',
        'name' : 'Ecommerce',
        'discription': 'Ecommerce plugin to enable online payments on your platform.',
    },
    {
        'icon' :'/imgs/svg/pos-machine.svg',
        'name' : 'Point of Sales (POS)',
        'discription': 'POS terminal for marchant transaction',
    },
    {
        'icon' :'/imgs/svg/gift-box.svg',
        'name' : 'Reward System',
        'discription': 'Rewards users as they spend their $Vend and other supported cryptos',
    },
];

const cardNodes = icons.map(function (item, index) {
  return (

    <EuiFlexItem key={index} >
      <EuiCard style={{backgroundColor: '#1d1e33'}}
        icon={<EuiIcon className='icons-list' type={`${item.icon}`} />}
        title={item.name}
        // isDisabled={item === 'Kibana' ? true : false}
        description={item.discription}
        onClick={() => {}}
      />
    </EuiFlexItem>

  );
});

export default () => <EuiFlexGroup gutterSize="l">{cardNodes}</EuiFlexGroup>;