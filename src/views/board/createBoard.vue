<template>
    <div>
        <div align="right" style="margin:10px">
            <button type="button" class="btn btn-outline-info btn-sm" @click='writeContent()'>Write</button>&nbsp;
        </div>
        <label v-bind="username">이름 
        <input :value="text" name="username" @input="event => text = event.target.value">
        </label>
        <br/>
         <label for="title" v-bind="username">제목 
        <input :value="text" id="title" name="username" @input="event => text = event.target.value">
        </label>
        <br/>
         <label v-bind="username">내용 
        <textarea v-model="text"></textarea>
        </label>
    </div>
</template>