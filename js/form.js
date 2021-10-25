let step1form1 = document.querySelector('#form-1 .item1');
let step2form1 = document.querySelector('#form-1 .item2');
let step3form1 = document.querySelector('#form-1 .item3');
let step4form1 = document.querySelector('#form-1 .item4');
let step5form1 = document.querySelector('#form-1 .item5');
let step6form1 = document.querySelector('#form-1 .item6');

let typework0 = document.querySelector('#form-1 .typework0');
let typework1_1 = document.querySelector('#form-1 .typework1-1');
let typework1_2 = document.querySelector('#form-1 .typework1-2');
let typework1_3 = document.querySelector('#form-1 .typework1-3');
let typework1_4 = document.querySelector('#form-1 .typework1-4');

let typework2_1 = document.querySelector('#form-1 .typework2-1');
let typework2_2 = document.querySelector('#form-1 .typework2-2');
let typework2_3 = document.querySelector('#form-1 .typework2-3');
let typework2_4 = document.querySelector('#form-1 .typework2-4');
let typework2_5 = document.querySelector('#form-1 .typework2-5');
let typework2_6 = document.querySelector('#form-1 .typework2-6');
let typework2_7 = document.querySelector('#form-1 .typework2-7');

let typework3_1 = document.querySelector('#form-1 .typework3-1');
let typework3_1_1 = document.querySelector('#form-1 .typework3-1-1');
let typework3_1_2 = document.querySelector('#form-1 .typework3-1-2');
let typework3_2 = document.querySelector('#form-1 .typework3-2');
let typework3_3 = document.querySelector('#form-1 .typework3-3');
let typework3_4 = document.querySelector('#form-1 .typework3-4');
let typework3_5 = document.querySelector('#form-1 .typework3-5');

let typework4_1 = document.querySelector('#form-1 .typework4-1');
let typework4_2 = document.querySelector('#form-1 .typework4-2');
let typework4_3 = document.querySelector('#form-1 .typework4-3');
let typework4_4 = document.querySelector('#form-1 .typework4-4');
let typework4_5 = document.querySelector('#form-1 .typework4-5');

let step2form2 = document.querySelector('#form-2 .item2');
let step3form2 = document.querySelector('#form-2 .item3');
let step4form2 = document.querySelector('#form-2 .item4');
let step5form2 = document.querySelector('#form-2 .item5');

let offset = 50;

