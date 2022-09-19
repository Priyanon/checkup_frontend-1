<template>
    <div class="container fluid">
      <br />
      <div>
        <div class="card">
          <div class="card-header">
            <h2>เพิ่มรายชื่อนักศึกษา</h2>
          </div>
          <div class="card-body">
            <form v-on:submit.prevent="addStudent()">
              <div class="form-group">
                <label>รหัสนักศึกษา</label>
                <input type="number" class="form-control" placeholder="รหัสนักศึกษา" v-model="studentID"/>
              </div>
              <div class="form-group">
                <label>ชื่อนักศึกษา</label>
                <input type="text" class="form-control" placeholder="ชื่อนักศึกษา" v-model="name"/>
              </div>
              <div class="form-group">
                <label>สถานะ</label>
                <input type="text" class="form-control" placeholder="มาเรียนหรือขาดเรียน" v-model="status"/>
              </div>
              <button type="submit" class="btn btn-primary">เพิ่มรายชื่อนักศึกษา</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        studentID: "",
        name: "",
        status: ""
      };
    },
    methods: {
      addStudent() {
        if (this.name) {
          let payload = { 
            studentID: this.studentID, 
            name: this.name, 
            status: this.status };
              this.$store.dispatch("addStudent", payload);
        }
      }
    }
  };
  </script>