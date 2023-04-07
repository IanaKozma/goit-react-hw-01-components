import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
  margin-bottom: 20px;
  padding-bottom: 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: #000;
  margin-bottom: 30px;
  padding-top: 30px;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  padding: 20px;
  color: #fff;
  background-color: #ccc;
`;

export const Label = styled.span`
  font-size: 12px;
  margin-bottom: 10px;
`;