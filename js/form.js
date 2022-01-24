const step1form1 = document.querySelector('#form-1 .item1');
const step2form1 = document.querySelector('#form-1 .item2');
const step3form1 = document.querySelector('#form-1 .item3');
const step4form1 = document.querySelector('#form-1 .item4');
const step5form1 = document.querySelector('#form-1 .item5');
const step6form1 = document.querySelector('#form-1 .item6');
const typeWork0 = document.querySelector('.typeWork0');
const typeWork1 = document.querySelectorAll('.typeWork1');
const typeWork2 = document.querySelectorAll('.typeWork2');
const typeWork3 = document.querySelectorAll('.typeWork3');
const typeWork4 = document.querySelectorAll('.typeWork4');
const typeWork1_1 = document.querySelector('.typeWork1-1');
const typeWork1_2 = document.querySelector('.typeWork1-2');
const typeWork1_3 = document.querySelector('.typeWork1-3');
const typeWork2_1 = document.querySelector('.typeWork2-1');
const typeWork2_2 = document.querySelector('.typeWork2-2');
const typeWork2_final = document.querySelector('.typeWork2-final');
const typeWork3_1 = document.querySelector('.typeWork3-1');
const cashproblem = document.querySelector('.cashProblem');
const fiscalRegistrar = document.querySelector('.fiscalRegistrar-1');
const fiscalRegistrar_2= document.querySelector('.fiscalRegistrar-2');
const fiscalRegistrar_3= document.querySelector('.fiscalRegistrar-3');
const fiscalRegistrar_4= document.querySelector('.fiscalRegistrar-4');
const fiscalRegistrar_5= document.querySelector('.fiscalRegistrar-5');
const fiscalRegistrar_12= document.querySelector('.fiscalRegistrar-12');
const fiscalRegistrar_final= document.querySelector('.fiscalRegistrar-final');
const fiscalRegistrar_13= document.querySelector('.fiscalRegistrar-13');
const problemFormChecks_1= document.querySelector('.problemFormChecks-1');
const problemFormChecks_2= document.querySelector('.problemFormChecks-2');
const problemFormChecks_4= document.querySelector('.problemFormChecks-4');
const fiscalRegistrar_another_driver= document.querySelector('.fiscalRegistrar-another-driver');
const problemFormChecks_7= document.querySelector('.problemFormChecks-7');
const problemFormChecks_8= document.querySelector('.problemFormChecks-8');
const problemSendOFD_1= document.querySelector('.problemSendOFD-1');
const problemSendOFD_5= document.querySelector('.problemSendOFD-5');
const cashHardwareProblem_1= document.querySelector('.cashHardwareProblem-1');
const cashHardwareProblem_7= document.querySelector('.cashHardwareProblem-7');
const cashHardwareProblem_8= document.querySelector('.cashHardwareProblem-8');
const cashHardwareProblem_9= document.querySelector('.cashHardwareProblem-9');
const equipmentAreaProblem_1= document.querySelector('.equipmentAreaProblem-1');
const equipmentAreaProblem_2= document.querySelector('.equipmentAreaProblem-2');
const equipmentAreaProblem_3= document.querySelector('.equipmentAreaProblem-3');
const prismVideoProblem_1= document.querySelector('.prismVideoProblem-1');
const programSetProblem_1= document.querySelector('.programSetProblem-1');
const programSetProblem_2= document.querySelector('.programSetProblem-2');
const programSetProblem_9= document.querySelector('.programSetProblem-9');
const programSetProblem_10= document.querySelector('.programSetProblem-10');
const anotherSetProblem_1= document.querySelector('.anotherSetProblem-1');
const loyaltyProblem_1= document.querySelector('.loyaltyProblem-1');
const loyaltyProblem_2= document.querySelector('.loyaltyProblem-2');
const loyaltyProblem_3= document.querySelector('.loyaltyProblem-3');
const loyaltyProblem_4= document.querySelector('.loyaltyProblem-4');
const loyaltyProblem_5= document.querySelector('.loyaltyProblem-5');
const loyaltyProblem_7= document.querySelector('.loyaltyProblem-7');
const loyaltyProblem_8= document.querySelector('.loyaltyProblem-8');
const loyaltyProblem_9= document.querySelector('.loyaltyProblem-9');
const loyaltyProblem_11= document.querySelector('.loyaltyProblem-11');
const loyaltyProblem_12= document.querySelector('.loyaltyProblem-12');
const loyaltyProblem_13= document.querySelector('.loyaltyProblem-13');
const loyaltyProblem_16= document.querySelector('.loyaltyProblem-16');
const loyaltyProblem_17= document.querySelector('.loyaltyProblem-17-final');
const loyaltyProblem_18= document.querySelector('.loyaltyProblem-18');
const loyaltyProblem_19= document.querySelector('.loyaltyProblem-19');
const loyaltyProblemThanks= document.querySelector('.loyaltyProblem-thanks');
const programSetProblemsFinal_4= document.querySelector('.programSetProblemsFinal-4');
const updateProblem_1= document.querySelector('.updateProblem-1');
const updateProblem_2= document.querySelector('.updateProblem-2');
const updateProblem_3= document.querySelector('.updateProblem-3');
const updateProblem_4= document.querySelector('.updateProblem-4');
const updateProblem_4_2= document.querySelector('.updateProblem-4-2');
const typeWork4_1 = document.querySelector('.typeWork4-1');
const typeWork4_2 = document.querySelector('.typeWork4-2');
const typeWork4_4 = document.querySelector('.typeWork4-4');
const typeWork4_6 = document.querySelector('.typeWork4-6');
const typeWork4_7 = document.querySelector('.typeWork4-7');
const typeWork4_final = document.querySelector('.typeWork4-final');
const step2form2 = document.querySelector('#form-2 .item2[name="partnerContractor"]');
const step3form2 = document.querySelector('#form-2 .item3[name="partnerContractor"]');
const step4form2 = document.querySelector('#form-2 .item4[name="partnerContractor"]');
const step5form2 = document.querySelector('#form-2 .item5[name="partnerContractor"]');

