import PropTypes from 'prop-types';
import style from './Statistic.module.css'

export const Statistic = ({label, percentage }) => {
    return (
        <li className={style.StatisticList}>
            <div className={style.infoStatistic}>
        <span className={style.labelStatistic}>{label}</span>
                <span className={style.labelPercentage}>{percentage}%</span>
                </div>
        </li>
    )
}

Statistic.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
}