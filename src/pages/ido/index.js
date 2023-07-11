/* eslint-disable prettier/prettier */
import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import Header from '../../components/header';
import CountdownBlock from '../../components/countdown';
import SocialNetwork from '../../components/social_network';

import {
  EuiFlexGrid,
  EuiFlexItem,
  EuiImage,
  EuiPage,
  EuiFlexGroup,
  EuiButton,
  EuiSpacer,
  EuiIcon,
  EuiText,
  EuiPageBody,
  EuiPageContent,
  EuiTextAlign,
  EuiCard,
  EuiLink,
  EuiTitle,
} from '@elastic/eui';


const chart_options = {

  tooltip: {
    trigger: 'item'
  },
  backgroundColor:'#040517',
  series: [
    {
      name: 'Tokenomics',
      type: 'pie',
      radius: ['40%', '70%'],
      data: [
        { value: 2, name: '2% Public sale' },
        { value: 3, name: '3% Partners' },
        { value: 3, name: '3% Liquidity pool' },
        { value: 5, name: '5% Advisory' },
        { value: 7, name: '7% Private sale' },
        { value: 12, name: '12% Private sale 1' },
        { value: 12, name: '7% Team' },
        { value: 25, name: '25% Marketing' },
        { value: 31, name: '31% Incentive program' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
const functionComponent = () => (
  <>
    <Head>
      <title>My App - Next.js EUI Starter</title>
    </Head>

    <Header />
    <EuiPage restrictWidth={1100} style={{ padding: 10 }} className="ido-hero">
      <EuiFlexGroup>
        <EuiFlexItem className="b_lep">
          <h2>Platform for trading without limits</h2>
          <EuiSpacer />
          <p>
            Accept over 20 cryptocurrencies online and in commerce anywhere at
            any time regardless of the size of your business
          </p>
          <EuiSpacer />
          <EuiButton
            className="hero-link"
            style={{ width: 300, padding: 10 }}
            href="#/navigation/button">
            Buy now
          </EuiButton>
        </EuiFlexItem>

        <EuiFlexItem
          className="ido_counter_container"
          style={{ position: 'relative' }}>
          <div className="glow-effect" />
          <div className="countdown_block">
            <div className="ido_in">VendPay IDO in</div>
            <CountdownBlock />
          </div>
          <EuiImage
            size={'xl'}
            hasShadow={false}
            allowFullScreen={false}
            alt="gateway"
            src="/imgs/vend-ido-1.png"
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPage>
    <EuiPage className="pl_90d" restrictWidth={1100}>
      <h2>Where to buy Vend token</h2>
      <EuiSpacer />
      <EuiSpacer />

      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiCard style={{padding:'43px 0'}}
            icon={<EuiIcon size={150} type="/imgs/svg/logo-polkadot.svg" />}
            title='Private Sale'
            description="VEND/BNB at $0.03USD"
            betaBadgeProps={{
              href: 'http://www.elastic.co/subscriptions',
              target: '_blank',
            }}
            betaBadgeLabel="31 August"
            betaBadgeTooltipContent=""
            footer={
              <div>
                <EuiButton href="http://google.com" aria-label="Go to Developers Tools">
                 Buy now
                </EuiButton>
                <EuiSpacer size="xs" />

              </div>
            }
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
           style={{padding:'43px 0'}}
            icon={<EuiIcon size={150} type="/imgs/svg/pancakeswap.svg" />}
            title='Public Sale'
            description="VEND/BNB at $0.03USD"
            betaBadgeProps={{
              href: 'http://www.elastic.co/subscriptions',
              target: '_blank',
            }}
            betaBadgeLabel="24 August"
            betaBadgeTooltipContent=""
            footer={
              <div>
                <EuiButton href="http://google.com" aria-label="Go to Developers Tools">
                 Buy now
                </EuiButton>
                <EuiSpacer size="xs" />

              </div>
            }
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPage>


    <EuiPage restrictWidth={1150}>
         <EuiFlexGroup className='content4' gutterSize='l'>

            <EuiFlexItem grow={false} className="l_90" style={{padding:20}} >
            <EuiSpacer />
            <EuiSpacer />

              <h2>Bridging Online <br/> Business and Defi</h2>
              <EuiSpacer />
              <EuiText>
                <p key={0.5} >While credit card companies charge up to 5% for their service, we cut this cost to 0%. Instead we give an exclusive access to discounts and offers our merchants can target to their customers
                </p>
              </EuiText>
            </EuiFlexItem>


            <EuiFlexItem grow={false}>
            <EuiSpacer />
              <EuiImage
                   size={500}

                    style={{marginTop:-70, padding:20}}
                    hasShadow={false}
                    allowFullScreen ={false}
                    alt="gateway"
                    src="/imgs/mobile_app.png"
                  />

              </EuiFlexItem>


         </EuiFlexGroup>
    </EuiPage>
    <div style={{backgroundColor:'#0D0E1F'}}>
    <EuiPage restrictWidth={1150} style={{marginTop:30, backgroundColor:'transparent'}} className='ecosystem'>

        <EuiSpacer />
                <EuiSpacer />
                <div className='h_text'>
                <p>VendPay</p>
                <h2>Ecosystem</h2>
                </div>
                <EuiSpacer />

                <EuiImage
                      size="fullWidth"
                      hasShadow={false}
                      allowFullScreen ={false}
                      alt="gateway"
                      src="/imgs/shape-ecosystem.png"
                    />


        </EuiPage>
    </div>

    <EuiPage restrictWidth={1250} style={{marginTop:30, backgroundColor:'transparent'}} className='tokenomics'>

      <EuiSpacer />
              <EuiSpacer />
              <div className='h_text'>
                <p>VendPay</p>
                <h2>Tokenomics</h2>
                <EuiText>Token distribution</EuiText>
              </div>

              <EuiSpacer />

              <EuiFlexGroup>

                <EuiFlexItem grow={false}>
                  <EuiText>Total token supply: 200M</EuiText>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiText>Circulating Supply: 100M</EuiText>
                </EuiFlexItem>

                <EuiFlexItem grow={false}>

                </EuiFlexItem>

              </EuiFlexGroup>

            <EuiFlexGroup>
              <EuiFlexItem grow={false}>
              <EuiImage
                    size={600}
                    hasShadow={false}
                    allowFullScreen ={false}
                    alt="gateway"
                    className="token_chart"
                    src="/imgs/pie-simple_4.png"
                  />
              {/* <ReactECharts option={chart_options}
               notMerge={true}
               lazyUpdate={true}
               className='chart_tokeno'
               opts={{renderer: 'svg'}}
               style={{height: '600px', width: '600px'}}
               theme={"PieChart"}
               /> */}

              </EuiFlexItem>
              <EuiFlexItem grow={false}>
              <div class="content">
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Allocation %</th>
        <th>Token</th>
        <th>Price $</th>
        <th>Cap</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td data-th="First Name">Private sale</td>
        <td data-th="Second Name">12%</td>
        <td data-th="Position">24000000</td>
        <td data-th="Club">0.03</td>
        <td data-th="Club">14,000,000</td>
      </tr>

      <tr>
        <td data-th="First Name">Private sale 2</td>
        <td data-th="Second Name">7%</td>
        <td data-th="Position">14000000</td>
        <td data-th="Club">0.03</td>
        <td data-th="Club">8,000,000</td>
      </tr>


      <tr>
        <td data-th="First Name">Public sale</td>
        <td data-th="Second Name">2%</td>
        <td data-th="Position">4000000</td>
        <td data-th="Club">0.03</td>
        <td data-th="Club">3,000,000</td>
      </tr>

      <tr>
        <td data-th="First Name">Partners</td>
        <td data-th="Second Name">3%</td>
        <td data-th="Position">6000000</td>
        <td data-th="Club">0.01</td>
        <td data-th="Club">4,000,000</td>
      </tr>
       <tr>
        <td data-th="First Name">Liquidity pool</td>
        <td data-th="Second Name">3%</td>
        <td data-th="Position">6000000</td>
        <td data-th="Club">0.03</td>
        <td data-th="Club">5,000,000</td>
      </tr>
       <tr>
        <td data-th="First Name">Advisory</td>
        <td data-th="Second Name">5%</td>
        <td data-th="Position">10000000</td>
        <td data-th="Club">0.03</td>
        <td data-th="Club">9,000,000</td>
      </tr>

      <tr>
        <td data-th="First Name">Team</td>
        <td data-th="Second Name">12%</td>
        <td data-th="Position">24000000</td>
        <td data-th="Club">0.03</td>
        <td data-th="Club">21,000,000</td>
      </tr>

      <tr>
        <td data-th="First Name">Marketing</td>
        <td data-th="Second Name">25%</td>
        <td data-th="Position">50000000</td>
        <td data-th="Club">0.03</td>
        <td data-th="Club">30,000,000</td>
      </tr>
      <tr>
        <td data-th="First Name">Incentive program</td>
        <td data-th="Second Name">31%</td>
        <td data-th="Position">62000000</td>
        <td data-th="Club">0.03</td>
        <td data-th="Club">800,000</td>
      </tr>

    </tbody>
  </table>
</div>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer />
            <EuiSpacer />
      </EuiPage>

 {/* content6 */}

 <div className='l_oppp content6'>

<EuiPage  restrictWidth={1150} style={{backgroundColor:'transparent', padding:'50px 0'}} >
    <EuiPageBody style={{textAlign:'center', margin:'auto'}}>
    <h1>Connect with us</h1>
    <EuiSpacer />
    <p>Join our social media groups to keep up to date with what’s new</p>
    <EuiSpacer />
      <EuiPage style={{margin:'0 auto',backgroundColor:'transparent', display:'grid', width:'auto', border:0}}>
        <SocialNetwork/>
      </EuiPage>
    </EuiPageBody>
</EuiPage>
</div>

<div>
<EuiPage  restrictWidth={1150} style={{backgroundColor:'transparent', padding:'10px 0'}} >

  <EuiPageBody>
      <EuiPageContent style={{backgroundColor:'transparent'}}>
        <EuiTextAlign textAlign='center'>
        Copyright © VendPay 2021. All rights reserved.
        </EuiTextAlign>
      </EuiPageContent>
  </EuiPageBody>
</EuiPage>
</div>



{/* end content6 */}
  </>
);

export default functionComponent;
