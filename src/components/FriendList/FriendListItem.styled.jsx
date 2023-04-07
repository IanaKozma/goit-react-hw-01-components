import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StatusTrue = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: #1b9c26;
`;

export const StatusFalse = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: #a82929;
`;

export const Avatar = styled.img`
  padding: 15px;
  margin-right: 20px;
  border: 1px solid #ccc;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;