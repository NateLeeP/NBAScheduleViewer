

const createTimeRange = (time) => {
  var startDate = new Date(time);
  var endDate = new Date(time);
  startDate.setHours(startDate.getHours() - 2);
  endDate.setHours(endDate.getHours() + 4);

  startTime = `${startDate.getUTCFullYear()}-${startDate.getUTCMonth() + 1}-${startDate.getUTCDate()}T${startDate.getUTCHours()}:00:00Z`
  endTime = `${endDate.getUTCFullYear()}-${endDate.getUTCMonth() + 1}-${endDate.getUTCDate()}T${endDate.getUTCHours()}:00:00Z`
  return [startTime, endTime];

}

const months = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
}

let [startDate, endDate] = createTimeRange('2020-12-14T00:00:00.000Z')


//console.log(typeof(`${startDate.getUTCFullYear()}-${startDate.getUTCMonth() + 1}-${startDate.getUTCDate()}T${startDate.getUTCHours()}:00:00Z`))



//date.setHours(date.getHours() - 2);


exports.createTimeRange = createTimeRange;
exports.months = months;

