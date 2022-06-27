import s from './statistics.module.css';
import PropTypes from "prop-types";
const colors = [
  'red',
  'navy',
  'lightblue',
  'green',
  'yellow'
];
export const Statistics = ({stats, title}) => {
  console.log({stats});
return (
<section className={s.statistics}>
{title && <h2 className={s.title}>{title}</h2>}
  <ul className={s.statList} >
    {stats.map(({ id, label, percentage }, index) => (
        <li className={s.item} key = {id} style={{backgroundColor: colors[index%5]}}>
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