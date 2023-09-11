import { styled } from '@superset-ui/core';

export const ControlSubSectionHeader = styled.div`
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  font-size: ${({ theme }) => theme.typography.sizes.s};
  margin-bottom: ${({ theme }) => theme.gridUnit}px;
`;
export default ControlSubSectionHeader;
