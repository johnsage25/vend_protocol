/* eslint-disable prettier/prettier */
import React from "react";
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

const Header = () => {


    return(

        <div className="header_container">
        <EuiHeader  style={{fontSize:20, height:70, paddingLeft:30, paddingRight:30, background:'transparent'}} >
          <EuiHeaderSectionItem border="right">
            <a href="/">
              <EuiImage  aria-label="vendpay"  src={'/imgs/vend-logo-w.png'} style={{height:60, width:'auto'}} />
            </a>

          </EuiHeaderSectionItem>

          <EuiHeaderSectionItem>
            <EuiHeaderLinks aria-label="App navigation links example">
              <EuiHeaderLink href="/ido">IDO</EuiHeaderLink>

              <EuiHeaderLink >Wallet</EuiHeaderLink>
              <EuiHeaderLink href="/doc/vendpaper.pdf">WhitePaper</EuiHeaderLink>
              <EuiHeaderLink>VendSwap</EuiHeaderLink>

            </EuiHeaderLinks>
          </EuiHeaderSectionItem>
        </EuiHeader>
        </div>
    )
}

export default Header