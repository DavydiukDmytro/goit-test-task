import styled from '@emotion/styled';

export const Container = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  margin: 20px;
  padding-top: 28px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  text-align: center;
`;

export const Svg = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const ImgBackdrop = styled.img`
  margin: 0 auto 18px auto;

  width: 308px;
  height: 168px;
`;
export const Img = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const DecorativeLine = styled.div`
  position: relative;
  margin-bottom: 62px;
  height: 8px;
  width: 100%;
  background: var(--color-primary);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Elips = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: var(--color-primary);
  text-transform: uppercase;
  margin-bottom: 16px;
  &.margin_bottom {
    margin-bottom: 26px;
  }
`;

export const Btn = styled.button`
  padding: 14px 0;
  width: 196px;
  text-align: center;
  background-color: var(--color-primary);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  color: var(--color-secondary-text);

  &:hover,
  &:focus {
    background-color: var(--color-secondary-bg);
  }

  &.active {
    background-color: var(--color-secondary-bg);

    &:hover,
    &:focus {
      background-color: var(--color-primary);
    }
  }
`;
