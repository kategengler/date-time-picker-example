import Component from '@ember/component';
import layout from '../templates/components/date-picker';
import moment from 'moment';

export default Component.extend({
  layout,
  tagName: '',
  inputClass: '',
  value: null,
  dateFormat: 'DD/MM/YYYY',
  timeFormat: 'HH:mm',
  onUpdate() {
    throw new Error("When using {{date-picker}} you must pass an `onUpdate` action");
  },
  updateValueFromInput(newValue) {
    let originalDate = moment(this.value, `${this.dateFormat} ${this.timeFormat}`);
    let timeString = moment(originalDate).format(this.timeFormat);
    let newDateString = moment(newValue, this.dateFormat).format(this.dateFormat);
    let newDateTime = moment(`${newDateString} ${timeString}`, `${this.dateFormat} ${this.timeFormat}`);
    this.onUpdate(newDateTime);
  },
  doNotCloseOnEnter(dropdown, e) {
    if (dropdown.isOpen && e.keyCode === 13) {
      return false;
    }
  },
});
