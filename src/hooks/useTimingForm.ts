import {ChangeEvent} from 'react';
// import API from '../../../api';
import {TemplateTiming} from '../components/measurementTemplate/MeasurementTemplateForm/types';

const measurementPeriodicities = [
  {type: 1, text: 'Ежедневно'},
  {type: 2, text: 'Гибкий график'},
  {type: 3, text: 'Дни недели'},
];

const weekdays = [
  {text: 'Пн', value: 'mon'},
  {text: 'Вт', value: 'tue'},
  {text: 'Ср', value: 'wed'},
  {text: 'Чт', value: 'thu'},
  {text: 'Пт', value: 'fri'},
  {text: 'Сб', value: 'sat'},
  {text: 'Вс', value: 'sun'},
];

const measurementMultiplicities = [
  {text: '1 раз в сутки', value: 1},
  {text: '2 раза в день', value: 2},
  {text: '3 раза в день', value: 3},
];

const measurementTimes = [
  {text: 'Утро', value: 'MORN'},
  {text: 'День', value: 'AFT'},
  {text: 'Вечер', value: 'EVE'},
  {text: 'Ночь', value: 'NIGHT'},
];

const measurementsCharacteristics = [
  {text: 'Натощак', value: 'C'},
  {text: 'После завтрака', value: 'PCM'},
  {text: 'После ланча', value: 'PCD'},
  {text: 'После еды', value: 'PC'},
];

const useTimingForm = (data: TemplateTiming, onTimingChange: Function) => {
  // const [measurementTimes, setMeasurementTimes] = useState([]);
  // const [measurementsCharacteristics, setMeasurementsCharacteristics] = useState([]);

  // const getWhenValues = async () => {
  //   try {
  //     const {data} = await API.get('/measurementLog/whenValues');
  //     const {whenOfDays, whenOfCases} = data.data;

  //     setMeasurementTimes(whenOfDays);
  //     setMeasurementsCharacteristics(whenOfCases);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   getWhenValues();
  // }, []);

  const handleCommentChange = (e: ChangeEvent<{value: string}>) => {
    onTimingChange({...data, comment: e.target.value});
  };

  const handleChange = (item: string | number, prop: string) => {
    const timing = {...data.timing, [prop]: item};
    onTimingChange({...data, timing});
  };

  const handleMultipleChange = (items: string[] | number[] | object[], prop: string) => {
    const timing = {...data.timing, [prop]: items};
    onTimingChange({...data, timing});
  };

  return {
    measurementPeriodicities,
    weekdays,
    measurementMultiplicities,
    measurementTimes,
    measurementsCharacteristics,
    handleCommentChange,
    handleChange,
    handleMultipleChange,
  };
};

export default useTimingForm;
