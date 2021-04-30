import API from '../api';

export default class MeasurementLogTemplate {
  constructor(template = {}) {}

  static getDepartments = () => API().get('/measurementLog/templateBranches');

  static get = () => API().get('/measurementLog/template');
}
