import {FC, useEffect} from 'react';
import Filters from './components/Filters';
import TemplatesTable from './components/TemplatesTable';
import './measurementTemplates.css';

interface MeasurementTemplatesProps {}

const MeasurementTemplates: FC<MeasurementTemplatesProps> = () => {
  const handleFilter = (filters: {}) => {
    console.log(filters);
  };

  return (
    <div>
      <h1 className="main-title">Шаблоны журнала измерений</h1>
      <Filters onFilter={handleFilter} />

      <TemplatesTable />
    </div>
  );
};

export default MeasurementTemplates;
