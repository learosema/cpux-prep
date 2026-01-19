export default {
  check: function (label, id= null, checked = false) {
    id=id ?? label.replace(/\W+/g, '-').toLowerCase();
    return [`<input type="checkbox" `,
      `id="${label}" name="${label}" ${checked ? 'checked' : ''}>`,
      `<label for="${id}">${label}</label>`].join('');
  },
  cb: '<input type="checkbox" id="{id}">',
};
