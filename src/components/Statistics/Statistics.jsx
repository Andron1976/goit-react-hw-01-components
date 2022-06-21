// import styles from './statistics.module.css';
export const Statistics = ({stats, title}) => {
return (
<section className="statistics">
  {title && <h2 className="title">{title}</h2>}
  <ul className="stat-list">
    {stats.map(({ id, label, persentage }) => (
        <li className="item" key = {id}>
        <span className="label">{label}</span>
        <span className="percentage">{persentage}</span>
      </li>
))}
  </ul>
</section>
);
};