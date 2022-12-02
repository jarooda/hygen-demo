module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'File Name: ',
    validate(value) {
      if (!value.length) {
        return 'File must have a name.'
      }
      return true
    },
  },

  //{
  //  type: 'input',
  //  name: 'route',
  //  message: 'Route path: ',
  //  validate(value) {
  //    if (!value.length) {
  //      return 'File must have a route path.'
  //    }
  //    return true
  //  },
  //},




  
  //{
  //  type: 'select',
  //  name: 'color',
  //  message: 'What kind of color the text? ',
  //  choices: [
  //    {
  //      name: 'red',
  //      message: 'Merah',
  //    },
  //    {
  //      name: 'green',
  //      message: 'Hijau',
  //    },
  //    {
  //      name: 'blue',
  //      message: 'Biru',
  //    },
  //    {
  //      name: 'yellow',
  //      message: 'Kuning',
  //    },
  //  ],
  //},


  //{
  //  type: 'multiselect',
  //  name: 'styles',
  //  message: 'Choose font styles: ',
  //  initial: ['big'],
  //  choices: [
  //    {
  //      name: 'big',
  //      message: 'Big'
  //    },
  //    {
  //      name: 'strike',
  //      message: 'Strike'
  //    },
  //    {
  //      name: 'italic',
  //      message: 'Italic'
  //    }
  //  ]
  //}
]
