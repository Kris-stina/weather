<template> 
<div class="info-form">
    <p class="info-form__title">Введите данные:</p>
    <input v-model="surname" type="text" placeholder="Фамилия" class="info-form__input">
    <input v-model="name" type="text" placeholder="Имя" class="info-form__input">
    <input type="text" placeholder="Отчество" class="info-form__input">
    <input type="text" placeholder="Дата рождения" class="info-form__input">
    <input type="text" placeholder="E-mail" class="info-form__input">
    <input type="text" placeholder="ИНН" class="info-form__input">
    <button @click="sendData" class="info-form__button">Отправить</button>
</div>

</template>



<script setup>
import {ref, defineEmits} from 'vue';

const surname = ref('');
const name = ref('');
const patronymic = ref('');
const DateBirth = ref('');
const EMail = ref('');
const INN = ref('');

const emit = defineEmits(['formSubmitted']);

function sendData() {
    const form = {
        surname: surname.value,
        name: name.value,
        patronymic: patronymic.value,
        DateBirth: DateBirth.value,
        EMail: EMail.value,
        INN: INN.value
    };

    emit('formSubmitted', form)
}
</script>



<style scoped>
.info-form{
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #6a95a6;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.info-form__input{
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 15px;
}

</style>