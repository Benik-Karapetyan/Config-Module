import {FC} from 'react';
import useTimingFormStyles from '../../TimingForm.Styles';
import {Grid, Divider, Chip} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

export interface ChipsSelectMultipleProps {
  label: string;
  items: any[];
  itemText?: string;
  itemValue?: string;
  itemWidth?: string | number;
}

const ChipsSelectMultiple: FC<ChipsSelectMultipleProps> = ({label, items, itemText, itemValue, itemWidth = 'auto'}) => {
  const classes = useTimingFormStyles();

  const handleSelect = (index: number) => {
    console.log(index);
    // const newWeekdays = weekdays.map((weekday) => ({ ...weekday }));
    // newWeekdays[index].selected = !newWeekdays[index].selected;
    // setWeekdays(newWeekdays);
  };

  return (
    <Grid container className="mb-5">
      <Divider orientation="vertical" flexItem className="mr-12" />

      <Grid className="py-2">
        <label className={classes.label}>{label}</label>

        {items.map((item, i) => (
          <Chip
            key={item.text}
            icon={item.selected ? <DoneIcon /> : <div></div>}
            color={item.selected ? 'primary' : undefined}
            label={item.text}
            className={i === 0 ? '' : 'mx-3'}
            style={{minWidth: itemWidth}}
            clickable
            onClick={() => handleSelect(i)}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default ChipsSelectMultiple;
