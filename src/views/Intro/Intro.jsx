/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  Intro,
  IntroLead,
  IntroTitle,
  IntroLink,
  IntroElementCell1,
  IntroElementCell2,
  IntroElementCell3,
  IntroElementCell4,
  IntroElementSperm,
  IntroElements,
} from './Intro.styles.jsx';
import Icon from '../../components/Icon/Icon.jsx';
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
import { next } from '../../store/slider/slider.slice';

export default () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleClick = () => dispatch(next());

  return (
    <Intro className="intro">
      <IntroElements className="intro__elements">
        <IntroElementCell1
          className="intro__element intro__element--cell1"
          srcSet={`${cell1Image} 1x, ${cell1ImageRetina} 2x`}
          alt="cell"
          width="63"
          height="57"
        ></IntroElementCell1>
        <IntroElementCell2
          className="intro__element intro__element--cell2"
          srcSet={`${cell2Image} 1x, ${cell2ImageRetina} 2x`}
          alt="cell"
          width="111"
          height="114"
        ></IntroElementCell2>
        <IntroElementCell3
          className="intro__element intro__element--cell3"
          srcSet={`${cell3Image} 1x, ${cell3ImageRetina} 2x`}
          alt="cell"
          width="228"
          height="224"
        ></IntroElementCell3>
        <IntroElementCell4
          className="intro__element intro__element--cell4"
          srcSet={`${cell4Image} 1x, ${cell4ImageRetina} 2x`}
          alt="cell"
          width="73"
          height="71"
        ></IntroElementCell4>
        <IntroElementSperm
          className="intro__element intro__element--sperm"
          srcSet={`${SpermImage} 1x, ${SpermImageRetina} 2x`}
          alt="cell"
          width="592"
          height="93"
        ></IntroElementSperm>
      </IntroElements>
      <IntroLead className="intro__lead">{t('slider.intro.lead')}</IntroLead>
      <IntroTitle
        className="intro__title"
        dangerouslySetInnerHTML={{ __html: t('slider.intro.title') }}
      ></IntroTitle>
      <IntroLink to="/" onClick={handleClick} className="intro__link">
        <Icon name="arrow" width={20} height={14} />
        <span>Что дальше?</span>
      </IntroLink>
    </Intro>
  );
};
