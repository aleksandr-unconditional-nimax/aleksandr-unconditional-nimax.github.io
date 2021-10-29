const step1form1 = document.querySelector('#form-1 .item1');
const step2form1 = document.querySelector('#form-1 .item2');
const step3form1 = document.querySelector('#form-1 .item3');
const step4form1 = document.querySelector('#form-1 .item4');
const step5form1 = document.querySelector('#form-1 .item5');
const step6form1 = document.querySelector('#form-1 .item6');

const typework0 = document.querySelector('.typework0');

const typeWork1 = document.querySelectorAll('.typeWork1');
const typeWork2 = document.querySelectorAll('.typeWork2');
const typeWork3 = document.querySelectorAll('.typeWork3');
const typeWork4 = document.querySelectorAll('.typeWork4');

const typework1_1 = document.querySelector('.typework1-1');
const typework1_2 = document.querySelector('.typework1-2');
const typework1_3 = document.querySelector('.typework1-3');
const typework1_4 = document.querySelector('.typework1-4');

const typework2_1 = document.querySelector('.typework2-1');
const typework2_2 = document.querySelector('.typework2-2');
const typework2_3 = document.querySelector('.typework2-3');
const typework2_4 = document.querySelector('.typework2-4');
const typework2_5 = document.querySelector('.typework2-5');
const typework2_6 = document.querySelector('.typework2-6');
const typework2_7 = document.querySelector('.typework2-7');

const typework3_1 = document.querySelector('.typework3-1');
const typework3_1_1 = document.querySelector('.typework3-1-1');
const typework3_1_2 = document.querySelector('.typework3-1-2');
const typework3_2 = document.querySelector('.typework3-2');
const typework3_3 = document.querySelector('.typework3-3');
const typework3_4 = document.querySelector('.typework3-4');
const typework3_5 = document.querySelector('.typework3-5');

const cashproblem = document.querySelector('.cashProblem');
const fiscalRegistrar = document.querySelector('.fiscalRegistrar-1');
const fiscalRegistrar_2= document.querySelector('.fiscalRegistrar-2');
const fiscalRegistrar_3= document.querySelector('.fiscalRegistrar-3');
const fiscalRegistrar_4= document.querySelector('.fiscalRegistrar-4');
const fiscalRegistrar_5= document.querySelector('.fiscalRegistrar-5');
const fiscalRegistrarBranch1 = document.getElementsByName('fiscalRegistrarOther');
const fiscalRegistrarBranch1_2 = document.getElementsByName('fiscalRegistrarModel');
const fiscalRegistrar_12= document.querySelector('.fiscalRegistrar-12');
const fiscalRegistrar_final= document.querySelector('.fiscalRegistrar-final');
const fiscalRegistrar_13= document.querySelector('.fiscalRegistrar-13');
const problemFormChecks_1= document.querySelector('.problemFormChecks-1');
const problemFormChecks_2= document.querySelector('.problemFormChecks-2');
const problemFormChecks_3= document.querySelector('.problemFormChecks-3');
const problemFormChecks_4= document.querySelector('.problemFormChecks-4');
const problemFormChecks_5= document.querySelector('.problemFormChecks-5');
const fiscalRegistrar_another_driver= document.querySelector('.fiscalRegistrar-another-driver');
const problemFormChecks_6= document.querySelector('.problemFormChecks-6');
const problemFormChecks_7= document.querySelector('.problemFormChecks-7');
const problemSendOFD_1= document.querySelector('.problemSendOFD-1');
const problemSendOFD_5= document.querySelector('.problemSendOFD-5');
const cashHardwareProblem_1= document.querySelector('.cashHardwareProblem-1')
const cashHardwareProblem_7= document.querySelector('.cashHardwareProblem-7')
const cashHardwareProblem_8= document.querySelector('.cashHardwareProblem-8')
const cashHardwareProblem_9= document.querySelector('.cashHardwareProblem-9')
const equipmentAreaProblem_1= document.querySelector('.equipmentAreaProblem-1')
const equipmentAreaProblem_2= document.querySelector('.equipmentAreaProblem-2')
const equipmentAreaProblem_3= document.querySelector('.equipmentAreaProblem-3')
const prismVideoProblem_1= document.querySelector('.prismVideoProblem-1')
const programSetProblem_1= document.querySelector('.programSetProblem-1')

