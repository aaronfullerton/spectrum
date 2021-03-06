// @flow
import styled from 'styled-components';
import theme from 'shared/theme';
import Link from 'src/components/link';

export const Bar = styled.div`
  display: flex;
  background: ${theme.brand.wash};
  align-items: center;
  border-bottom: 1px solid ${theme.brand.border};
  color: ${theme.brand.default};
  font-size: 14px;
  font-weight: 400;
  padding: 0 8px 0 0;
  justify-content: center;
  flex: 0 0 48px;
  max-height: 48px;
`;

export const Content = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.2;
  padding: 12px 0;
  flex: 1 0 auto;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 12px;
    flex: 1 1 auto;

    .icon {
      margin-right: 8px;
    }
  }
`;

export const Bold = styled.span`
  margin: 0 4px 0 8px;
  font-weight: 500;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Dismiss = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  padding-bottom: 4px;
  padding: 0 12px 4px 12px;
  cursor: pointer;
`;
