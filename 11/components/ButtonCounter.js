export default {
  name: 'ButtonCounter',
  data: function () {
    return {
      count: 0,
    }
  },
  template: `<button @click='count++'>You clicked me {{ count }} times.</button>`,
}