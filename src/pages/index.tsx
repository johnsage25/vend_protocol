/* eslint-disable prettier/prettier */
import React, { FunctionComponent } from 'react';
import {
  EuiButton,
  EuiCode,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiImage,
  EuiCard,
  EuiButtonIcon,
  EuiIcon,
  EuiFlexGrid,
  EuiPageBody,
  EuiPage,
  EuiTextAlign,
  EuiPageContent,
  EuiHorizontalRule,
} from '@elastic/eui';


import Tilt from 'react-parallax-tilt';
import useWindowSize from "@rooks/use-window-size"
import SocialNetwork from '../components/social_network';
import Doodle from '../components/doodle';
import anime from 'animejs/lib/anime.es.js';
import MyComponent from '../components/my_component';
import Animate from '../components/animate';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Ecosystem from '../components/ecosystem';
import Header from '../components/header';
import Image from 'next/image'

const Index: FunctionComponent = () => {


  return <>

   <Header/>

    <main>
      <EuiPage className='heroContainer'>
        <EuiPage restrictWidth={1100} style={{padding:10}}>
        <EuiFlexGroup>
          <EuiFlexItem>
            <div className='hero_text'>
            <EuiText>
               <h1 style={{fontSize:'6rem'}}>MERCHANT CRYPTO PAYMENTS</h1>
               <p>Pay expenses, earn $Vend Token rewards, with your crypto tokens. Receive, send, store, exchange, and pay in cryptocurrency with a security audited crypto wallet.</p>
            </EuiText>
            <EuiButton className="hero-link" style={{width:300, padding:10}} href="#/navigation/button">Read our whitepaper</EuiButton>
            </div>


          </EuiFlexItem>
          <EuiFlexItem style={{position:'relative', textAlign:'center'}}>
            <div className='graphic-color'></div>
            <div className='image-m'>
              <img  src="/imgs/Untitled1.png" className='euiBottomShadow' />

            </div>

          </EuiFlexItem>
        </EuiFlexGroup>
        </EuiPage>
      </EuiPage>

       {/* CEX and DEX logos */}
       <EuiCard style={{padding:0, backgroundColor:'#0d0e1f'}}>
       <EuiPage restrictWidth={1200} style={{background:'transparent'}}>

            <div className='dex-list-op'>
            <EuiFlexGroup gutterSize='xl' className='list_gutter'>
            <EuiFlexItem>
            <EuiImage
            size="m"
            hasShadow={false}
            allowFullScreen ={false}
            alt="CoinMarketCap"
            src="/imgs/CoinMarketCap_logo.png"
            />
            </EuiFlexItem>

            <EuiFlexItem>
            <EuiImage
            size="m"
            hasShadow={false}
            allowFullScreen ={false}
            alt="Bscscan"
            src="/imgs/bscscan-logo-light.png"
            />
            </EuiFlexItem>
            <EuiFlexItem>
            <EuiImage
            size="m"
            hasShadow={false}
            allowFullScreen ={false}
            alt="Bscscan"
            src="/imgs/Yahoo-Finance.png"
            />
            </EuiFlexItem>
            <EuiFlexItem>
            <EuiImage
            size="m"

            hasShadow={false}
            allowFullScreen ={false}
            alt="Bscscan"
            src="/imgs/hn-logo.png"
            />
            </EuiFlexItem>

            </EuiFlexGroup>
            </div>
            </EuiPage>
       </EuiCard>


      {/* End of CEX */}
      <EuiSpacer />
      {/* content2 */}
      <div>
        <EuiPage restrictWidth={1100}>

           <EuiFlexGroup justifyContent="spaceAround" direction='column'>
            <EuiFlexItem className="p_jjk"  grow={false}>
            <EuiSpacer />
              <h1>VendPay Ecosystem</h1>
              <EuiSpacer />
            </EuiFlexItem>
            <EuiFlexItem grow={false} >
              <Ecosystem/>
            </EuiFlexItem>

           </EuiFlexGroup>
        </EuiPage>
        <EuiSpacer />


      <EuiPage restrictWidth={1100}>

      </EuiPage>

      </div>

      <EuiSpacer />
      <EuiSpacer />
      {/* content2 ended */}

      {/* content3 */}

      <EuiPage restrictWidth={1150}>
         <EuiFlexGroup className='content3' direction={isMobile ? `columnReverse` : `row`} gutterSize='l'>
            <EuiFlexItem grow={false} >
            <EuiSpacer />
            <EuiSpacer />

              <h2>About VendPay</h2>
              <EuiSpacer />
              <EuiText>
                <p key={0.5} > VendPay Wallet incorporates ERC-1363 EIP to allows customers to spend crypto at ecommerce stores and local cafe or restaurant, all for only pennies in fees. Our objectives are to provide a decentralized, private and instant payment that costs just pennies.
                At VendPay, we are determined to sculpt the future of cryptocurrency
payments. We strive to change the payment approach that no other entity has
managed to do yet. With the $Vend token, Vend will be one of the most
promising projects of the recent technological era, Both in Africa and the world.
                </p>
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
            <Tilt>
            <EuiImage
                  size={550}

                  style={{ marginTop:-70}}
                  hasShadow={false}
                  allowFullScreen ={false}
                  alt="gateway"
                  src="/imgs/208-[Converted].png"
                />
                </Tilt>
              </EuiFlexItem>
         </EuiFlexGroup>
      </EuiPage>


      {/* content3 */}

      {/* content4 */}

      <EuiPage restrictWidth={1150} style={{marginTop:70}}>
         <EuiFlexGroup className='content4' gutterSize='l'>

         <EuiFlexItem grow={false}>
              <Tilt>
              <EuiImage
                    size={450}

                    style={{marginTop:-70}}
                    hasShadow={false}
                    allowFullScreen ={false}
                    alt="gateway"
                    src="/imgs/mobile_app.png"
                  />
              </Tilt>
              </EuiFlexItem>


            <EuiFlexItem grow={false} className="l_90" >
            <EuiSpacer />
            <EuiSpacer />

              <h2>VendPay Wallet</h2>
              <EuiSpacer />
              <EuiText>
                <p key={0.5} > VendPay Wallet Pay for goods and services in cryptocurrency with a 0% fee. Store your funds in the most robust crypto wallet. Exchange 50+ currencies including 20+ national ones. Buy Bitcoin and other digital currencies with bank cards.
                </p>
              </EuiText>
            </EuiFlexItem>

         </EuiFlexGroup>
      </EuiPage>

      {/* end content4 */}

      {/* content5 */}

      <EuiPage restrictWidth={1150} style={{marginTop:70, paddingBottom:50}}>
         <EuiFlexGroup className='content5' gutterSize='l'>


         <EuiFlexItem grow={false} className="l_90" >
            <EuiSpacer />
            <EuiSpacer />

              <h2>Payment gateway</h2>
              <EuiSpacer />
              <EuiText>
                <p key={0.5} >
                Our crypto payment processor helps any type of online business accept crypto payments and receive an equal amount in the national currency of their choice instantly or hold it and pay with crypto to their partners and affiliates.
For example, one of the best cases is when merchants receive Ethereum as payments from their customers, convert it in USD to avoid any risks and then conversion required amount in fiat to crypto for settlements with partners.
                </p>
              </EuiText>
            </EuiFlexItem>

         <EuiFlexItem grow={false}>

          <Tilt>
            <EuiImage
                  size={450}

                  style={{marginTop:-70}}
                  hasShadow={false}
                  allowFullScreen ={false}
                  alt="gateway"
                  src="/imgs/vend-gateway-2.png"
                />
          </Tilt>

         </EuiFlexItem>




         </EuiFlexGroup>
      </EuiPage>

      {/* end content5 */}

      {/* content tradechart */}
      <EuiPage >
      <EuiPage restrictWidth={950}  style={{marginTop:70,borderRadius:16, paddingBottom:50, marginBottom: 100}}>


          <EuiFlexGrid  className='content5' direction='colunm' gutterSize='l'>




          <EuiFlexItem grow={false} className="l_90" style={{textAlign:'center', margin:'auto'}} >

              <h2>Buy crypto at true cost</h2>
              <EuiSpacer />
              <EuiText>
                <p key={0.5} >
                Buy and sell 100+ cryptocurrencies with 20+ fiat currencies using bank<br/> transfers or your credit/debit card.
                </p>
              </EuiText>
            </EuiFlexItem>



          <EuiFlexItem grow={false} style={{margin:'50px auto auto'}}>

              <EuiImage
                    // size="xl"
                    hasShadow={true}
                    allowFullScreen ={true}
                    alt="gateway"
                    src="/imgs/vend-exchange.png"
                  />


            </EuiFlexItem>


          </EuiFlexGrid>
          </EuiPage>

      </EuiPage>


      {/* content end */}
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

    </main>
  </>
};

export default Index;
