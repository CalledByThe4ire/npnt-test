/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { sliderSelector } from '../../store/slider/slider.slice';
import { toggle, modalSelector } from '../../store/modal/modal.slice';
import GuideModal from '../../components/GuideModal/GuideModal.jsx';
import Icon from '../../components/Icon/Icon.jsx';
import {
  Guide,
  GuideElementsList,
  GuideElementsListItem,
  GuideButton,
  GuideLead,
  GuideTitle,
  GuidePanel,
  GuidePanelItemContent,
  GuidePanelItemLeft,
  GuidePanelItemRight,
  GuideElementsListItemImageBubble1,
  GuideElementsListItemImageBubble2,
  GuideElementsListItemImageBubble3,
  GuideElementsListItemImageBubble4,
  GuideElementsListItemImageBubble5,
  GuideElementsListItemImageBubble6,
  GuideElementsListItemImageBubble7,
  GuideElementsListItemImageBubble8,
} from './Guide.styles.jsx';
import bubble1Image from '../../assets/images/guide/guide__element--bubble1.png';
import bubble1ImageRetina from '../../assets/images/guide/guide__element--bubble1@2x.png';
import bubble2Image from '../../assets/images/guide/guide__element--bubble2.png';
import bubble2ImageRetina from '../../assets/images/guide/guide__element--bubble2@2x.png';
import bubble3Image from '../../assets/images/guide/guide__element--bubble3.png';
import bubble3ImageRetina from '../../assets/images/guide/guide__element--bubble3@2x.png';
import bubble4Image from '../../assets/images/guide/guide__element--bubble4.png';
import bubble4ImageRetina from '../../assets/images/guide/guide__element--bubble4@2x.png';
import bubble5Image from '../../assets/images/guide/guide__element--bubble5.png';
import bubble5ImageRetina from '../../assets/images/guide/guide__element--bubble5@2x.png';
import bubble6Image from '../../assets/images/guide/guide__element--bubble6.png';
import bubble6ImageRetina from '../../assets/images/guide/guide__element--bubble6@2x.png';
import bubble7Image from '../../assets/images/guide/guide__element--bubble7.png';
import bubble7ImageRetina from '../../assets/images/guide/guide__element--bubble7@2x.png';
import bubble8Image from '../../assets/images/guide/guide__element--bubble8.png';
import bubble8ImageRetina from '../../assets/images/guide/guide__element--bubble8@2x.png';

export default (props) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { isOpen } = useSelector(modalSelector);

  const { currentIndex } = useSelector(sliderSelector);

  const { index } = props;

  const handleClick = () => dispatch(toggle());

  const renderContent = () => {
    if (isOpen) {
      return <GuideModal></GuideModal>;
    } else {
      return (
        <>
          <GuideLead className="guide__lead">
            {t('slider.guide.lead')}
          </GuideLead>
          <GuideTitle
            className="guide__title"
            dangerouslySetInnerHTML={{ __html: t('slider.guide.title') }}
          />
          <GuidePanel className="guide__panel guide-panel">
            <GuidePanelItemLeft className="guide-panel__item guide-panel__item--left guide-panel-item">
              <GuidePanelItemContent className="guide-panel-item__content">
                <Icon name="use" width={68} height={63} />
                <p
                  dangerouslySetInnerHTML={{
                    __html: `${t('slider.guide.use')}`,
                  }}
                />
              </GuidePanelItemContent>
            </GuidePanelItemLeft>
            <GuidePanelItemRight className="guide-panel__item guide-panel__item--right guide-panel-item">
              <GuidePanelItemContent className="guide-panel-item__content">
                <Icon name="duration" width={70} height={58} />
                <p
                  dangerouslySetInnerHTML={{
                    __html: `${t('slider.guide.duration')}`,
                  }}
                />
                <GuideButton
                  to="/"
                  onClick={handleClick}
                  className="guide__button button"
                >
                  <Icon name="plus" width={15} height={15} />
                  <span>{t('slider.guide.buttonCaption')}</span>
                </GuideButton>
              </GuidePanelItemContent>
            </GuidePanelItemRight>
          </GuidePanel>
        </>
      );
    }
  };

  return (
    <Guide className="guide">
      <GuideElementsList className="guide__elements-list guide-elements-list">
        <GuideElementsListItem className="guide-elements-list__item guide-elements-list-item">
          <GuideElementsListItemImageBubble1
            className="guide-elements-list-item__image"
            srcSet={`${bubble1Image} 1x, ${bubble1ImageRetina} 2x`}
            alt="bubble"
            width="34"
            height="34"
            modifier="bubble1"
            isViewActive={index !== currentIndex}
          />
        </GuideElementsListItem>
        <GuideElementsListItemImageBubble2
          className="guide-elements-list-item__image"
          srcSet={`${bubble2Image} 1x, ${bubble2ImageRetina} 2x`}
          alt="bubble"
          width="113"
          height="112"
          modifier="bubble2"
          isViewActive={index !== currentIndex}
        />
        <GuideElementsListItemImageBubble3
          className="guide-elements-list-item__image"
          srcSet={`${bubble3Image} 1x, ${bubble3ImageRetina} 2x`}
          alt="bubble"
          width="37"
          height="38"
          modifier="bubble3"
          isViewActive={index !== currentIndex}
        />
        <GuideElementsListItemImageBubble4
          className="guide-elements-list-item__image"
          srcSet={`${bubble4Image} 1x, ${bubble4ImageRetina} 2x`}
          alt="bubble"
          width="62"
          height="62"
          modifier="bubble4"
          isViewActive={index !== currentIndex}
        />
        <GuideElementsListItemImageBubble5
          className="guide-elements-list-item__image"
          srcSet={`${bubble5Image} 1x, ${bubble5ImageRetina} 2x`}
          alt="bubble"
          width="68"
          height="69"
          modifier="bubble5"
          isViewActive={index !== currentIndex}
        />
        <GuideElementsListItemImageBubble6
          className="guide-elements-list-item__image"
          srcSet={`${bubble6Image} 1x, ${bubble6ImageRetina} 2x`}
          alt="bubble"
          width="143"
          height="143"
          modifier="bubble6"
          isViewActive={index !== currentIndex}
        />
        <GuideElementsListItemImageBubble7
          className="guide-elements-list-item__image"
          srcSet={`${bubble7Image} 1x, ${bubble7ImageRetina} 2x`}
          alt="bubble"
          width="33"
          height="33"
          modifier="bubble7"
          isViewActive={index !== currentIndex}
        />
        <GuideElementsListItemImageBubble8
          className="guide-elements-list-item__image"
          srcSet={`${bubble8Image} 1x, ${bubble8ImageRetina} 2x`}
          alt="bubble"
          width="75"
          height="75"
          modifier="bubble8"
          isViewActive={index !== currentIndex}
        />
      </GuideElementsList>
      {renderContent()}
    </Guide>
  );
};
