'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill'

import elementClosest from 'element-closest';
elementClosest(window);

//import
//timer

import countTimer from './modules/countTimer';

//menu
import togglleMenu from './modules/togglleMenu';

//pop up

import popUpDo from './modules/popUpDo';

//табы

import tabs from './modules/tabs';

//слайдер

import slider from './modules/slider';

//замена img при ховере

import changePhotosOnHover from './modules/changePhotosOnHover';

//валидация формы

import validFormsTelephone from './modules/validFormsTelephone';

//calculator

import calculator from './modules/calculator';

//send - ajax - form

import sendForm from './modules/sendForm';



//вызов
//timer

countTimer();

//menu
togglleMenu();

//pop up

popUpDo();

//табы

tabs();

//слайдер

slider();
//замена img при ховере

changePhotosOnHover();

//валидация формы

validFormsTelephone();

//calculator

calculator(100);

//send - ajax - form

sendForm();
