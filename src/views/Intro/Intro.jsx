/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { next, sliderSelector } from '../../store/slider/slider.slice';
import Icon from '../../components/Icon/Icon.jsx';
import {
  Intro,
  IntroLead,
  IntroTitle,
  IntroButton,
  IntroElementsListItemImageCell1,
  IntroElementsListItemImageCell2,
  IntroElementsListItemImageCell3,
  IntroElementsListItemImageCell4,
  IntroElementsListItemImageSperm,
  IntroElementsList,
  IntroElementsListItem,
} from './Intro.styles.jsx';
import cell1Image from '../../assets/images/intro/intro__element--cell1.png';
import cell1ImageRetina from '../../assets/images/intro/intro__element--cell1@2x.png';
import cell2Image from '../../assets/images/intro/intro__element--cell2.png';
import cell2ImageRetina from '../../assets/images/intro/intro__element--cell2@2x.png';
import cell3Image from '../../assets/images/intro/intro__element--cell3.png';
import cell3ImageRetina from '../../assets/images/intro/intro__element--cell3@2x.png';
import cell4Image from '../../assets/images/intro/intro__element--cell4.png';
import cell4ImageRetina from '../../assets/images/intro/intro__element--cell4@2x.png';
import SpermImage from '../../assets/images/intro/intro__element--sperm.png';
import SpermImageRetina from '../../assets/images/intro/intro__element--sperm@2x.png';

export default (props) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { index } = props;

  const { currentIndex } = useSelector(sliderSelector);

  const handleClick = () => dispatch(next());
  return (
    <Intro className="intro">
      <IntroElementsList className="intro__elements-list intro-elements-list">
        <IntroElementsListItem className="intro-elements-list__item">
          <IntroElementsListItemImageCell1
            className="intro-elements-list-item__image"
            srcSet={`${cell1Image} 1x, ${cell1ImageRetina} 2x`}
            alt="cell"
            width="63"
            height="57"
            modifier="cell1"
            isViewActive={index !== currentIndex}
          />
        </IntroElementsListItem>
        <IntroElementsListItem className="intro-elements-list__item">
          <IntroElementsListItemImageCell2
            className="intro-elements-list-item__image"
            srcSet={`${cell2Image} 1x, ${cell2ImageRetina} 2x`}
            alt="cell"
            width="111"
            height="114"
            modifier="cell2"
            isViewActive={index !== currentIndex}
          />
        </IntroElementsListItem>
        <IntroElementsListItem className="intro-elements-list__item">
          <IntroElementsListItemImageCell3
            className="intro-elements-list-item__image"
            srcSet={`${cell3Image} 1x, ${cell3ImageRetina} 2x`}
            alt="cell"
            width="228"
            height="224"
            modifier="cell3"
            isViewActive={index !== currentIndex}
          />
        </IntroElementsListItem>
        <IntroElementsListItem className="intro-elements-list__item">
          <IntroElementsListItemImageCell4
            className="intro-elements-list-item__image"
            srcSet={`${cell4Image} 1x, ${cell4ImageRetina} 2x`}
            alt="cell"
            width="73"
            height="71"
            modifier="cell4"
            isViewActive={index !== currentIndex}
          />
        </IntroElementsListItem>
        <IntroElementsListItem className="intro-elements-list__item">
          <IntroElementsListItemImageSperm
            className="intro-elements-list-item__image"
            srcSet={`${SpermImage} 1x, ${SpermImageRetina} 2x`}
            alt="sperm"
            width="592"
            height="93"
            modifier="sperm"
            isViewActive={index !== currentIndex}
          />
        </IntroElementsListItem>
      </IntroElementsList>
      <IntroLead className="intro__lead">{t('slider.intro.lead')}</IntroLead>
      <IntroTitle
        className="intro__title"
        dangerouslySetInnerHTML={{ __html: t('slider.intro.title') }}
      />
      <IntroButton
        to="/"
        onClick={handleClick}
        className="intro__button button"
      >
        <Icon name="arrow" width={20} height={14} />
        <span>{t('slider.intro.buttonCaption')}</span>
      </IntroButton>
    </Intro>
  );
};
