import React, { Component } from 'react'
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  WhatsappIcon
} from 'react-share'

export default class SocialShareContainer extends Component {
  render() {
    const shareUrl = window.location.href;
    const title = 'Quiz Test';

    return (
      <div className="share-container">
        <div className="share-some-network">
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="share-some-network-share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>

        <div className="share-some-network">
          <FacebookMessengerShareButton
            url={shareUrl}
            appId="521270401588372"
            className="share-some-network-share-button"
          >
            <FacebookMessengerIcon size={32} round />
          </FacebookMessengerShareButton>
        </div>

        <div className="share-some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="share-some-network-share-button"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>

        <div className="share-some-network">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="share-some-network-share-button"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>

        <div className="share-some-network">
          <LinkedinShareButton url={shareUrl} className="share-some-network-share-button">
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>

        <div className="share-some-network">
          <PinterestShareButton
            url={String(window.location)}
            className="share-some-network-share-button"
          >
            <PinterestIcon size={32} round />
          </PinterestShareButton>
        </div>          
      </div>
    )
  }
}