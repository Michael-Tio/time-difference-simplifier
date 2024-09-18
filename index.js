function getTimeDifference(date) {
  const now = new Date();
  const pastDate = new Date(date);
  
  const totalDaysDiff = Math.floor((now - pastDate) / (1000 * 60 * 60 * 24));
  const totalHoursDiff = Math.floor((now - pastDate) / (1000 * 60 * 60));
  const totalMinutesDiff = Math.floor((now - pastDate) / (1000 * 60));
  const totalSecondsDiff = Math.floor((now - pastDate) / 1000);
  
  if (totalSecondsDiff < 0) {
    return 'Invalid date.';
  }
  if (totalSecondsDiff <= 10) {
    return 'Just now';
  }
  if (totalSecondsDiff < 60) {
    return `${totalSecondsDiff} seconds ago`;
  }
  if (totalMinutesDiff < 60) {
    if (totalMinutesDiff === 1) {
    return `${totalMinutesDiff} minute ago`;
    } else {
    return `${totalMinutesDiff} minutes ago`;
    }
  }
  if (totalHoursDiff < 24) {
    if (totalHoursDiff === 1) {
      return `${totalHoursDiff} hour ago`;
    } else {
      return `${totalHoursDiff} hours ago`;
    }
  }
  if (totalDaysDiff < 7) {
    if (totalDaysDiff === 1) {
      return `${totalDaysDiff} day ago`;
    } else {
      return `${totalDaysDiff} days ago`;
    }
  }
  if (totalDaysDiff < 30) {
    if (totalDaysDiff <= 13) {
      return `${Math.floor(totalDaysDiff / 7)} week ago`;
    } else {
      return `${Math.floor(totalDaysDiff / 7)} weeks ago`;
    }
  }
  if (totalDaysDiff < 365) {
    if (totalDaysDiff <= 59) {
      return `${Math.floor(totalDaysDiff / 30)} month ago`;
    } else {
      return `${Math.floor(totalDaysDiff / 30)} months ago`;
    }
  }
  if (totalDaysDiff >= 365) {
    if (totalDaysDiff <= 729) {
      return `${Math.floor(totalDaysDiff / 365)} year ago`;
    } else {
      return `${Math.floor(totalDaysDiff / 365)} years ago`;
    }
  }
}

module.exports = { getTimeDifference };