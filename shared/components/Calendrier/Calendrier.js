import React, { useState } from 'react';
import format from 'date-fns/format';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import startOfMonth from 'date-fns/startOfMonth';
import getDay from 'date-fns/getDay';
import addMonths from 'date-fns/addMonths';
import subMonths from 'date-fns/subMonths';
import './Calendrier.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Calendrier(props) {
  let [dateContext, setDate] = useState(new Date());
  let width = props.width || '250px';
  let style = props.style || {};

  console.log('calendrier');

  function year() {
    return format(dateContext, 'yyyy');
  }

  function monthMMMM() {
    return format(dateContext, 'MMMM');
  }

  function monthMM() {
    return format(dateContext, 'MM');
  }

  function daysInMonth() {
    return getDaysInMonth(dateContext);
  }

  function currentDay() {
    return format(dateContext, 'd');
  }

  function firstDayOfMonth() {
    let firstDay = startOfMonth(dateContext);
    let firstDayOfM = firstDay.getDay();
    switch (firstDayOfM) {
      case 0:
        firstDay = 6;
        break; // dimanche
      case 1:
        firstDay = 0;
        break; // lundi
      case 2:
        firstDay = 1;
        break; // mardi
      case 3:
        firstDay = 2;
        break; // mercredi
      case 4:
        firstDay = 3;
        break; // jeudi
      case 5:
        firstDay = 4;
        break; // vendredi
      case 6:
        firstDay = 5;
        break; // samedi
      default:
        firstDay = 'No value found';
    }
    return firstDay;
  }

  function nextMonth() {
    setDate(addMonths(dateContext, 1));
  }

  function prevMonth() {
    setDate(subMonths(dateContext, 1));
  }

  function onDayClick(d) {
    let dateContext = year() + '-' + monthMM() + '-' + d;
    props.onDayClick(dateContext);
  }

  const weekdaysShort = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  const weekdaysCells = weekdaysShort.map((day) => {
    return (
      <div key={day} className="calendrier__week-day">
        {day}
      </div>
    );
  });

  const blankCells = [];
  for (let i = 0; i < firstDayOfMonth(); i++) {
    blankCells.push(
      <div key={i + 80} className="calendrier__emptySlot">
        {''}
      </div>,
    );
  }

  const daysInMonthCells = [];
  for (let d = 1; d <= daysInMonth(); d++) {
    let className =
      d === currentDay()
        ? 'calendrier__day calendrier_current-day'
        : 'calendrier__day';
    daysInMonthCells.push(
      <div key={d} onClick={() => onDayClick(d)}>
        <button className={className}>{d}</button>
      </div>,
    );
  }

  const totalCells = [...blankCells, ...daysInMonthCells];

  return (
    <div className="calendrier" style={style}>
      <div className="calendrier__date-flex">
        <div className="calendrier__year-month">
          {monthMMMM()} {year()}
        </div>
        <div className="calendrier__nav-month">
          <button onClick={prevMonth}>
            <FaChevronLeft />
          </button>
          <button onClick={nextMonth}>
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="calendrier__days-grid">
        {weekdaysCells}
        {totalCells}
      </div>
      <div className="calendrier__order">Cliquez sur une date</div>
    </div>
  );
}

export default Calendrier;
