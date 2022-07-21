import { Statistic } from './Statistic';
import PropTypes from 'prop-types';


export const StatisticsBoard = ({ title, statistics }) => {
    return (
    <div>
    <h2>{title}</h2>
    <ul>  
    {statistics.map(({ id, label, percentage }) => <Statistic key={id} label={label} percentage={percentage} />)}
    </ul>
    </div>)
}


StatisticsBoard.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
}
