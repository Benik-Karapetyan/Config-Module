import {FC} from 'react';
import useTimingFormStyles from '../../TimingForm.Styles';
import {Grid, Chip} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

export interface ChipsSelectProps {
  value: any;
  label: string;
  items: any[];
  itemText?: string;
  itemValue?: string;
  returnObject?: boolean;
  itemWidth: string | number;
  onChange: Function;
}

const ChipsSelect: FC<ChipsSelectProps> = ({
  value,
  label,
  items,
  itemText = 'text',
  itemValue = 'value',
  returnObject,
  itemWidth = 'auto',
  onChange,
}) => {
  const classes = useTimingFormStyles();

  const calculatedValue = () => {
    return typeof value === 'object' ? value[itemValue] : value;
  };

  const handleSelect = (item: any) => {
    returnObject ? onChange(item) : onChange(item[itemValue]);
  };

  return (
    <Grid className="mb-7">
      <label className={classes.label}>{label}</label>

      {items.map((item, i) => (
        <Chip
          key={item[itemValue]}
          icon={calculatedValue() === item[itemValue] ? <DoneIcon /> : <div></div>}
          color={calculatedValue() === item[itemValue] ? 'primary' : undefined}
          label={item[itemText]}
          className={i === 1 ? 'mx-3' : ''}
          style={{minWidth: itemWidth}}
          clickable
          onClick={() => handleSelect(item)}
        />
      ))}
    </Grid>
  );
};

export default ChipsSelect;
