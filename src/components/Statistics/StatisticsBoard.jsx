import { Statistic } from './Statistic';
import PropTypes from 'prop-types';
import style from './StatisticsBoard.module.css'


export const StatisticsBoard = ({ title, statistics }) => {
    return (
    <div>
    <h2 className={style.StatisticsTitle}>{title}</h2>
    <ul className={style.Statistics}>  
    {statistics.map(({ id, label, percentage }) => <Statistic key={id} label={label} percentage={percentage} />)}
    </ul>
    </div>)
}


StatisticsBoard.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
}
