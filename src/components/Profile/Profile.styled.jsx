import styled from '@emotion/styled';

export const ProfileCard = styled.div`
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
`;

export const Avatar = styled.img`
    margin-bottom: 15px;
    width: 200px;
`;

export const Name = styled.p`
    margin-bottom: 10px;
    font-family: Montserrat, sans-serif;
    font-weight: 700px;
    font-size: 28px;
    color: #000;
`;

export const Tag = styled.p`
    margin-bottom: 10px;
    font-size: 20px;
    color: gray;
`;

export const Location = styled.p`
    margin-bottom: 30px;
    font-size: 20px;
    color: gray;
`;

export const Stats = styled.ul`
    display: flex;
    justify-content: space-around;
    border-top: 2px solid rgba(33, 33, 33, 0.2);
    background-color: #F5F4FA;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 30px;
    border-right: 2px solid rgba(33, 33, 33, 0.2);
    
    &:last-child {
        border-right: none;
    }
`;

export const Label = styled.span`
    margin-bottom: 10px;
    font-size: 18px;
    color: gray;
`;

export const Quantity = styled.span`
    font-size: 18px;
    font-weight: 700px;
    color: #000;
`;