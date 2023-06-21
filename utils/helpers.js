module.exports = {
  format_date: (date) => {
    console.log(date);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },
};
