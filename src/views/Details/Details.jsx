/* eslint-disable import/no-anonymous-default-export */

import React, { useEffect, useRef, useState } from 'react';
import CustomScroll from 'react-custom-scroll';
import 'react-custom-scroll/dist/customScroll.css';
import {
  Details,
  DetailsTitle,
  DetailsText as p,
  DetailsPanel,
  DetailsPanelInner,
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
        <DetailsPanelInner className="panel__inner" hasScroll={hasScroll}>
          <CustomScroll allowOuterScroll={true} rtl={true}>
            <DetailsPanelContent
              className="panel__content"
              ref={panelContentRef}
            >
              <DetailsPanelText
                className="panel__text"
                ref={panelTextRef}
                hasScroll={hasScroll}
              >
                <p>
                  <b>Сперматозoид</b>&nbsp;(от&nbsp;др.-греч.
                  &sigma;&pi;έ&rho;&mu;&alpha; род.&nbsp;п.
                  &sigma;&pi;έ&rho;&mu;&alpha;&tau;&omicron;&sigmaf; здесь
                  &laquo;сперма&raquo; + &zeta;&omega;ή &laquo;жизнь&raquo; +
                  &epsilon;ἶ&delta;&omicron;&sigmaf; &laquo;вид, облик&raquo;,
                  лат. spermatozoon, spermium)&nbsp;&mdash; мужская половая
                  клетка (гамета) размножающихся посредством оогамии организмов.
                  Сперматозоиды обычно обладают способностью к&nbsp;активному
                  движению и&nbsp;служат для оплодотворения женской
                  гаметы&nbsp;&mdash; яйцеклетки. Обычно они значительно меньше
                  яйцеклеток, поскольку не&nbsp;содержат столь значительного
                  количества цитоплазмы и&nbsp;производятся организмом
                  одновременно в&nbsp;значительном количестве[1].
                </p>
                <p>
                  Типичное строение сперматозоида отражает форму общего предка
                  животных и&nbsp;грибов: одноклеточный ядерный организм,
                  передвигающийся за&nbsp;счёт жгутика в&nbsp;задней части,
                  используя его подобно хвосту. Обширная группа происходящих
                  от&nbsp;него организмов включает в&nbsp;себя животных,
                  большинство грибов и&nbsp;некоторые группы протистов
                  и&nbsp;называется кланом заднежгутиковых. Большинство других
                  эукариот со&nbsp;жгутиками имеют их&nbsp;в&nbsp;передней
                  части.
                </p>
                <p>
                  В&nbsp;широком смысле слова по&nbsp;традиции сперматозоидами
                  иногда называют мужские половые клетки также у&nbsp;растений,
                  к&nbsp;ним применяют также термины спермии или антерозоиды
                  (их&nbsp;применяют также к&nbsp;традиционно сближавшимся
                  с&nbsp;растениями грибам).
                </p>
              </DetailsPanelText>
            </DetailsPanelContent>
          </CustomScroll>
        </DetailsPanelInner>
      </DetailsPanel>
    </Details>
  );
};
