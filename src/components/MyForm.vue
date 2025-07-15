<template> 
<div class="info-form">Введите данные:
    <input v-model="surname" type="text" placeholder="Фамилия">
    <input v-model="name" type="text" placeholder="Имя">
    <input type="text" placeholder="Отчество">
    <input type="text" placeholder="Дата рождения">
    <input type="text" placeholder="E-mail">
    <input type="text" placeholder="ИНН">
    <button @click="sendData">Отправить</button>
</div>

</template>



<script setup>
/* let form = {surname:"", name:"",patronymic: "",DateBirth: "", EMail: "", INN: ""}

function sendData() {
    console.log("Данные формы ", form)
} */

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
}


</style>