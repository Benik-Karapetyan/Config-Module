import {FC, useState} from 'react';
import useTimingForm from '../../../hooks/useTimingForm';
import useTimingFormStyles from './TimingForm.Styles';
import {TextareaAutosize} from '@material-ui/core';
import ChipsSelect from './components/ChipsSelect';
import ChipsMultipleSelect from './components/ChipsMultipleSelect';

export interface TimingFormProps {
  title: string;
}

const periodicalMeasurements = [
  {id: 1, text: 'Ежедневно'},
  {id: 2, text: 'Гибкий график'},
  {id: 3, text: 'Дни недели'},
];

const multiplicityMeasurements = [
  {id: 1, text: '1 раз в сутки'},
  {id: 2, text: '2 раза в день'},
  {id: 3, text: '3 раза в день'},
];

const measurementsCharacteristics = [
  {id: 1, text: 'Натощак'},
  {id: 2, text: 'Во время еды'},
  {id: 3, text: 'После еды'},
];

const TimingForm: FC<TimingFormProps> = ({title}) => {
  const classes = useTimingFormStyles();
  const [weekdays, setWeekdays] = useState([
    {text: 'Пн', selected: false},
    {text: 'Вт', selected: false},
    {text: 'Ср', selected: false},
    {text: 'Чт', selected: false},
    {text: 'Пт', selected: false},
    {text: 'Сб', selected: false},
    {text: 'Вс', selected: false},
  ]);
  const [measurementTimes, setMeasurementTimes] = useState([
    {text: 'Утро', selected: false},
    {text: 'День', selected: false},
    {text: 'Вечер', selected: false},
    {text: 'Ночь', selected: false},
  ]);

  const handleWeekdaySelect = (index: number) => {
    const newWeekdays = weekdays.map((weekday) => ({...weekday}));
    newWeekdays[index].selected = !newWeekdays[index].selected;
    setWeekdays(newWeekdays);
  };

  const handleMeasurementTimeSelect = (index: number) => {
    const newMeasurementTimes = measurementTimes.map((measurementTime) => ({...measurementTime}));
    newMeasurementTimes[index].selected = !newMeasurementTimes[index].selected;
    setMeasurementTimes(newMeasurementTimes);
  };

  return (
    <div>
      <h1 className={classes.title}>{title}</h1>

      <ChipsSelect label="Периодичность измерения" items={periodicalMeasurements} itemWidth={150} />

      <ChipsMultipleSelect label="Дни недели" items={weekdays} itemWidth={70} />

      <ChipsSelect label="Кратность измерения" items={multiplicityMeasurements} itemWidth={150} />

      <ChipsMultipleSelect label="Время измерения" items={measurementTimes} itemWidth={100} />

      <ChipsSelect label="Характеристики измерения" items={measurementsCharacteristics} itemWidth={150} />

      <label className={classes.label}>Комментарии</label>

      <TextareaAutosize rowsMin={10} placeholder="ваши комментария" className={classes.textArea} />
    </div>
  );
};

export default TimingForm;
