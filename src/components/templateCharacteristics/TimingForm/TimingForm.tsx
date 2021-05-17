import {FC, useState} from 'react';
// import useTimingForm from '../../hooks/useTimingForm';
import useTimingFormStyles from './TimingForm.Styles';
import {TextareaAutosize} from '@material-ui/core';
import ChipsSelect from './components/ChipsSelect';
import ChipsMultipleSelect from './components/ChipsMultipleSelect';

export interface TimingFormProps {
  title: string;
}

const measurementPeriodicities = [
  {id: 1, text: 'Ежедневно'},
  {id: 2, text: 'Гибкий график'},
  {id: 3, text: 'Дни недели'},
];

const weekdays = [
  {id: 1, text: 'Пн'},
  {id: 2, text: 'Вт'},
  {id: 3, text: 'Ср'},
  {id: 4, text: 'Чт'},
  {id: 5, text: 'Пт'},
  {id: 6, text: 'Сб'},
  {id: 7, text: 'Вс'},
];

const measurementMultiplicities = [
  {id: 1, text: '1 раз в сутки'},
  {id: 2, text: '2 раза в день'},
  {id: 3, text: '3 раза в день'},
];

const measurementTimes = [
  {id: 1, text: 'Утро'},
  {id: 2, text: 'День'},
  {id: 3, text: 'Вечер'},
  {id: 4, text: 'Ночь'},
];

const measurementsCharacteristics = [
  {id: 1, text: 'Натощак'},
  {id: 2, text: 'Во время еды'},
  {id: 3, text: 'После еды'},
];

interface Data {
  measurementPeriodicity: string | number | object;
  measurementMultiplicity: string | number | object;
  measurementCharacteristic: string | number | object;
  weekdays: string[] | number[] | object[];
  measurementTimes: string[] | number[] | object[];
}

const TimingForm: FC<TimingFormProps> = ({title}) => {
  const classes = useTimingFormStyles();
  const [data, setData] = useState<Data>({
    measurementPeriodicity: {id: 1, text: 'Ежедневно'},
    measurementMultiplicity: {id: 1, text: '1 раз в сутки'},
    measurementCharacteristic: {id: 1, text: 'Натощак'},
    weekdays: [],
    measurementTimes: [],
  });

  const handleChange = (item: {}, prop: string) => {
    setData({...data, [prop]: item});
  };

  const handleMultipleChange = (items: string[] | number[] | object[], prop: string) => {
    setData({...data, [prop]: items});
  };

  return (
    <div>
      <h1 className={classes.title}>{title}</h1>

      <ChipsSelect
        value={data.measurementPeriodicity}
        label="Периодичность измерения"
        items={measurementPeriodicities}
        itemValue="id"
        itemWidth={150}
        onChange={(item: any) => handleChange(item, 'measurementPeriodicity')}
      />

      <ChipsMultipleSelect
        value={data.weekdays}
        label="Дни недели"
        items={weekdays}
        itemValue="id"
        returnObject
        itemWidth={70}
        onChange={(items: string[] | number[] | object[]) => handleMultipleChange(items, 'weekdays')}
      />

      <ChipsSelect
        value={data.measurementMultiplicity}
        label="Кратность измерения"
        items={measurementMultiplicities}
        itemValue="id"
        itemWidth={150}
        onChange={(item: any) => handleChange(item, 'measurementMultiplicity')}
      />

      <ChipsMultipleSelect
        value={data.measurementTimes}
        label="Время измерения"
        items={measurementTimes}
        itemValue="id"
        itemWidth={100}
        onChange={(items: string[] | number[] | object[]) => handleMultipleChange(items, 'measurementTimes')}
      />

      <ChipsSelect
        value={data.measurementCharacteristic}
        label="Характеристики измерения"
        items={measurementsCharacteristics}
        itemValue="id"
        returnObject
        itemWidth={150}
        onChange={(item: any) => handleChange(item, 'measurementCharacteristic')}
      />

      <label className={classes.label}>Комментарии</label>

      <TextareaAutosize rowsMin={10} placeholder="ваши комментария" className={classes.textArea} />
    </div>
  );
};

export default TimingForm;
