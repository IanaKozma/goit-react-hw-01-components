import PropTypes from 'prop-types';
import { StatisticsCard, Title, StatList, Item, Label } from './Statistics.styled';

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsCard>
            {title && <Title>{title}</Title>}
            <StatList>
                {stats.map((item ) => {
                    return (
                        <Item
                            key={item.id}
                            style={{ backgroundColor: randomHexColor() }}
                        >
                            <Label>{item.label}</Label>
                            <span>{item.percentage}%</span>
                        </Item>
                    );                
                })}
            </StatList>
        </StatisticsCard>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};