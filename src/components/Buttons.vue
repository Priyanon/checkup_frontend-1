<template>
    <button
      class="btn btn-link btn-info btn-icon btn-sm"
      data-toggle="modal" data-target="#userInfoModal"
      @click="getUserInfo(user)">
      <i class="icon-alert-circle-exc">+</i>
    </button>
    
    <button
      class="btn btn-link btn-warning btn-icon btn-sm"
      data-toggle="modal" data-target="#userEditModal"
      @click="getUserInfo(user)">
      <i class="icon-pencil">++</i>
    </button>
    
    <button
      class="btn btn-link btn-danger btn-icon btn-sm"
      data-toggle="modal" data-target="#userRemoveModal"
      @click="getUserInfo(user)">
      <i class="icon-simple-remove">+++</i>
    </button>
  </template>
  <script>
  export default {
    props:{

    }
  }
  </script>