step1form1.onclick = function() {
  step2form1.classList.add('active');
  setTimeout(() => window.scroll({ top: (step2form1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
};

step2form1.onclick = function() {
  step3form1.classList.add('active');
  setTimeout(() => window.scroll({ top: (step3form1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
};

step3form1.onclick = function() {
  step4form1.classList.add('active');
  setTimeout(() => window.scroll({ top: (step4form1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
};

step4form1.onclick = function() {
  step5form1.classList.add('active');
  setTimeout(() => window.scroll({ top: (step5form1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
};

step5form1.onclick = function() {
  step6form1.classList.add('active');
  setTimeout(() => window.scroll({ top: (step6form1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
};

step6form1.onclick = function() {
  typework0.classList.add('active');
  setTimeout(() => window.scroll({ top: (typework0.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
};

let radioForm1 = document.form1;
let radioForm2 = document.form2;

const handleChange = ({ target: { value, name } }) => {
  const res = `${value} ${name}`;
  switch (res) {
    case 'Да contract':
      step4form2.classList.remove('active');
      step2form2.classList.add('active');
      step5form2.classList.remove('active');
      break;
    case 'Нет contract':
      step2form2.classList.remove('active');
      step4form2.classList.add('active');
      break;
    case 'Да contractProblem':
      step4form2.classList.remove('active');
      step3form2.classList.add('active');
      break;
    case 'Нет contractProblem':
      step3form2.classList.remove('active');
      step4form2.classList.add('active');
      break;

    case 'typework1 typework':
      typework2_1.classList.remove('active');
      typework3_1.classList.remove('active');
      typework4_1.classList.remove('active');
      typework1_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (typework1_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typework2 typework':
      typework1_1.classList.remove('active');
      typework3_1.classList.remove('active');
      typework4_1.classList.remove('active');
      typework2_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (typework2_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typework3 typework':
      typework1_1.classList.remove('active');
      typework2_1.classList.remove('active');
      typework4_1.classList.remove('active');
      typework3_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (typework3_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typework4 typework':
      typework1_1.classList.remove('active');
      typework2_1.classList.remove('active');
      typework3_1.classList.remove('active');
      typework4_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (typework4_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typework1-1-no tw1-1':
      typework1_3.classList.remove('active');
      typework1_2.classList.add('active');
      setTimeout(() => window.scroll({ top: (typework1_2.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typework1-1-yes tw1-1':
      typework1_2.classList.remove('active');
      typework1_3.classList.add('active');
      setTimeout(() => window.scroll({ top: (typework1_3.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typework2-1-no tw2-1':
      typework2_2.classList.add('active');
      setTimeout(() => window.scroll({ top: (typework2_2.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typework2-1-yes tw2-1':
      typework2_2.classList.add('active');
      setTimeout(() => window.scroll({ top: (typework2_2.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typework3-1 tw3-1':
      typework3_1_1.classList.add('active');
      break;
    case 'typework3-2 reason':
      step9form1.classList.remove('active');
      step11form1.classList.remove('active');
      step12form1.classList.remove('active');
      step10form1.classList.add('active');
      break;
    case 'typework3-3 reason':
      step9form1.classList.remove('active');
      step10form1.classList.remove('active');
      step12form1.classList.remove('active');
      step11form1.classList.add('active');
      break;
    case 'typework3-4 reason':
      step9form1.classList.remove('active');
      step10form1.classList.remove('active');
      step11form1.classList.remove('active');
      step12form1.classList.add('active');
      break;
    case 'typework3-5 reason':
      step9form1.classList.remove('active');
      step10form1.classList.remove('active');
      step11form1.classList.remove('active');
      step12form1.classList.add('active');
      break;
  }
}

const arr1 = Array.from(radioForm1).map(i => {
  if (i.type === 'text' || i.type === 'radio') {
    i.addEventListener('change', handleChange)
  }
})

const arr2 = Array.from(radioForm2).map(i => {
  if (i.type === 'text' || i.type === 'radio') {
    i.addEventListener('change', handleChange)
  }
})

step4form2.onclick = function() {
  step5form2.classList.add('active');
};

step5form2.onclick = function() {
  document.getElementById('tab-3').click()
};


/* FORM REGISTRATION Step START */
let fieldsetForm3 = document.querySelectorAll("#form-3 .item:not(.upload)");
for(let i=0; i<fieldsetForm3.length; i++){fieldsetForm3[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}
/* FORM REGISTRATION Step END */

/* FORM typework1 Steps START */
let fieldsetTypework1 = document.querySelectorAll("#form-1 fieldset[name='typework1']");
for(let i=0; i<fieldsetTypework1.length; i++){fieldsetTypework1[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}
/* FORM typework1 Steps END */

/* FORM typework2 Steps START */
let fieldsetTypework2 = document.querySelectorAll("#form-1 fieldset[name='typework2']");
for(let i=0; i<fieldsetTypework2.length; i++){fieldsetTypework2[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}
/* FORM typework2 Steps END */

/* SELECT OPTION Style START */
const CLASS_NAME_SELECT = 'select';
const CLASS_NAME_ACTIVE = 'select_show';
const CLASS_NAME_SELECTED = 'select-option-selected';
const SELECTOR_ACTIVE = '.select_show';
const SELECTOR_DATA = '[data-select]';
const SELECTOR_DATA_TOGGLE = '[data-select="toggle"]';
const SELECTOR_OPTION_SELECTED = '.select-option-selected';
class CustomSelect {
  constructor(target, params) {
    this._elRoot = typeof target === 'string' ? document.querySelector(target) : target;
    this._params = params || {};
    if (this._params['options']) {
      this._elRoot.classList.add(CLASS_NAME_SELECT);
      this._elRoot.innerHTML = CustomSelect.template(this._params);
    }
    this._elToggle = this._elRoot.querySelector(SELECTOR_DATA_TOGGLE);
    this._elRoot.addEventListener('click', this._onClick.bind(this));
  }
  _onClick(e) {
    const target = e.target;
    const type = target.closest(SELECTOR_DATA).dataset.select;
    switch (type) {
      case 'toggle':
        this.toggle();
        break;
      case 'option':
        this._changeValue(target);
        break;
    }
  }
  _update(option) {
    const selected = this._elRoot.querySelector(SELECTOR_OPTION_SELECTED);
    if (selected) {
      selected.classList.remove(CLASS_NAME_SELECTED);
    }
    option.classList.add(CLASS_NAME_SELECTED);
    this._elToggle.textContent = option.textContent;
    this._elToggle.value = option.dataset['value'];
    this._elToggle.dataset.index = option.dataset['index'];
    this._elRoot.dispatchEvent(new CustomEvent('select.change'));
    this._params.onSelected ? this._params.onSelected(this, option) : null;
    return option.dataset['value'];
  }
  _reset() {
    const selected = this._elRoot.querySelector(SELECTOR_OPTION_SELECTED);
    if (selected) {
      selected.classList.remove(CLASS_NAME_SELECTED);
    }
    this._elToggle.textContent = 'Выберите из списка';
    this._elToggle.value = '';
    this._elToggle.dataset.index = -1;
    this._elRoot.dispatchEvent(new CustomEvent('select.change'));
    this._params.onSelected ? this._params.onSelected(this, null) : null;
    return '';
  }
  _changeValue(option) {
    if (option.classList.contains(CLASS_NAME_SELECTED)) {
      return;
    }
    this._update(option);
    this.hide();
  }
  show() {
    document.querySelectorAll(SELECTOR_ACTIVE).forEach(select => {
      select.classList.remove(CLASS_NAME_ACTIVE);
    });
    this._elRoot.classList.add(CLASS_NAME_ACTIVE);
  }
  hide() {
    this._elRoot.classList.remove(CLASS_NAME_ACTIVE);
  }
  toggle() {
    if (this._elRoot.classList.contains(CLASS_NAME_ACTIVE)) {
      this.hide();
    } else {
      this.show();
    }
  }
  dispose() {
    this._elRoot.removeEventListener('click', this._onClick);
  }
  get value() {
    return this._elToggle.value;
  }
  set value(value) {
    let isExists = false;
    this._elRoot.querySelectorAll('.select-option').forEach((option) => {
      if (option.dataset['value'] === value) {
        isExists = true;
        return this._update(option);
      }
    });
    if (!isExists) {
      return this._reset();
    }
  }
  get selectedIndex() {
    return this._elToggle.dataset['index'];
  }
  set selectedIndex(index) {
    const option = this._elRoot.querySelector(`.select-option[data-index="${index}"]`);
    if (option) {
      return this._update(option);
    }
    return this._reset();
  }
}
CustomSelect.template = params => {
  const name = params['name'];
  const options = params['options'];
  const targetValue = params['targetValue'];
  let items = [];
  let selectedIndex = -1;
  let selectedValue = '';
  let selectedContent = 'Выберите из списка';
  options.forEach((option, index) => {
    let selectedClass = '';
    if (option[0] === targetValue) {
      selectedClass = ' select-option-selected';
      selectedIndex = index;
      selectedValue = option[0];
      selectedContent = option[1];
    }
    items.push(`<li class="select-option${selectedClass}" data-select="option" data-value="${option[0]}" data-index="${index}">${option[1]}</li>`);
  });
  return `<button type="button" class="select-toggle" name="${name}" value="${selectedValue}" data-select="toggle" data-index="${selectedIndex}">${selectedContent}</button>
  <div class="select-dropdown">
    <ul class="select-options">${items.join('')}</ul>
  </div>`;
};
document.addEventListener('click', (e) => {
  if (!e.target.closest('.select')) {
    document.querySelectorAll(SELECTOR_ACTIVE).forEach(select => {
      select.classList.remove(CLASS_NAME_ACTIVE);
    });
  }
});
const select1 = new CustomSelect('#select-1');
const select2 = new CustomSelect('#select-2');
/* SELECT Style END */

/* CUSTOM FILE UPLOADER START */
let dropArea = document.getElementById("drop-area")
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false)   
  document.body.addEventListener(eventName, preventDefaults, false)
})
;['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false)
})
;['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false)
})
dropArea.addEventListener('drop', handleDrop, false)
function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}
function highlight(e) {
  dropArea.classList.add('highlight')
}
function unhighlight(e) {
  dropArea.classList.remove('active')
}
function handleDrop(e) {
  var dt = e.dataTransfer
  var files = dt.files
  handleFiles(files)
}
let uploadProgress = []
let progressBar = document.getElementById('progress-bar')
function initializeProgress(numFiles) {
  progressBar.value = 0
  uploadProgress = []
  for(let i = numFiles; i > 0; i--) {
    uploadProgress.push(0)
  }
}
function updateProgress(fileNumber, percent) {
  uploadProgress[fileNumber] = percent
  let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length
  console.debug('update', fileNumber, percent, total)
  progressBar.value = total
}
function handleFiles(files) {
  files = [...files]
  initializeProgress(files.length)
  files.forEach(uploadFile)
  files.forEach(previewFile)
}
function previewFile(file) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
    let img = document.createElement('img')
    img.src = reader.result
    document.getElementById('gallery').appendChild(img)
    document.getElementById('gallery').classList.add('active')
  }
}
function uploadFile(file, i) {
  var url = 'https://aleksandr-unconditional-nimax.github.io/files'
  var xhr = new XMLHttpRequest()
  var formData = new FormData()
  xhr.open('POST', url, true)
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  xhr.upload.addEventListener("progress", function(e) {
    updateProgress(i, (e.loaded * 100.0 / e.total) || 100)
  })
  xhr.addEventListener('readystatechange', function(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      updateProgress(i, 100)
    }
    else if (xhr.readyState == 4 && xhr.status != 200) {
    }
  })
  formData.append('upload_preset', '')
  formData.append('file', file)
  xhr.send(formData)
}
/* CUSTOM FILE UPLOADER END */