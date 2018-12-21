import Component from '@ember/component';
import layout from '../templates/components/date-time-picker';

export default Component.extend({
  layout,
  tagName: '',
  value: null,
  onUpdate: null,
  dateFormat: 'DD/MM/YYYY',
  timeFormat: 'HH:mm',
});
