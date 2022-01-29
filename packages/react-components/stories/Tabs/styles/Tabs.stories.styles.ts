import styled from 'styled-components';

export const tabsIndicator = {
  boxShadow: '0 0 16px rgba(97, 219, 251, 0.6)',
};

export const tabGroup = {
  borderBottom: '1px rgba(255, 255, 255, 0.3) solid',
};

export const activeTab = {
  color: '#65bbe1',
  textShadow: '0 0 13px rgba(97, 219, 251, 0.2)',
  transition: 'all 0.3s  ease',
};

interface TabGroupArrowStyles {
  direction: 'left' | 'right';
  disabled: boolean;
}

export const Arrow = styled.span<TabGroupArrowStyles>`
  min-width: 8px;
  min-height: 8px;
  border-top: 2px solid white;
  border-left: 2px solid white;
  transform: ${({ direction }) =>
    direction === 'left'
      ? 'translateX(5px) rotate(-45deg)'
      : 'translateX(-5px) scale(-1) rotate(-45deg)'};
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.3 : 0.5)};
  }
`;
