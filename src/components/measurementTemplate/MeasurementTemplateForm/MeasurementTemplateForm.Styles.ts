import {makeStyles} from '@material-ui/core';

const useMeasurementTemplateFormStyles = makeStyles(() => ({
  nameTextField: {
    width: '100%',
    marginBottom: 24,
  },
  attachToText: {
    fontSize: 18,
    lineHeight: '25px',
    letterSpacing: '0px',
  },
  changeAttachmentBtn: {
    color: '#0070D7',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: 16,
    lineHeight: '22px',
    letterSpacing: 0,
  },
  button: {
    paddingLeft: 15,
    background: '#E8E8E8',
    marginBottom: 25,
  },
  defaultTemplateSwitch: {
    margin: 0,
  },
}));

export default useMeasurementTemplateFormStyles;
