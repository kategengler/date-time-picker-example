import Component from '@ember/component';
import layout from '../templates/components/time-picker';
import moment from 'moment';

export default Component.extend({
  layout,
  tagName: '',
  value: null,
  timeFormat: null,
  dateFormat: null,
  onUpdate: null,
  updateTime(newTimeString) {
    let date = moment(this.value, `${this.dateFormat} ${this.timeFormat}`);
    let newTime = moment(newTimeString, this.timeFormat);
    date.hours(newTime.hours()).minutes(newTime.minutes()).seconds(newTime.seconds());
    this.onUpdate(date);
  }
});
