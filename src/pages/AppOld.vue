<template>
<div class="parent-component">
  <!-- Родительский компонент. -->
    <h1 class="parent-component__main-title">Родительский компонент</h1>

  <!-- Используем компонент TestComponents и передаем ему строковое значение (propMessage) и обработчики событий custom-event(handleCounterUpdate) и reset-event(handleCounterReset). -->
    <TestComponents propMessage="Сообщение от родителя!" @custom-event="handleCounterUpdate" @reset-event="handleCounterReset"></TestComponents>

  <div class="parent-component__my-form"><MyForm></MyForm></div>

  <!-- Отображаем значение счетчика, полученное из дочернего компонента. -->
  <div class="parent-component__counter-info">
    <p>Значение счетчика из дочернего компонента: {{ counterValue }}</p>

  <!-- Отображаем сколько раз счетчик был сброшен. -->
    <p>Счетчик был сброшен: {{ resetCount }} раз</p>
  </div>




  <!-- ФОРМА -->

  <div class="form">
    <h1 class="form__section-title">Form Data</h1>
    <MyForm @formSubmitted="handleFormSubmit"/>

    <div v-if="formData" class="form__data-display">
      <h3>Введенные данные</h3>
      <ul>
        <li v-for="(value, key) in formData" :key="key">{{ key }} : {{ value }} 
        </li>
      </ul>
    </div>
  </div>
</div>
</template>


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


<style scoped lang="scss">
/* Общие стили */

  

/* Заголовки */
.parent-component{
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #6a95a6;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &__main-title {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #031035;
    text-align: center;
    background-color: white;
  }
  .form{
    &__section-title {
      font-size: 1.8em;
      margin-top: 30px;
      margin-bottom: 15px;
      color: #031035;
      text-align: center;
    }
    
    &__data-display {
      margin-top: 15px;
      padding: 15px;
      background-color: #f9f9f9;
      border-radius: 8px;
    }
  }

  &__my-form{
    margin-bottom: 20px;
  }

  /* Информация о счетчиках */
  &__counter-info{
    margin-top: 20px;
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 8px;
  }

  /* Данные формы */
  &__form-data-section{
    margin-top: 30px;
  }

  

  &__form-data-section__data-display h3{
    margin-bottom: 10px;
    color: #031035;
  }
  &__form-data-section__data-display ul{
    list-style: square;
    padding: 0;
    margin-left: 10px;
  }
  &__form-data-section__data-display li{
    padding: 8px 0;
    border-bottom: 2px solid #6a95a6;
  }

  /* Отключаем последнее подчеркивание */
  &__form-data-section__data-display li:last-child{
    border-bottom: none;
  }
}



</style>