const offset = 50;

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
  step5form1.classList.add('active');
  setTimeout(() => window.scroll({ top: (step4form1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
};
let select2Li = document.querySelectorAll('#select-2 .select-option');
select2Li.forEach(el => {
  el.addEventListener('click', () => {
    step6form1.classList.add('active');
    setTimeout(() => window.scroll({ top: (step6form1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
  })
})
step5form1.onclick = function() {
  step6form1.classList.add('active');
  navForms.classList.add('active');
  setTimeout(() => window.scroll({ top: (step6form1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
};
step6form1.onclick = function() {
  typeWork0.classList.add('active');
  setTimeout(() => window.scroll({ top: (typeWork0.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
};
typeWork4_6.onclick = function() {
  typeWork4_7.classList.add('active');
  setTimeout(() => window.scroll({ top: (typeWork4_7.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
};

let radioForm1 = document.form1;
let radioForm2 = document.form2;
let hidePartnerContractor = document.querySelectorAll('.item1[name="partnerContractor"] ~ fieldset');
let hideCashHardwareProblemChoice = document.querySelectorAll('.typeWork3:not([name="cashHardwareProblem-choice"])');
let loyaltyProblemAll = document.querySelectorAll('.typeWork3[name="loyaltyProblem"]');
let hideTypeWork_2 = document.querySelectorAll(".typeWork2-1 ~ fieldset");
let hideFieldsets1 = document.querySelectorAll(".typeWork3-1 ~ .item");
let hideCashProblem = document.querySelectorAll(".cashProblem ~ fieldset");
let hideProblemFormChecks_1 = document.querySelectorAll(".problemFormChecks-1 ~ fieldset");
let hideProgramSetProblem1 = document.querySelectorAll(".programSetProblem-1 ~ .item", ".programSetProblem-1 ~ fieldset");
let hideSetProblem1 = document.querySelectorAll(".programSetProblem-10 ~ fieldset");
let hideLoyaltyProblem_1 = document.querySelectorAll(".loyaltyProblem-1 ~ fieldset");
let hideLoyaltyProblem_4 = document.querySelectorAll(".loyaltyProblem-4 ~ fieldset");
let hideLoyaltyProblem_8 = document.querySelectorAll(".loyaltyProblem-8 ~ fieldset");
let hideLoyaltyProblem_12 = document.querySelectorAll(".loyaltyProblem-12 ~ fieldset");
let hideLoyaltyProblem_16 = document.querySelectorAll(".loyaltyProblem-16 ~ fieldset");
let hideLoyaltyProblem_18 = document.querySelectorAll(".loyaltyProblem-18 ~ fieldset");
let hideUpdateProblem = document.querySelectorAll(".updateProblem-1 ~ fieldset");
let hideUpdateProblem_3 = document.querySelectorAll(".updateProblem-3 ~ fieldset");
let hideFiscalRegistrar_1 = document.querySelectorAll(".fiscalRegistrar-1 ~ fieldset");
let hideFiscalRegistrar_12 = document.querySelectorAll(".fiscalRegistrar-12 ~ fieldset");
let hideFiscalRegistrar_13 = document.querySelectorAll(".fiscalRegistrar-13 ~ fieldset");
let hideFiscalRegistrarDriver = document.querySelectorAll(".problemFormChecks-3 ~ fieldset");
let hideProblemSendOFD_4 = document.querySelectorAll(".problemSendOFD-4 ~ fieldset");
let hideTypeWork = document.querySelectorAll(".typeWork0 ~ .item", ".typeWork0 ~ fieldset");
let hideTypeWork_4_2 = document.querySelectorAll(".typeWork4-2 ~ fieldset");
let hideTypeWork_4_4 = document.querySelectorAll(".typeWork4-4 ~ fieldset");

let fieldsetItems = document.querySelectorAll('fieldset.item input[type="radio"]');
let clearInputs = document.querySelectorAll('fieldset.item ~ fieldset.item input[type="text"], fieldset.item ~ fieldset.item textarea');
fieldsetItems.forEach((n, i, a) => {
  n.addEventListener('click', () => {
    for(let i = 0; i < clearInputs.length; i++) {clearInputs[i].value = "";}
  })
});

const handleChange = ({ target: { value, name } }) => {
  const res = `${value} ${name}`;
  switch (res) {
    case 'Да contract':
      for(let i = 0; i < hidePartnerContractor.length; i++) {hidePartnerContractor[i].classList.remove('active');}
      step2form2.classList.add('active');
      break;
    case 'Нет contract':
      for(let i = 0; i < hidePartnerContractor.length; i++) {hidePartnerContractor[i].classList.remove('active');}
      step4form2.classList.add('active');
      break;
    case 'Да contractProblem':
      for(let i = 1; i < hidePartnerContractor.length; i++) {hidePartnerContractor[i].classList.remove('active');}
      step3form2.classList.add('active');
      break;
    case 'Нет contractProblem':
      for(let i = 1; i < hidePartnerContractor.length; i++) {hidePartnerContractor[i].classList.remove('active');}
      step4form2.classList.add('active');
      break;
    case 'typeWork1 typeWork':
      for(let i = 0; i < hideTypeWork.length; i++) {hideTypeWork[i].classList.remove('active');}
      typeWork1_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (typeWork1_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typeWork2 typeWork':
      for(let i = 0; i < hideTypeWork.length; i++) {hideTypeWork[i].classList.remove('active');}
      typeWork2_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (typeWork2_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typeWork3 typeWork':
      for(let i = 0; i < hideTypeWork.length; i++) {hideTypeWork[i].classList.remove('active');}
      typeWork3_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (typeWork3_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typeWork4 typeWork':
      for(let i = 0; i < hideTypeWork.length; i++) {hideTypeWork[i].classList.remove('active');}
      typeWork4_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (typeWork4_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      setTimeout(() => typeWork4_2.classList.add('active'), 1800);
      setTimeout(() => window.scroll({ top: (typeWork4_2.offsetTop - offset), left: 0, behavior: 'smooth' }), 1900);
      break;
    case 'typeWork1-1-no tw1-1':
      for(let i = 1; i < typeWork1.length; i++) {typeWork1[i].classList.remove('active');}
      typeWork1_3.classList.remove('active');
      typeWork1_2.classList.add('active');
      setTimeout(() => window.scroll({ top: (typeWork1_2.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typeWork1-1-yes tw1-1':
      typeWork1_2.classList.remove('active');
      typeWork1_3.classList.add('active');
      setTimeout(() => window.scroll({ top: (typeWork1_3.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typeWork2-1-no tw2-1':
      for(let i = 0; i < hideTypeWork_2.length; i++) {hideTypeWork_2[i].classList.remove('active');}
      typeWork2_final.classList.add('active');
      setTimeout(() => window.scroll({ top: (typeWork2_final.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typeWork2-1-yes tw2-1':
      typeWork2_final.classList.remove('active');
      typeWork2_2.classList.add('active');
      setTimeout(() => window.scroll({ top: (typeWork2_2.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typeWork3-1 tw3-1':
      for(let i = 0; i < hideFieldsets1.length; i++) {hideFieldsets1[i].classList.remove('active');}
      cashproblem.classList.add('active');
      setTimeout(() => window.scroll({ top: (cashproblem.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typeWork3-2 tw3-1':
      for(let i = 0; i < hideFieldsets1.length; i++) {hideFieldsets1[i].classList.remove('active');}
      equipmentAreaProblem_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (equipmentAreaProblem_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typeWork3-3 tw3-1':
      for(let i = 0; i < hideFieldsets1.length; i++) {hideFieldsets1[i].classList.remove('active');}
      prismVideoProblem_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (prismVideoProblem_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typeWork3-4 tw3-1':
      for(let i = 0; i < hideFieldsets1.length; i++) {hideFieldsets1[i].classList.remove('active');}
      programSetProblem_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (programSetProblem_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'fiscalRegistrar cash-problem-step-0':
      for(let i = 0; i < hideCashProblem.length; i++) {hideCashProblem[i].classList.remove('active');}
      fiscalRegistrar.classList.add('active');
      setTimeout(() => window.scroll({ top: (fiscalRegistrar.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Системныйблок cash-problem-step-0': 
    case 'Клавиатура cash-problem-step-0':
    case 'Денежныйящик cash-problem-step-0':
      for(let i = 0; i < hideCashProblem.length; i++) {hideCashProblem[i].classList.remove('active');}
      cashHardwareProblem_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (cashHardwareProblem_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Сканер cash-problem-step-0':
      for(let i = 0; i < hideCashProblem.length; i++) {hideCashProblem[i].classList.remove('active');}
      cashHardwareProblem_7.classList.add('active');
      setTimeout(() => window.scroll({ top: (cashHardwareProblem_7.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Дисплей/монитор cash-problem-step-0':
      for(let i = 0; i < hideCashProblem.length; i++) {hideCashProblem[i].classList.remove('active');}
      cashHardwareProblem_8.classList.add('active');
      setTimeout(() => window.scroll({ top: (cashHardwareProblem_8.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Другое cash-problem-step-0':
      for(let i = 0; i < hideCashProblem.length; i++) {hideCashProblem[i].classList.remove('active');}
      cashHardwareProblem_9.classList.add('active');
      setTimeout(() => window.scroll({ top: (cashHardwareProblem_9.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Другое fiscalRegistrar-1':
      for(let i = 0; i < hideFiscalRegistrar_1.length; i++) {hideFiscalRegistrar_1[i].classList.remove('active');}
      fiscalRegistrar_4.classList.add('active');
      setTimeout(() => window.scroll({ top: (fiscalRegistrar_4.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'ВикиПринт80Ф fiscalRegistrar-1':
      for(let i = 0; i < hideFiscalRegistrar_1.length; i++) {hideFiscalRegistrar_1[i].classList.remove('active');}
      fiscalRegistrar_2.classList.add('active');
      setTimeout(() => window.scroll({ top: (fiscalRegistrar_2.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Пирит2Ф fiscalRegistrar-1':
      for(let i = 0; i < hideFiscalRegistrar_1.length; i++) {hideFiscalRegistrar_1[i].classList.remove('active');}
      fiscalRegistrar_2.classList.add('active');
      setTimeout(() => window.scroll({ top: (fiscalRegistrar_2.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Да fiscalRegistrar-12':
      for(let i = 0; i < hideFiscalRegistrar_12.length; i++) {hideFiscalRegistrar_12[i].classList.remove('active');}
      fiscalRegistrar_final.classList.add('active');
      setTimeout(() => window.scroll({ top: (fiscalRegistrar_final.offsetTop - offset), left: 0, behavior: 'smooth' }), 150);
      break;
    case 'Нет fiscalRegistrar-12':
      fiscalRegistrar_final.classList.remove('active');
      fiscalRegistrar_13.classList.add('active');
      setTimeout(() => window.scroll({ top: (fiscalRegistrar_13.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Другое fiscalRegistrar-13':
      for(let i = 0; i < hideFiscalRegistrar_13.length; i++) {hideFiscalRegistrar_13[i].classList.remove('active');}
      fiscalRegistrar_5.classList.add('active');
      setTimeout(() => window.scroll({ top: (fiscalRegistrar_5.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Проблемасформойчеков fiscalRegistrar-13':
      for(let i = 0; i < hideFiscalRegistrar_13.length; i++) {hideFiscalRegistrar_13[i].classList.remove('active');}
      problemFormChecks_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (problemFormChecks_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'ПроблемасотправкойвОФД fiscalRegistrar-13':
      for(let i = 0; i < hideFiscalRegistrar_13.length; i++) {hideFiscalRegistrar_13[i].classList.remove('active');}
      problemSendOFD_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (problemSendOFD_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'ФР+СтороннееПО problemFormChecks-1':
      for(let i = 0; i < hideProblemFormChecks_1.length; i++) {hideProblemFormChecks_1[i].classList.remove('active');}
      problemFormChecks_2.classList.add('active');
      setTimeout(() => window.scroll({ top: (problemFormChecks_2.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'ФР+SetRetail10 problemFormChecks-1':
      for(let i = 0; i < hideProblemFormChecks_1.length; i++) {hideProblemFormChecks_1[i].classList.remove('active');}
      problemFormChecks_7.classList.add('active');
      setTimeout(() => window.scroll({ top: (problemFormChecks_7.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'OPOS problemFormChecks-3':
    case 'БиблиотекаPiritLib problemFormChecks-3':
    case 'Драйвер1СNativeAPI problemFormChecks-3':
    case 'JPOS problemFormChecks-3':
    case 'Драйвер1С83 problemFormChecks-3':
      for(let i = 0; i < hideFiscalRegistrarDriver.length; i++) {hideFiscalRegistrarDriver[i].classList.remove('active');}
      problemFormChecks_4.classList.add('active');
      setTimeout(() => window.scroll({ top: (problemFormChecks_4.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Другойдрайвер problemFormChecks-3':
      for(let i = 0; i < hideFiscalRegistrarDriver.length; i++) {hideFiscalRegistrarDriver[i].classList.remove('active');}
      fiscalRegistrar_another_driver.classList.add('active');
      setTimeout(() => window.scroll({ top: (fiscalRegistrar_another_driver.offsetTop - offset), left: 0, behavior: 'smooth' }), 150);
      break;
    case 'Да problemFormChecks-6':
      fiscalRegistrar_final.classList.add('active');
      problemFormChecks_7.classList.remove('active');
      problemFormChecks_8.classList.remove('active');
      setTimeout(() => window.scroll({ top: (fiscalRegistrar_final.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Нет problemFormChecks-6':
      fiscalRegistrar_final.classList.remove('active');
      problemFormChecks_7.classList.add('active');
      setTimeout(() => window.scroll({ top: (problemFormChecks_7.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Да problemSendOFD-4':
      for(let i = 0; i < hideProblemSendOFD_4.length; i++) {hideProblemSendOFD_4[i].classList.remove('active');}
      fiscalRegistrar_final.classList.add('active');
      setTimeout(() => window.scroll({ top: (fiscalRegistrar_final.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Нет problemSendOFD-4':
      for(let i = 0; i < hideProblemSendOFD_4.length; i++) {hideProblemSendOFD_4[i].classList.remove('active');}
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
      setTimeout(() => window.scroll({ top: (equipmentAreaProblem_3.offsetTop - offset), left: 0, behavior: 'smooth' }), 140);
      break;
    case 'SetGalya programSetProblem-1':
    case 'SetKit programSetProblem-1':
    case 'SetMark programSetProblem-1':
    case 'SetSCO programSetProblem-1':
    case 'SetTouch programSetProblem-1':
    case 'SetKiosk programSetProblem-1':
    case 'SetAgent programSetProblem-1':
      for(let i = 0; i < hideProgramSetProblem1.length; i++) {hideProgramSetProblem1[i].classList.remove('active');}
      programSetProblem_2.classList.add('active');
      setTimeout(() => window.scroll({ top: (programSetProblem_2.offsetTop - offset), left: 0, behavior: 'smooth' }), 115);
      break;
    case 'SetRetail programSetProblem-1':
      for(let i = 0; i < hideProgramSetProblem1.length; i++) {hideProgramSetProblem1[i].classList.remove('active');}
      programSetProblem_9.classList.add('active');
      setTimeout(() => window.scroll({ top: (programSetProblem_9.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Другое programSetProblem-10':
      for(let i = 0; i < hideSetProblem1.length; i++) {hideSetProblem1[i].classList.remove('active');}
      anotherSetProblem_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (anotherSetProblem_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 120);
      break;
    case 'Проблемаслояльностью programSetProblem-10':
      for(let i = 0; i < hideSetProblem1.length; i++) {hideSetProblem1[i].classList.remove('active');}
      loyaltyProblem_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (loyaltyProblem_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 120);
      break;
    case 'Проблемаприобновлении programSetProblem-10':
      for(let i = 0; i < hideSetProblem1.length; i++) {hideSetProblem1[i].classList.remove('active');}
      updateProblem_1.classList.add('active');
      setTimeout(() => window.scroll({ top: (updateProblem_1.offsetTop - offset), left: 0, behavior: 'smooth' }), 120);
      break;
    case 'Подарочнаякарта loyaltyProblem-1':
      for(let i = 0; i < hideLoyaltyProblem_1.length; i++) {hideLoyaltyProblem_1[i].classList.remove('active');}
      loyaltyProblem_2.classList.add('active');
      setTimeout(() => window.scroll({ top: (loyaltyProblem_2.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Дисконтная/бонуснаякарта loyaltyProblem-1':
    case 'Купоны loyaltyProblem-1':
      for(let i = 0; i < hideLoyaltyProblem_1.length; i++) {hideLoyaltyProblem_1[i].classList.remove('active');}
      loyaltyProblem_8.classList.add('active');
      setTimeout(() => window.scroll({ top: (loyaltyProblem_8.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Рекламнаяакция loyaltyProblem-1':
      for(let i = 0; i < hideLoyaltyProblem_1.length; i++) {hideLoyaltyProblem_1[i].classList.remove('active');}
      loyaltyProblem_12.classList.add('active');
      setTimeout(() => window.scroll({ top: (loyaltyProblem_12.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Нет loyaltyProblem-2':
      loyaltyProblem_3.classList.add('active');
      for(let i = 3; i < loyaltyProblemAll.length; i++) {loyaltyProblemAll[i].classList.remove('active');}
      setTimeout(() => window.scroll({ top: (loyaltyProblem_3.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Да loyaltyProblem-2':
      loyaltyProblem_3.classList.remove('active');
      loyaltyProblem_4.classList.add('active');
      setTimeout(() => window.scroll({ top: (loyaltyProblem_4.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Нет loyaltyProblem-4':
      for(let i = 0; i < hideLoyaltyProblem_4.length; i++) {hideLoyaltyProblem_4[i].classList.remove('active');}
      loyaltyProblem_7.classList.add('active');
      setTimeout(() => window.scroll({ top: (loyaltyProblem_7.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Да loyaltyProblem-4':
      for(let i = 0; i < hideLoyaltyProblem_4.length; i++) {hideLoyaltyProblem_4[i].classList.remove('active');}
      loyaltyProblem_5.classList.add('active');
      setTimeout(() => window.scroll({ top: (loyaltyProblem_5.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Нет loyaltyProblem-8':
      for(let i = 0; i < hideLoyaltyProblem_8.length; i++) {hideLoyaltyProblem_8[i].classList.remove('active');}
      loyaltyProblem_11.classList.add('active');
      setTimeout(() => window.scroll({ top: (loyaltyProblem_11.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Да loyaltyProblem-8':
      for(let i = 0; i < hideLoyaltyProblem_8.length; i++) {hideLoyaltyProblem_8[i].classList.remove('active');}
      loyaltyProblem_9.classList.add('active');
      setTimeout(() => window.scroll({ top: (loyaltyProblem_9.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Нет loyaltyProblem-12':
      for(let i = 0; i < hideLoyaltyProblem_12.length; i++) {hideLoyaltyProblem_12[i].classList.remove('active');}
      loyaltyProblem_13.classList.add('active');
      setTimeout(() => window.scroll({ top: (loyaltyProblem_13.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Да loyaltyProblem-12':
      for(let i = 0; i < hideLoyaltyProblem_12.length; i++) {hideLoyaltyProblem_12[i].classList.remove('active');}
      loyaltyProblem_16.classList.add('active');
      setTimeout(() => window.scroll({ top: (loyaltyProblem_16.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Нет loyaltyProblem-16':
      for(let i = 0; i < hideLoyaltyProblem_16.length; i++) {hideLoyaltyProblem_16[i].classList.remove('active');}
      loyaltyProblem_18.classList.add('active');
      setTimeout(() => window.scroll({ top: (loyaltyProblem_18.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Да loyaltyProblem-16':
      for(let i = 0; i < hideLoyaltyProblem_16.length; i++) {hideLoyaltyProblem_16[i].classList.remove('active');}
      loyaltyProblem_17.classList.add('active');
      setTimeout(() => window.scroll({ top: (loyaltyProblem_17.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Нет loyaltyProblem-18':
      for(let i = 0; i < hideLoyaltyProblem_18.length; i++) {hideLoyaltyProblem_18[i].classList.remove('active');}
      loyaltyProblemThanks.classList.add('active');
      setTimeout(() => window.scroll({ top: (loyaltyProblemThanks.offsetTop - offset), left: 0, behavior: 'smooth' }), 120);
      break;
    case 'Да loyaltyProblem-18':
      for(let i = 0; i < hideLoyaltyProblem_18.length; i++) {hideLoyaltyProblem_18[i].classList.remove('active');}
      loyaltyProblem_19.classList.add('active');
      setTimeout(() => window.scroll({ top: (loyaltyProblem_19.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Нет updateProblem-1':
      for(let i = 0; i < hideUpdateProblem.length; i++) {hideUpdateProblem[i].classList.remove('active');}
      updateProblem_2.classList.add('active');
      setTimeout(() => window.scroll({ top: (updateProblem_2.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Да updateProblem-1':
      for(let i = 0; i < hideUpdateProblem.length; i++) {hideUpdateProblem[i].classList.remove('active');}
      updateProblem_3.classList.add('active');
      setTimeout(() => window.scroll({ top: (updateProblem_3.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Сервера updateProblem-3':
      for(let i = 0; i < hideUpdateProblem_3.length; i++) {hideUpdateProblem_3[i].classList.remove('active');}
      updateProblem_4.classList.add('active');
      setTimeout(() => window.scroll({ top: (updateProblem_4.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'Кассы updateProblem-3':
      for(let i = 0; i < hideUpdateProblem_3.length; i++) {hideUpdateProblem_3[i].classList.remove('active');}
      updateProblem_4_2.classList.add('active');
      setTimeout(() => window.scroll({ top: (updateProblem_4_2.offsetTop - offset), left: 0, behavior: 'smooth' }), 110);
      break;
    case 'typeWork4-2-yes tw4-2':
      for(let i = 0; i < hideTypeWork_4_2.length; i++) {hideTypeWork_4_2[i].classList.remove('active');}
      typeWork4_final.classList.add('active');
      setTimeout(() => window.scroll({ top: (typeWork4_final.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typeWork4-2-no tw4-2':
      for(let i = 0; i < hideTypeWork_4_2.length; i++) {hideTypeWork_4_2[i].classList.remove('active');}
      typeWork4_4.classList.add('active');
      setTimeout(() => window.scroll({ top: (typeWork4_4.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typeWork4-4-yes tw4-4':
      for(let i = 0; i < hideTypeWork_4_4.length; i++) {hideTypeWork_4_4[i].classList.remove('active');}
      typeWork4_6.classList.add('active');
      setTimeout(() => window.scroll({ top: (typeWork4_6.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
      break;
    case 'typeWork4-4-no tw4-4':
      for(let i = 0; i < hideTypeWork_4_4.length; i++) {hideTypeWork_4_4[i].classList.remove('active');}
      typeWork4_final.classList.add('active');
      setTimeout(() => window.scroll({ top: (typeWork4_final.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);
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

let fieldsetForm2 = document.querySelectorAll("#form-2 .item:not(.upload):not([class*='-final'])");
for(let i=0; i<fieldsetForm2.length; i++){fieldsetForm2[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}

let fieldsetTypework1 = document.querySelectorAll(".item[name='typeWork1']");
for(let i=0; i<fieldsetTypework1.length; i++){fieldsetTypework1[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}

let fieldsetTypework2 = document.querySelectorAll(".item[name='typeWork2']:not([class*='-final'])");
for(let i=0; i<fieldsetTypework2.length; i++){fieldsetTypework2[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}

let fieldsetFiscalRegistrarOther = document.querySelectorAll(".item[name='fiscalRegistrarOther']");
for(let i=0; i<fieldsetFiscalRegistrarOther.length; i++){fieldsetFiscalRegistrarOther[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}

let fieldsetFiscalRegistrarModel = document.querySelectorAll(".item:not([class*='-final']):not([class*='problemFormChecks-1'])[name='fiscalRegistrarModel']:not(.fiscalRegistrar-12):not(.problemFormChecks-3)");
for(let i=0; i<fieldsetFiscalRegistrarModel.length; i++){fieldsetFiscalRegistrarModel[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}

let fieldsetFiscalListDrivers = document.querySelectorAll(".item:not([class*='-final']):not([class*='problemFormChecks-6']):not([class*='problemFormChecks-8'])[name='fiscalListDrivers']");
for(let i=0; i<fieldsetFiscalListDrivers.length; i++){fieldsetFiscalListDrivers[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}

let fieldsetFiscalAnotherDriver = document.querySelectorAll(".item[name='fiscalAnotherDriver']");
for(let i=0; i<fieldsetFiscalAnotherDriver.length; i++){fieldsetFiscalAnotherDriver[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}

let cashHardwareProblem = document.querySelectorAll(".item[name='cashHardwareProblem']");
for(let i=0; i<cashHardwareProblem.length; i++){cashHardwareProblem[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}

let equipmentAreaProblem = document.querySelectorAll(".item[name='equipmentAreaProblem']");
for(let i=0; i<equipmentAreaProblem.length; i++){equipmentAreaProblem[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}

let prismVideoProblem = document.querySelectorAll(".item[name='prismVideoProblem']:not([class*='-final']");
for(let i=0; i<prismVideoProblem.length; i++){prismVideoProblem[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}

let programSetProblemItems1 = document.querySelectorAll(".item:not([class*='-final'])[name='programSetProblemItems1']");
for(let i=0; i<programSetProblemItems1.length; i++){programSetProblemItems1[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}

let programSetProblemItems2 = document.querySelectorAll(".item[name='programSetProblemItems2']");
for(let i=0; i<programSetProblemItems2.length; i++){programSetProblemItems2[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}

let anotherSetProblem = document.querySelectorAll(".item:not([class*='-final'])[name='anotherSetProblem']");
for(let i=0; i<anotherSetProblem.length; i++){anotherSetProblem[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}

let loyaltyProblem = document.querySelectorAll(".item[name='loyaltyProblem']:not([class*='Final-']):not([class*='-final'])");
for(let i=4; i<loyaltyProblem.length; i++){loyaltyProblem[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}

let updateProblem = document.querySelectorAll(".item[name='updateProblem']:not([class*='-final']):not(.updateProblem-3)");
for(let i=2; i<updateProblem.length; i++){updateProblem[i].onclick = function(){this.nextElementSibling.classList.add('active');
setTimeout(() => window.scroll({ top: (this.nextElementSibling.offsetTop - offset), left: 0, behavior: 'smooth' }), 100);}}


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
const select4 = new CustomSelect('#select-4');
const selectTime = new CustomSelect('#select-time');
/* SELECT Style END */

/* CUSTOM FILE UPLOADER START */
let dropArea = document.getElementById("drop-area");
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false)   
  document.body.addEventListener(eventName, preventDefaults, false)
});
['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false)
});
['dragleave', 'drop'].forEach(eventName => {
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

const navForms = document.querySelector('.nav');
let titleH = document.querySelectorAll('h4.title-anchor');
for(let i = 0; i < titleH.length; i++){
  (function(i){
    this.setAttribute("id", 'title'+ ++i);
  }).call(titleH[i], i);
}
window.addEventListener('scroll', () => {
  let titleActive = document.querySelectorAll('.active .title-anchor');
  let ToC = "<ul>";
  let newLine, el, title, link;
  for(let i = 0; i < titleActive.length; i++){
    (function(i){
      el = this;
      title = el.textContent;
      link = "#" + el.getAttribute("id");
      newLine = "<li>" + "<a href='" + link + "'>" + title + "</a>" + "</li>";
      ToC += newLine;
    }).call(titleActive[i], i);
  }
  ToC += "</ul>";
  navForms.innerHTML = ToC;
  const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
			}
		});
	});
	document.querySelectorAll('.active .title-anchor[id]').forEach((section) => {
		observer.observe(section);
	});
  /* Anchors scroll START */
  const anchors = [].slice.call(document.querySelectorAll('.nav a[href*="#"]')),
        animationTime = 81,
        framesCount = 45;
  anchors.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
      let scroller = setInterval(function() {
        let scrollBy = coordY / framesCount;
        if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
          window.scrollBy(0, scrollBy);
        } else {
          window.scrollTo({
            top: coordY -189,
            // behavior: "smooth"
        });
          clearInterval(scroller);
        }
      }, animationTime / framesCount);
    });
  });
  const scrollContainer = document.querySelector("nav ul");
  scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
  });
});
/* Anchors scroll END */

let prevScroll = window.pageYOffset;
let currentScroll;

document.addEventListener('DOMContentLoaded', () => {
  const onScrollNav = () => {
    window.addEventListener('scroll', () => {
      currentScroll = window.pageYOffset
      const navHidden = () => navForms.classList.contains('active')
      if (currentScroll > prevScroll && !navHidden()) {
        navForms.classList.add('active')
      }
      if (currentScroll < 150 && navHidden()) {
        navForms.classList.remove('active')
      }
      prevScroll = currentScroll
    })
  }
  onScrollNav()
});