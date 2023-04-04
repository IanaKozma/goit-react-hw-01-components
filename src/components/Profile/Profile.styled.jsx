import styled from '@emotion/styled';

export const Profile = styled.div`
    background-color: #fff;
    border-radius: 4px;
    border: solid #000;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
`;

export const Avatar = styled.img`
    margin-bottom: 15px;
`;

export const Name = styled.p`
    margin-bottom: 10px;
    font-weight: 700px;
    font-size: 28px;
    color: #000;
`;

export const Tag = styled.p`
    margin-bottom: 10px;
    font-size: 15px;
    color: gray;
`;

export const Location = styled.p`
    margin-bottom: 30px;
    font-size: 15px;
    color: gray;
`;

export const Stats = styled.ul`
    display: flex;
    justify-content: space-between;
`;

export const Label = styled.span`
    margin-bottom: 10px;
    font-size: 15px;
    color: gray;
`;

export const Quantity = styled.span`
    font-size: 15px;
    font-weight: 500px;
    color: #000;
`;