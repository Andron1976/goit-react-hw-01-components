import s from './statistics.module.css';
import PropTypes from "prop-types";
export const Statistics = ({stats, title}) => {
return (
<section className={s.statistics}>
{title && <h2 className={s.title}>{title}</h2>}
  <ul className={s.statList}>
    {stats.map(({ id, label, percentage }) => (
        <li className={s.item} key = {id}>
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}%</span>
      </li>
))}
  </ul>
</section>
);
};

Statistics.propTypes = {
title: PropTypes.string.isRequired,
stats: PropTypes.shape({label: PropTypes.string, percentage: PropTypes.number}),
};