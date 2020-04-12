import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

function randomBgColor() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = `rgb(${x}, ${y}, ${z})`;

  return bgColor;
}

const Statistics = ({ title, stats }) => (
  <div className={style.bgс}>
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>

      <ul className={style.statList}>
        {stats.length > 0 &&
          stats.map(el => (
            <li
              key={el.id}
              className={style.item}
              style={{ backgroundColor: `${randomBgColor()}` }}
            >
              <span className={style.label}>{el.label}</span>
              <span className={style.percentage}>{el.percentage}%</span>
            </li>
          ))}
      </ul>
    </section>
  </div>
);

Statistics.defaultProps = {
  title: '',
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
export default Statistics;
