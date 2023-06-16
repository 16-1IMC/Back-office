import moment from 'moment';

const DateUtils = {
    DATE_FORMAT_NUMBER: 'YYYY-MM-DD HH:mm:ss.SSS',

    formatDateNumber: function(date) {
        return date ? moment(date).format(this.DATE_FORMAT_NUMBER) : 'No Date';
    }
};

export default DateUtils;