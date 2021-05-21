import {useState, useEffect, ChangeEvent, FormEvent, SyntheticEvent} from 'react';
import API from '../app/api';
import {Value} from '@material-ui/lab';
import {
  SelectItem,
  TemplateTiming,
  CharacteristicCategory,
  MeasurementTemplate,
} from '../components/measurementTemplate/MeasurementTemplateForm/types';

class CharacteristicCategoryItem {
  id: number | string;
  templateTimings: TemplateTiming[];

  constructor(item?: CharacteristicCategory) {
    this.id = item?.id || '';
    this.templateTimings = item?.templateTimings || [];
  }
}

const useTimingForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [measurementTemplate, setMeasurementTemplate] = useState<MeasurementTemplate>({
    name: '',
    categoryId: '',
    locations: ['40da4b9d-7d7c-40a7-b903-696b0d17ecba'],
    branches: [],
    isDefault: true,
    characteristicCategories: [],
  });
  const [categories, setCategories] = useState<SelectItem[]>([]);
  const [departments, setDepartments] = useState<SelectItem[]>([]);

  const getCategories = async () => {
    try {
      const {data} = await API.get('/measurementLog/templateCategories');
      const {categories} = data.data;

      setCategories(categories);
    } catch (err) {
      console.error(err);
    }
  };

  const getDepartments = async () => {
    try {
      const {data} = await API.get('/bed-fund/branch?limit=500');
      const {items: departments} = data.data;

      setDepartments(departments);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCategories();
    getDepartments();
  }, []);

  const handleClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleNameChange = (e: ChangeEvent<{value: string}>) => {
    setMeasurementTemplate({...measurementTemplate, name: e.target.value});
  };

  const handleCategorySelect = (e: ChangeEvent<{}>, value: Value<SelectItem, false, false, false>) => {
    setMeasurementTemplate({...measurementTemplate, categoryId: value?.id});
  };

  const handleDepartmentSelect = (e: ChangeEvent<{}>, value: Value<SelectItem, false, false, false>) => {
    setMeasurementTemplate({...measurementTemplate, branches: [value?.id]});
  };

  const handleIsDefaultChange = (e: ChangeEvent<{}>, checked: boolean) => {
    setMeasurementTemplate({...measurementTemplate, isDefault: checked});
  };

  const addCategory = () => {
    const characteristicCategories = measurementTemplate.characteristicCategories.map((cat) => ({...cat}));
    characteristicCategories.push(new CharacteristicCategoryItem());
    setMeasurementTemplate({...measurementTemplate, characteristicCategories});
  };

  const deleteCategory = (index: number) => {
    const characteristicCategories = measurementTemplate.characteristicCategories.map((cat) => ({...cat}));
    characteristicCategories.splice(index, 1);
    setMeasurementTemplate({...measurementTemplate, characteristicCategories});
  };

  const handleCharacteristicCategoryChange = (categoryId: number, index: number) => {
    const characteristicCategories = measurementTemplate.characteristicCategories.map((item) => ({...item}));
    characteristicCategories[index] = {id: categoryId, templateTimings: []};
    setMeasurementTemplate({...measurementTemplate, characteristicCategories});
  };

  const handleCharacteristicParamChange = (templateTimings: TemplateTiming[], index: number) => {
    const characteristicCategories = measurementTemplate.characteristicCategories.map((item) => ({...item}));
    characteristicCategories[index].templateTimings = templateTimings;

    setMeasurementTemplate({...measurementTemplate, characteristicCategories});
  };

  const handleTimingChange = (timing: TemplateTiming, timingIndex: number, index: number) => {
    const characteristicCategories = measurementTemplate.characteristicCategories.map((item) => ({...item}));
    const templateTimings = characteristicCategories[index].templateTimings.map((item) => ({
      ...item,
    }));
    templateTimings[timingIndex] = timing;
    characteristicCategories[index].templateTimings = templateTimings;
    setMeasurementTemplate({...measurementTemplate, characteristicCategories});
  };

  const createTemplate = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await API.post('/measurementLog/template', measurementTemplate);
      setLoading(false);
      setMeasurementTemplate({
        name: '',
        categoryId: '',
        locations: ['40da4b9d-7d7c-40a7-b903-696b0d17ecba'],
        branches: [],
        isDefault: true,
        characteristicCategories: [],
      });
      setOpen(true);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  return {
    loading,
    open,
    measurementTemplate,
    categories,
    departments,
    handleClose,
    handleNameChange,
    handleCategorySelect,
    handleDepartmentSelect,
    handleIsDefaultChange,
    addCategory,
    deleteCategory,
    handleCharacteristicCategoryChange,
    handleCharacteristicParamChange,
    handleTimingChange,
    createTemplate,
  };
};

export default useTimingForm;
