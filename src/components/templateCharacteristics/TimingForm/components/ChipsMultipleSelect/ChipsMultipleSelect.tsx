import {FC} from 'react';
import useTimingFormStyles from '../../TimingForm.Styles';
import {Grid, Divider, Chip} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

export interface ChipsSelectMultipleProps {
  value: string[] | number[] | object[];
  label: string;
  items: any[];
  itemText?: string;
  itemValue?: string;
  returnObject?: boolean;
  itemWidth?: string | number;
  onChange: Function;
}

const ChipsSelectMultiple: FC<ChipsSelectMultipleProps> = ({
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

  const calculateSelected = (item: string | number | object) => {
    if (returnObject) {
      // @ts-ignore
      return value.find((val) => val[itemValue] === item[itemValue]);
    } else {
      // @ts-ignore
      return value.find((val) => val === item[itemValue]);
    }
  };

  const handleSelect = (item: any) => {
    if (returnObject) {
      // @ts-ignore
      if (value.find((val) => val[itemValue] === item[itemValue])) {
        // @ts-ignore
        let newValue = value.map((val) => ({...val}));
        // @ts-ignore
        newValue = newValue.filter((val) => val[itemValue] !== item[itemValue]);

        onChange(newValue);
      } else {
        onChange([...value, item]);
      }
    } else {
      // @ts-ignore
      let newValue = [...value];
      newValue = newValue.filter((val) => typeof val !== 'object');

      // @ts-ignore
      if (value.find((val) => val === item[itemValue])) {
        // @ts-ignore
        newValue = newValue.filter((val) => val !== item[itemValue]);

        onChange(newValue);
      } else {
        onChange([...newValue, item[itemValue]]);
      }
    }
  };

  return (
    <Grid container className="mb-5">
      <Divider orientation="vertical" flexItem className="mr-12" />

      <Grid className="py-2">
        <label className={classes.label}>{label}</label>

        {items.map((item, i) => (
          <Chip
            key={item[itemValue]}
            icon={calculateSelected(item) ? <DoneIcon /> : <div></div>}
            color={calculateSelected(item) ? 'primary' : undefined}
            label={item[itemText]}
            className={i === 0 ? '' : 'mx-3'}
            style={{minWidth: itemWidth}}
            clickable
            onClick={() => handleSelect(item)}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default ChipsSelectMultiple;
