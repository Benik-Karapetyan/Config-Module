import {FC, useState} from 'react';
import useTimingFormStyles from '../../TimingForm.Styles';
import {Grid, Chip} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

export interface ChipsSelectProps {
  label: string;
  items: any[];
  itemText?: string;
  itemValue?: string;
  itemWidth: string | number;
}

const ChipsSelect: FC<ChipsSelectProps> = ({label, items, itemText = 'text', itemValue = 'value', itemWidth}) => {
  const classes = useTimingFormStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Grid className="mb-7">
      <label className={classes.label}>{label}</label>

      {items.map((item, i) => (
        <Chip
          key={item.id}
          icon={selectedIndex === i ? <DoneIcon /> : <div></div>}
          color={selectedIndex === i ? 'primary' : undefined}
          label={item[itemText]}
          className={i === 1 ? 'mx-3' : ''}
          style={{minWidth: itemWidth}}
          clickable
          onClick={() => handleSelect(i)}
        />
      ))}
    </Grid>
  );
};

export default ChipsSelect;