const typework4_1 = document.querySelector('.typework4-1');
const typework4_2 = document.querySelector('.typework4-2');
const typework4_3 = document.querySelector('.typework4-3');
const typework4_4 = document.querySelector('.typework4-4');
const typework4_5 = document.querySelector('.typework4-5');
const typework4_6 = document.querySelector('.typework4-6');
const typework4_7 = document.querySelector('.typework4-7');

const step2form2 = document.querySelector('#form-2 .item2');
const step3form2 = document.querySelector('#form-2 .item3');
const step4form2 = document.querySelector('#form-2 .item4');
const step5form2 = document.querySelector('#form-2 .item5');

const offset = 50;

// let itemsFi = document.querySelectorAll("fieldset.item");
// for(let i=0; i<itemsFi.length; i++){itemsFi[i].onclick = function(){
//   if(this.classList.contains('active')){
//     console.log('0');
//     let children = document.querySelector('.text-sidebar');
//     let clonedNode = children.cloneNode(true);
//     document.querySelector("#aside").appendChild(clonedNode);
//   }
// }};


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

typework4_6.onclick = function() {
  typework4_7.classList.add('active');
  setTimeout(() => window.scroll({ top: (typework4_7.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
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
      for(let i = 0; i < typeWork2.length; i++) {
        typeWork2[i].classList.remove('active');
      }
      for(let i = 0; i < typeWork3.length; i++) {
        typeWork3[i].classList.remove('active');
      }
      for(let i = 0; i < typeWork4.length; i++) {
        typeWork4[i].classList.remove('active');
      }
      typework1_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (typework1_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typework2 typework':
      for(let i = 0; i < typeWork1.length; i++) {
        typeWork1[i].classList.remove('active');
      }
      for(let i = 0; i < typeWork3.length; i++) {
        typeWork3[i].classList.remove('active');
      }
      for(let i = 0; i < typeWork4.length; i++) {
        typeWork4[i].classList.remove('active');
      }
      typework2_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (typework2_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typework3 typework':
      for(let i = 0; i < typeWork1.length; i++) {
        typeWork1[i].classList.remove('active');
      }
      for(let i = 0; i < typeWork2.length; i++) {
        typeWork2[i].classList.remove('active');
      }
      for(let i = 0; i < typeWork4.length; i++) {
        typeWork4[i].classList.remove('active');
      }
      typework3_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (typework3_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typework4 typework':
      for(let i = 0; i < typeWork1.length; i++) {
        typeWork1[i].classList.remove('active');
      }
      for(let i = 0; i < typeWork2.length; i++) {
        typeWork2[i].classList.remove('active');
      }
      for(let i = 0; i < typeWork3.length; i++) {
        typeWork3[i].classList.remove('active');
      }
      typework4_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (typework4_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      setTimeout(() => typework4_2.classList.add('active'), 1800);
      setTimeout(() => window.scroll({ top: (typework4_2.offsetTop - offset), left: 0, behavior: 'smooth' }), 1900);
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
      cashproblem.classList.add('active');
      let hideFieldsets1 = document.querySelectorAll('.typeWork3:not([name="cashProblem"])');
      for(let i = 1; i < hideFieldsets1.length; i++) {
        hideFieldsets1[i].classList.remove('active');
      }
      setTimeout(() => window.scroll({ top: (cashproblem.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typework3-2 tw3-1':
      equipmentAreaProblem_1.classList.add('active');
      let hideFieldsets2 = document.querySelectorAll('.typeWork3:not([name="equipmentAreaProblem"])');
      for(let i = 1; i < hideFieldsets2.length; i++) {
        hideFieldsets2[i].classList.remove('active');
      }
      setTimeout(() => window.scroll({ top: (equipmentAreaProblem_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typework3-3 tw3-1':
      prismVideoProblem_1.classList.add('active');
      let hideFieldsets3 = document.querySelectorAll('.typeWork3:not([name="prismVideoProblem"])');
      for(let i = 1; i < hideFieldsets3.length; i++) {
        hideFieldsets3[i].classList.remove('active');
      }
      setTimeout(() => window.scroll({ top: (prismVideoProblem_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typework3-4 tw3-1':
      programSetProblem_1.classList.add('active');
      let hideFieldsets4 = document.querySelectorAll('.typeWork3:not([name="programSetProblem"])');
      for(let i = 1; i < hideFieldsets4.length; i++) {
        hideFieldsets4[i].classList.remove('active');
      }
      setTimeout(() => window.scroll({ top: (programSetProblem_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'fiscalRegistrar cash-problem-step-0':
      fiscalRegistrar.classList.add('active');
      setTimeout(() => window.scroll({ top: (fiscalRegistrar.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Системныйблок cash-problem-step-0': 
    case 'Клавиатура cash-problem-step-0':
    case 'Денежныйящик cash-problem-step-0':
      cashHardwareProblem_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (cashHardwareProblem_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Сканер cash-problem-step-0':
      cashHardwareProblem_7.classList.add('active');
      setTimeout(() => window.scroll({ top: (cashHardwareProblem_7.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Дисплей/монитор cash-problem-step-0':
      cashHardwareProblem_8.classList.add('active');
      setTimeout(() => window.scroll({ top: (cashHardwareProblem_8.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Другое cash-problem-step-0':
      cashHardwareProblem_9.classList.add('active');
      setTimeout(() => window.scroll({ top: (cashHardwareProblem_9.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Другое fiscalRegistrar-1':
      fiscalRegistrar_4.classList.add('active');
      setTimeout(() => window.scroll({ top: (fiscalRegistrar_4.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'ВикиПринт80Ф fiscalRegistrar-1':
      for(let i = 0; i < fiscalRegistrarBranch1.length; i++) {
        fiscalRegistrarBranch1[i].classList.remove('active');
      }
      fiscalRegistrar_2.classList.add('active');
      setTimeout(() => window.scroll({ top: (fiscalRegistrar_2.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Пирит2Ф fiscalRegistrar-1':
      for(let i = 0; i < fiscalRegistrarBranch1.length; i++) {
        fiscalRegistrarBranch1[i].classList.remove('active');
      }
      fiscalRegistrar_2.classList.add('active');
      setTimeout(() => window.scroll({ top: (fiscalRegistrar_2.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Да fiscalRegistrar-12':
      fiscalRegistrar_13.classList.remove('active');
      fiscalRegistrar_final.classList.add('active');
      setTimeout(() => window.scroll({ top: (fiscalRegistrar_final.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Нет fiscalRegistrar-12':
      fiscalRegistrar_final.classList.remove('active');
      fiscalRegistrar_13.classList.add('active');
      setTimeout(() => window.scroll({ top: (fiscalRegistrar_13.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Другое fiscalRegistrar-13':
      for(let i = 0; i < fiscalRegistrarBranch1_2.length; i++) {
        fiscalRegistrarBranch1_2[i].classList.remove('active');
      }
      fiscalRegistrar_5.classList.add('active');
      setTimeout(() => window.scroll({ top: (fiscalRegistrar_5.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Проблемасформойчеков fiscalRegistrar-13':
      problemFormChecks_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (problemFormChecks_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'ПроблемасотправкойвОФД fiscalRegistrar-13':
      problemSendOFD_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (problemSendOFD_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'ФР+СтороннееПО fiscalRegistrarFormChecks-14':
      problemFormChecks_2.classList.add('active');
      setTimeout(() => window.scroll({ top: (problemFormChecks_2.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Другойдрайвер problemFormChecks-3':
      fiscalRegistrar_another_driver.classList.add('active');
      setTimeout(() => window.scroll({ top: (fiscalRegistrar_another_driver.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Да problemFormChecks-6':
      fiscalRegistrar_final.classList.add('active');
      setTimeout(() => window.scroll({ top: (fiscalRegistrar_final.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Нет problemFormChecks-6':
      fiscalRegistrar_final.classList.remove('active');
      problemFormChecks_7.classList.add('active');
      setTimeout(() => window.scroll({ top: (problemFormChecks_7.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Да problemSendOFD-4':
      fiscalRegistrar_final.classList.add('active');
      setTimeout(() => window.scroll({ top: (fiscalRegistrar_final.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Нет problemSendOFD-4':
      problemSendOFD_5.classList.add('active');
      setTimeout(() => window.scroll({ top: (problemSendOFD_5.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Другое equipmentAreaProblem-1':
      equipmentAreaProblem_2.classList.add('active');
      setTimeout(() => window.scroll({ top: (equipmentAreaProblem_2.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Инфокиоск/прайсчекер equipmentAreaProblem-1':
    case 'ПринтерШК/этикеток equipmentAreaProblem-1':
      equipmentAreaProblem_2.classList.remove('active');
      equipmentAreaProblem_3.classList.add('active');
      setTimeout(() => window.scroll({ top: (equipmentAreaProblem_3.offsetTop - offset), left: 0, behavior: 'smooth' }), 105);
      break;

    
    case 'typework4-2-yes tw4-2':
      typework4_4.classList.remove('active');
      typework4_3.classList.add('active');
      setTimeout(() => window.scroll({ top: (typework4_3.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typework4-2-no tw4-2':
      typework4_3.classList.remove('active');
      typework4_4.classList.add('active');
      setTimeout(() => window.scroll({ top: (typework4_4.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typework4-4-yes tw4-4':
      typework4_6.classList.add('active');
      setTimeout(() => window.scroll({ top: (typework4_6.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typework4-4-no tw4-4':
      typework4_6.classList.remove('active');
      typework4_5.classList.add('active');
      setTimeout(() => window.scroll({ top: (typework4_5.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
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

fiscalRegistrar_3.onclick = function() {
  fiscalRegistrar_12.classList.add('active');
  setTimeout(() => window.scroll({ top: (fiscalRegistrar_12.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
};

cashHardwareProblem_7.onclick = function() {
  cashHardwareProblem_1.classList.add('active');
  setTimeout(() => window.scroll({ top: (cashHardwareProblem_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
};
cashHardwareProblem_8.onclick = function() {
  cashHardwareProblem_1.classList.add('active');
  setTimeout(() => window.scroll({ top: (cashHardwareProblem_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
};
cashHardwareProblem_9.onclick = function() {
  cashHardwareProblem_1.classList.add('active');
  setTimeout(() => window.scroll({ top: (cashHardwareProblem_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
};


/* FORM REGISTRATION Step START */
let fieldsetForm3 = document.querySelectorAll("#form-3 .item:not(.upload)");
for(let i=0; i<fieldsetForm3.length; i++){fieldsetForm3[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}
/* FORM REGISTRATION Step END */

/* FORM typework1 Steps START */
let fieldsetTypework1 = document.querySelectorAll("fieldset[name='typework1']");
for(let i=0; i<fieldsetTypework1.length; i++){fieldsetTypework1[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}
/* FORM typework1 Steps END */

/* FORM typework2 Steps START */
let fieldsetTypework2 = document.querySelectorAll("fieldset[name='typework2']");
for(let i=0; i<fieldsetTypework2.length; i++){fieldsetTypework2[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}
/* FORM typework2 Steps END */

/* FORM fiscalRegistrar Steps START */
let fieldsetFiscalRegistrarOther = document.querySelectorAll("fieldset[name='fiscalRegistrarOther']");
for(let i=0; i<fieldsetFiscalRegistrarOther.length; i++){fieldsetFiscalRegistrarOther[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}
/* FORM fiscalRegistrar Steps END */

/* FORM fiscalRegistrarModel Steps START */
let fieldsetFiscalRegistrarModel = document.querySelectorAll("fieldset[name='fiscalRegistrarModel']");
for(let i=0; i<fieldsetFiscalRegistrarModel.length; i++){fieldsetFiscalRegistrarModel[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}
/* FORM fiscalRegistrar Steps END */

/* FORM cashHardwareProblem Steps START */
let cashHardwareProblem = document.querySelectorAll("fieldset[name='cashHardwareProblem']");
for(let i=0; i<cashHardwareProblem.length; i++){cashHardwareProblem[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}
/* FORM cashHardwareProblem Steps END */

/* FORM equipmentAreaProblem Steps START */
let equipmentAreaProblem = document.querySelectorAll("fieldset[name='equipmentAreaProblem']");
for(let i=0; i<equipmentAreaProblem.length; i++){equipmentAreaProblem[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}
/* FORM equipmentAreaProblem Steps END */

/* FORM prismVideoProblem Steps START */
let prismVideoProblem = document.querySelectorAll("fieldset[name='prismVideoProblem']");
for(let i=0; i<prismVideoProblem.length; i++){prismVideoProblem[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}
/* FORM prismVideoProblem Steps END */

/* FORM prismVideoProblem Steps START */
let programSetProblem = document.querySelectorAll("fieldset[name='programSetProblem']");
for(let i=0; i<programSetProblem.length; i++){programSetProblem[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}
/* FORM prismVideoProblem Steps END */

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
const select3 = new CustomSelect('#select-3');
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