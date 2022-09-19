<template>
  <!-- CL -->
  <div class="container fluid">
    <br />
    <div>
      <div class="card">
        <div class="card-header">
          <h2>รายชื่อนักศึกษา</h2>
        </div>
        <div class="card-body">
          <table class="table table-hover">
            <thead>
              <tr>
                <th style="width: 8.33%">ลำดับ</th>
                <th style="width: 15%">รหัสนักศึกษา</th>
                <th style="width: 40%">ชื่อนักศึกษา</th>
                <th style="width: 20%">สถานะ</th>
                <th style="width: 40%">ดำเนินการ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(student,index) in $store.getters.students" :key="index">
                <td>{{ index + 1 }}</td>
                <td v-if="index !== editIndex" >{{ student.studentID }}</td>
                <td v-if="index !== editIndex" >{{ student.name }}</td>
                <td v-if="index !== editIndex" >{{ student.status }}</td>
                <td v-if="index !== editIndex" >
                  <button
                    type="button"
                    class="btn btn-danger mr-2"
                    v-on:click="deleteStudent(index)"
                  >ลบ</button>
                  <button
                    type="button"
                    class="btn btn-warning"
                    v-on:click="openEdit(index,student)"
                  >แก้ไข</button>
                </td>

                <td v-if="index === editIndex" >
                  <input type="number" :value="studentID" v-on:change="studentID = $event.target.value" />
                </td>
                <td v-if="index === editIndex" >
                  <input type="text" :value="name" v-on:change="name = $event.target.value" />
                </td>
                <td v-if="index === editIndex" >
                  <input type="text" :value="status" v-on:change="status = $event.target.value" />
                </td>
                <td v-if="index === editIndex">
                  <button type="button" class="btn btn-success" v-on:click="editStudent()">ยืนยัน</button>
                  <button
                    type="button"
                    class="btn btn-secondary mr-2"
                    v-on:click="closeEdit()"
                  >ยกเลิก</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editIndex: -1,
      studentID: "",
      name: "",
      status: ""
    };
  },
  methods:{
    deleteStudent(index){
      this.$store.dispatch("deleteStudent", index);
    },
    openEdit(index, student) {
      this.editIndex = index;
      this.studentID = student.studentID;
      this.name = student.name;
      this.status = student.status;
    },
    closeEdit() {
      this.editIndex = -1;
      this.studentID = "";
      this.name = "";
      this.status = "";
    },
    editStudent() {
      let payload = {
        index: this.editIndex,
        _id: _id,
        studentID: this.studentID,
        name: this.name,
        status: this.status
      };
      this.$store.dispatch("editStudent", payload).then(this.closeEdit());
    }
  
  }
}
</script>