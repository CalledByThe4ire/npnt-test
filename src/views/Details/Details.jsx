/* eslint-disable import/no-anonymous-default-export */

import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CustomScroll from 'react-custom-scroll';
import 'react-custom-scroll/dist/customScroll.css';
import {
  Details,
  DetailsTitle,
  DetailsPanel,
  DetailsPanelContent,
  DetailsPanelText,
  DetailsElements,
  DetailsElementSperm1,
  DetailsElementSperm2,
  DetailsElementSperm3,
  DetailsElementSperm4,
  DetailsElementSperm5,
} from './Details.styles.jsx';
import sperm1Image from '../../assets/images/details/details__element--sperm1.png';
import sperm1ImageRetina from '../../assets/images/details/details__element--sperm1@2x.png';
import sperm2Image from '../../assets/images/details/details__element--sperm2.png';
import sperm2ImageRetina from '../../assets/images/details/details__element--sperm2@2x.png';
import sperm3Image from '../../assets/images/details/details__element--sperm3.png';
import sperm3ImageRetina from '../../assets/images/details/details__element--sperm3@2x.png';
import sperm4Image from '../../assets/images/details/details__element--sperm4.png';
import sperm4ImageRetina from '../../assets/images/details/details__element--sperm4@2x.png';
import sperm5Image from '../../assets/images/details/details__element--sperm5.png';
import sperm5ImageRetina from '../../assets/images/details/details__element--sperm5@2x.png';

export default () => {
  const { t } = useTranslation();
  const panelContentRef = useRef(null);
  const panelTextRef = useRef(null);
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    if (panelContentRef.current && panelTextRef.current) {
      if (
        panelTextRef.current.clientHeight > panelContentRef.current.clientHeight
      ) {
        setHasScroll(true);
      }
    }
  }, [hasScroll, setHasScroll]);
  return (
    <Details className="details">
      <DetailsElements className="details__elements">
        <DetailsElementSperm1
          className="details__element details__element--sperm1"
          srcSet={`${sperm1Image} 1x, ${sperm1ImageRetina} 2x`}
          alt="cell"
          width="1141"
          height="532"
        ></DetailsElementSperm1>
        <DetailsElementSperm2
          className="details__element details__element--sperm2"
          srcSet={`${sperm2Image} 1x, ${sperm2ImageRetina} 2x`}
          alt="cell"
          width="731"
          height="342"
        ></DetailsElementSperm2>
        <DetailsElementSperm3
          className="details__element details__element--sperm3"
          srcSet={`${sperm3Image} 1x, ${sperm3ImageRetina} 2x`}
          alt="cell"
          width="414"
          height="196"
        ></DetailsElementSperm3>
        <DetailsElementSperm4
          className="details__element details__element--sperm4"
          srcSet={`${sperm4Image} 1x, ${sperm4ImageRetina} 2x`}
          alt="cell"
          width="731"
          height="342"
        ></DetailsElementSperm4>
        <DetailsElementSperm5
          className="details__element details__element--sperm5"
          srcSet={`${sperm5Image} 1x, ${sperm5ImageRetina} 2x`}
          alt="cell"
          width="327"
          height="158"
        ></DetailsElementSperm5>
      </DetailsElements>
      <DetailsTitle>
        текст
        <br />
        сообщения
      </DetailsTitle>
      <DetailsPanel className="panel" hasScroll={hasScroll}>
          <CustomScroll allowOuterScroll={true} rtl={true}>
            <DetailsPanelContent
              className="panel__content"
              ref={panelContentRef}
            >
              <DetailsPanelText
                className="panel__text"
                ref={panelTextRef}
                hasScroll={hasScroll}
                dangerouslySetInnerHTML={{
                  __html: t('slider.details.text', { returnObjects: true }).join('')
                }}
              >
              </DetailsPanelText>
            </DetailsPanelContent>
          </CustomScroll>
      </DetailsPanel>
    </Details>
  );
};
