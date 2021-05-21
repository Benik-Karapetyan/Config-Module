import React, {FC} from 'react';
import useTimingForm from '../../../hooks/useTimingForm';
import useTimingFormStyles from './TimingForm.Styles';
import {TextField} from '@material-ui/core';
import ChipsSelect from './components/ChipsSelect';
import ChipsMultipleSelect from './components/ChipsMultipleSelect';
import {TemplateTiming} from '../MeasurementTemplateForm/types';

export interface TimingFormProps {
  tag?: typeof React.Component | string;
  title?: string;
  data: TemplateTiming;
  onTimingChange: Function;
}

const TimingForm: FC<TimingFormProps> = ({tag, title, data, onTimingChange}) => {
  const WrapperTag = tag || 'form';
  const classes = useTimingFormStyles();
  const {
    measurementPeriodicities,
    weekdays,
    measurementMultiplicities,
    measurementTimes,
    measurementsCharacteristics,
    handleCommentChange,
    handleChange,
    handleMultipleChange,
  } = useTimingForm(data, onTimingChange);

  return (
    <WrapperTag>
      <h1 className={classes.title}>{title}</h1>

      <ChipsSelect
        value={data?.timing?.type}
        label="Периодичность измерения"
        items={measurementPeriodicities}
        itemValue="type"
        itemWidth={150}
        onChange={(item: number) => handleChange(item, 'type')}
      />

      {data?.timing?.type === 3 && (
        <ChipsMultipleSelect
          value={data?.timing?.dayOfWeek}
          label="Дни недели"
          items={weekdays}
          itemWidth={70}
          onChange={(items: string[] | number[] | object[]) => handleMultipleChange(items, 'dayOfWeek')}
        />
      )}

      <ChipsSelect
        value={data?.timing?.period}
        label="Кратность измерения"
        items={measurementMultiplicities}
        itemWidth={150}
        onChange={(item: any) => handleChange(item, 'period')}
      />

      <ChipsMultipleSelect
        value={data?.timing?.whenOfDay}
        label="Время измерения"
        items={measurementTimes}
        itemWidth={100}
        onChange={(items: string[] | number[] | object[]) => handleMultipleChange(items, 'whenOfDay')}
      />

      <ChipsSelect
        value={data?.timing?.whenOfCase}
        label="Характеристики измерения"
        items={measurementsCharacteristics}
        itemWidth={150}
        onChange={(item: any) => handleChange(item, 'whenOfCase')}
      />

      <TextField
        value={data.comment}
        label="Комментарии"
        placeholder="ваши комментария"
        className={classes.textArea}
        variant="outlined"
        multiline
        rows={10}
        onChange={handleCommentChange}
      />
    </WrapperTag>
  );
};

export default TimingForm;
