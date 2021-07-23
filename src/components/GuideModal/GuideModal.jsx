/* eslint-disable import/no-anonymous-default-export */

import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { ITEMS_PER_PAGE } from '../../utils/constants/guide.modal.constants';
import { formatNumber } from '../../utils/helpers/number.helpers';
import Icon from '../Icon/Icon.jsx';
import {
  toggle,
  prev,
  next,
  goto,
  getItemsCount,
  modalSelector,
} from '../../store/modal/modal.slice';
import {
  GuideModal,
  GuideModalOverlay,
  GuideModalSlider,
  GuideModalSlide,
  GuideModalContent,
  GuideModalClose,
  GuideModalAdvantagesList,
  GuideModalAdvantagesListItem,
  GuideModalControlsList,
  GuideModalControlsListItemPrev,
  GuideModalControlsListItemNext,
  GuideModalControlsListItemPagination,
  GuideModalPagination,
  GuideModalPaginationItem,
  GuideModalPaginationDot,
  GuideModalPaginationDotActive,
} from './GuideModal.styles.jsx';
import { GuideLead, GuideTitle } from '../../views/Guide/Guide.styles.jsx';

export default () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const {
    slider: { currentIndex },
  } = useSelector(modalSelector);

  const handleChangeIndex = (index) => dispatch(goto(index));

  const handleNextClick = () => {
    dispatch(next());
  };

  const handlePrevClick = () => {
    dispatch(prev());
  };

  const handleCloseClick = useCallback(() => {
    dispatch(goto(0));
    dispatch(toggle());
  }, [dispatch]);

  const handleModalOverlayClick = () => {
    handleCloseClick();
  };

  const advantages = _.chunk(
    t('slider.guide.advantages.list', { returnObjects: true }),
    ITEMS_PER_PAGE
  );

  useEffect(() => {
    dispatch(getItemsCount(advantages.length));
  }, [dispatch, advantages.length]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        handleCloseClick();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [handleCloseClick]);

  const renderModalContent = () => {
    if (advantages.length === 0) {
      return (
        <>
          <GuideLead className="guide-modal__lead">
            {t('slider.guide.modalLead')}
          </GuideLead>
          <GuideTitle
            className="guide-modal__title"
            dangerouslySetInnerHTML={{ __html: t('slider.guide.title') }}
          ></GuideTitle>
          <GuideModalClose
            to="/#"
            className="guide__close"
            onClick={handleCloseClick}
          >
            <Icon name="cross" width={34} height={34} />
          </GuideModalClose>

          <GuideModalAdvantagesList className="guide__advantages-list guide-advantages-list">
            <GuideModalAdvantagesListItem
              className="guide-advantages-list__item"
              dangerouslySetInnerHTML={{
                __html: `<p>${t('slider.guide.advantages.message')}</p>`,
              }}
            ></GuideModalAdvantagesListItem>
          </GuideModalAdvantagesList>
        </>
      );
    } else if (advantages.length === 1) {
      return (
        <>
          <GuideLead className="guide-modal__lead">
            {t('slider.guide.modalLead')}
          </GuideLead>
          <GuideTitle
            className="guide-modal__title"
            dangerouslySetInnerHTML={{ __html: t('slider.guide.title') }}
          ></GuideTitle>
          <GuideModalClose
            to="/#"
            className="guide__close"
            onClick={handleCloseClick}
          >
            <Icon name="cross" width={34} height={34} />
          </GuideModalClose>

          <GuideModalAdvantagesList className="guide__advantages-list guide-advantages-list">
            {_.flatten(advantages).map((value, index) => (
              <GuideModalAdvantagesListItem
                key={uuidv4()}
                className="guide-advantages-list__item"
                marker={formatNumber(index + 1)}
                dangerouslySetInnerHTML={{ __html: `<p>${value}</p>` }}
              ></GuideModalAdvantagesListItem>
            ))}
          </GuideModalAdvantagesList>
        </>
      );
    }

    return (
      <>
        <GuideModalSlider className="guide-modal__slider">
          <GuideLead className="guide-modal__lead">
            {t('slider.guide.modalLead')}
          </GuideLead>
          <GuideTitle
            className="guide-modal__title"
            dangerouslySetInnerHTML={{ __html: t('slider.guide.title') }}
          ></GuideTitle>
          <GuideModalClose
            to="/#"
            className="guide__close"
            onClick={handleCloseClick}
          >
            <Icon name="cross" width={34} height={34} />
          </GuideModalClose>
          <SwipeableViews
            index={currentIndex}
            onChangeIndex={handleChangeIndex}
          >
            {advantages.map((chunk, i) => (
              <GuideModalSlide key={uuidv4()}>
                <GuideModalAdvantagesList className="guide__advantages-list guide-advantages-list">
                  {chunk.map((value, index) => (
                    <GuideModalAdvantagesListItem
                      key={uuidv4()}
                      className="guide-advantages-list__item"
                      marker={
                        i === 0
                          ? formatNumber(index + 1)
                          : formatNumber(ITEMS_PER_PAGE + (index + 1))
                      }
                      dangerouslySetInnerHTML={{ __html: `<p>${value}</p>` }}
                    ></GuideModalAdvantagesListItem>
                  ))}
                </GuideModalAdvantagesList>
              </GuideModalSlide>
            ))}
          </SwipeableViews>
          <GuideModalControlsList className="guide-modal__controls-list">
            <GuideModalControlsListItemPrev className="guide-modal-controls-list__item guide-modal-controls-list__item--prev">
              <Link to="/#" onClick={handlePrevClick}>
                <Icon name="angle-bracket" width={9} height={15} />
              </Link>
            </GuideModalControlsListItemPrev>
            <GuideModalControlsListItemPagination className="guide-modal-controls-list__item guide-modal-controls-list__item--pagination">
              <GuideModalPagination className="guide-modal__pagination guide-modal-pagination">
                {advantages.map((chunk, index) => (
                  <GuideModalPaginationItem
                    key={uuidv4()}
                    className="guide-modal-pagination__item"
                  >
                    {index === currentIndex ? (
                      <GuideModalPaginationDotActive
                        to="/#"
                        className="guide-modal-pagination__dot guide-modal-pagination__dot--active"
                        onClick={() => handleChangeIndex(index)}
                      ></GuideModalPaginationDotActive>
                    ) : (
                      <GuideModalPaginationDot
                        to="/#"
                        className="guide-modal-pagination__item guide-modal-pagination__dot"
                        onClick={() => handleChangeIndex(index)}
                      ></GuideModalPaginationDot>
                    )}
                  </GuideModalPaginationItem>
                ))}
              </GuideModalPagination>
            </GuideModalControlsListItemPagination>
            <GuideModalControlsListItemNext className="guide-modal-controls-list__item guide-modal-controls-list__item--next">
              <Link to="/#" onClick={handleNextClick}>
                <Icon name="angle-bracket" width={9} height={15} />
              </Link>
            </GuideModalControlsListItemNext>
          </GuideModalControlsList>
        </GuideModalSlider>
      </>
    );
  };

  return (
    <>
      <GuideModal className="guide__modal guide-modal">
        <GuideModalContent className="guide-modal__content">
          {renderModalContent()}
        </GuideModalContent>
      </GuideModal>
      <GuideModalOverlay onClick={handleModalOverlayClick}></GuideModalOverlay>
    </>
  );
};
