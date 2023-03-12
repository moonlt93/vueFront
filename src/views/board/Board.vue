<template>
    <div>
        <div align="right" style="margin:10px">
            <button type="button" class="btn btn-outline-info btn-sm" @click='writeContent()'>Write</button>&nbsp;
        </div>
        <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Writer</th>
            <th scope="col">content</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in contents" v-bind:key="item.id" @click='toDetail(item.id)'>
                <th scope="row">{{item.id}}</th>
                <td >{{item.title}}</td>
                <td>{{item.name}}</td>
                <td>{{ formatDate(item.updatedAt)}}</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>