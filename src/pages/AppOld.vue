<template>

<!-- Родительский компонент. -->
  <h1>Родительский компонент</h1>

<!-- Используем компонент TestComponents и передаем ему строковое значение (propMessage) и обработчики событий custom-event(handleCounterUpdate) и reset-event(handleCounterReset). -->
  <TestComponents propMessage="Сообщение от родителя!" @custom-event="handleCounterUpdate" @reset-event="handleCounterReset"></TestComponents>

<div class="my-form"><MyForm></MyForm></div>

<!-- Отображаем значение счетчика, полученное из дочернего компонента. -->
  <p>Значение счетчика из дочернего компонента: {{ counterValue }}</p>

<!-- Отображаем сколько раз счетчик был сброшен. -->
  <p>Счетчик был сброшен: {{ resetCount }} раз</p>





<!-- ФОРМА -->

<div>
  <h1>Form Data</h1>
  <MyForm @formSubmitted="handleFormSubmit"/>

  <div v-if="formData">
    <h3>Введенные данные</h3>
    <ul>
      <li v-for="(value, key) in formData" :key="key">{{ key }} : {{ value }} 
      </li>
    </ul>
  </div>
</div></template>


<script setup>
//import HelloWorld from './components/HelloWorld.vue'

/* Импортируем ref из Vue для создания реактивных переменных. */
import {ref} from 'vue'

/* import TestComponents from './components/TestComponents.vue'*/
import MyForm from '../components/MyForm.vue' 

/* Создаем реактивную переменную counterValue и инициализируем ее значение 0. */
const counterValue = ref(0)

/* Создаем реактивную переменную resetCount и инициализируем ее значение 0. */
const resetCount = ref(0)

/* Функция обработчки события custom-event (увеличение счетчика), получает новое значение счетчика из дочернего компонента. */
const handleCounterUpdate = (newValue, myValue) => {
  counterValue.value = newValue;                            /* Обновляем значение counterValue в родительском компоненте. */
console.log('Мое значение ',myValue)
}

/* Функция обрабочик события reset-event (сброс счетчика); вызывается, когда счетчик в дочернем компонетне был сброшен. */
const handleCounterReset = () => {
  resetCount.value++;                                       /* Увеличиваем количество сбросов на 1. */
  counterValue.value = 0;                                   /* Обнуляем значение счетчика в родительском компоненте. */
}

/* ФОРМА */

const formData = ref({
  surname: '',
  name: '',
  patronymic: '',
  DateBirth: '',
  EMail: '',
  INN: ''
})
const handleFormSubmit = (form) => {
  formData.value = form;       /* Получаем данные формы от дочернего компонента */
console.log(form, "из родителя")
}
</script>


<style scoped>
h1{
  text-align: center;
  
}


</style>