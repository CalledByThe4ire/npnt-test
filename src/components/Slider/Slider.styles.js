import styled from 'styled-components/macro';

export const Slider = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 1024px;
  height: 768px;
  margin: auto;
  transform: translate(-50%, -50%);
  outline: 1px dashed red;
`;

export const SliderList = styled.ul`
  width: inherit;
  height: inherit;
  margin: 0;
  padding: 0;
  list-style: none;

  div {
    width: inherit;
    height: inherit;
  }
`;

export const SliderItem = styled.li`
  width: inherit;
  height: inherit;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
