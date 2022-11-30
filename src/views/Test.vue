<template>
  <div>
    <div class="container">
      <h1 class="page-header text-center">Vue.js Axios CRUD (Create, Read, Update and Delete) using PHP MySQLi</h1>
      <div id="vuejscrudmembers">
        <div class="col-md-8 col-md-offset-2">
          <div class="row">
            <div class="col-md-12">
              <h2>Member List
                <button class="btn btn-primary pull-right" @click="showAddModal = true"><span
                    class="glyphicon glyphicon-plus"></span> Member</button>
              </h2>
            </div>
          </div>

          <div class="alert alert-danger text-center" v-if="errorMessage">
            <button type="button" class="close" @click="clearMessage();"><span aria-hidden="true">0000×</span></button>
            <span class="glyphicon glyphicon-alert"></span> {{ errorMessage }}
          </div>

          <div class="alert alert-success text-center" v-if="successMessage">
            <button type="button" class="close" @click="clearMessage();"><span aria-hidden="true">5555×</span></button>
            <span class="glyphicon glyphicon-ok"></span> {{ successMessage }}
          </div>

          <table class="table table-bordered table-striped">
            <thead>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Action</th>
            </thead>
            <tbody>
              <tr v-for="Employee in posts" :key="Employee.Emp_ID">
                <td>{{ Employee.Emp_ID }}</td>
                <td>{{ Employee.Emp_Name }}</td>
                <td>
                  <button class="btn btn-success" @click="showEditModal = true; selectMember(posts);"><span
                      class="glyphicon glyphicon-edit"></span> Edit</button>
                  <button class="btn btn-danger" @click="showDeleteModal = true; selectMember(posts);"><span
                      class="glyphicon glyphicon-trash"></span> Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- MODALS -->
    <!-- Add Modal -->
    <div class="myModal" v-if="showAddModal">
      <div class="modalContainer">
        <div class="modalHeader">
          <span class="headerTitle">Add New Member</span>
          <button class="closeBtn pull-right" @click="showAddModal = false">×</button>
        </div>
        <div class="modalBody">
          <div class="form-group">
            <label>Firstname:</label>
            <input type="text" class="form-control" v-model="newMember.firstname">
          </div>
          <div class="form-group">
            <label>Lastname:</label>
            <input type="text" class="form-control" v-model="newMember.lastname">
          </div>
        </div>
        <hr>
        <div class="modalFooter">
          <div class="footerBtn pull-right">
            <button class="btn btn-default" @click="showAddModal = false"><span
                class="glyphicon glyphicon-remove"></span> Cancel</button> <button class="btn btn-primary"
              @click="showAddModal = false; saveMember();"><span class="glyphicon glyphicon-floppy-disk"></span>
              Save</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Modal -->
    <div class="myModal" v-if="showEditModal">
      <div class="modalContainer">
        <div class="editHeader">
          <span class="headerTitle">Edit Member</span>
          <button class="closeEditBtn pull-right" @click="showEditModal = false">×</button>
        </div>
        <div class="modalBody">
          <div class="form-group">
            <label>ID:</label>
            <input type="text" class="form-control" v-model="clickMember.Emp_ID">
          </div>
          <div class="form-group">
            <label>Name:</label>
            <input type="text" class="form-control" v-model="clickMember.Emp_Name">
          </div>
        </div>
        <hr>
        <div class="modalFooter">
          <div class="footerBtn pull-right">
            <button class="btn btn-default" @click="showEditModal = false"><span
                class="glyphicon glyphicon-remove"></span> Cancel</button> <button class="btn btn-success"
              @click="showEditModal = false; updateMember();"><span class="glyphicon glyphicon-check"></span>
              Save</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Modal -->
    <div class="myModal" v-if="showDeleteModal">
      <div class="modalContainer">
        <div class="deleteHeader">
          <span class="headerTitle">Delete Member</span>
          <button class="closeDelBtn pull-right" @click="showDeleteModal = false">×</button>
        </div>
        <div class="modalBody">
          <h5 class="text-center">Are you sure you want to Delete</h5>
          <h2 class="text-center">{{ clickMember.Emp_ID }} {{ clickMember.Emp_Name }}</h2>
        </div>
        <hr>
        <div class="modalFooter">
          <div class="footerBtn pull-right">
            <button class="btn btn-default" @click="showDeleteModal = false"><span
                class="glyphicon glyphicon-remove"></span> Cancel</button> <button class="btn btn-danger"
              @click="showDeleteModal = false; deleteMember();"><span class="glyphicon glyphicon-trash"></span>
              Yes</button>
          </div>
        </div>
      </div>
    </div>
    <!-- END REMOVE USER MODAL -->
    <!-- END MODALS -->
  </div>
</template>

<script >

import axios from 'axios';
import VueAxios from 'vue-axios'
// const app = createApp()
// app.use(VueAxios, axios)
// import DataTable from 'datatables.net-vue3';
const API_URL = "http://192.168.43.120:3000/employee";
export default {
  data() {
    return {
      showAddModal: false,
      showEditModal: false,
      showDeleteModal: false,
      errorMessage: "",
      successMessage: "",
      posts: [],
      newMember: { firstname: '', lastname: '' },
      clickMember: {}
    }
  },

  mounted () {
    this.getAllMembers();
  },

  methods: {
    getAllMembers() {
      axios.get(`${API_URL}`)
        .then((response) => {
          this.posts = response.data
          console.log(response)
        })
        .catch((error) => console.log(error.response))
    },

    // saveMember() {
    //   //console.log(app.newMember);
    //   var memForm = this.toFormData(this.newMember);
    //   axios.post('${API_URL}', memForm)
    //     .then(function (response) {
    //       //console.log(response);
    //       this.newMember = { firstname: '', lastname: '' };
    //       if (response.data.error) {
    //         this.errorMessage = response.data.message;
    //       }
    //       else {
    //         this.successMessage = response.data.message
    //         this.getAllMembers();
    //       }
    //     });
    // },

    updateMember() {
      var memForm = this.toFormData(this.clickMember);
      axios.post('${API_URL}', memForm)
        .then(function (response) {
          //console.log(response);
          this.clickMember = {};
          if (response.data.error) {
            this.errorMessage = response.data.message;
          }
          else {
            this.successMessage = response.data.message
            this.getAllMembers();
          }
        });
    },

    deleteMember() {
      var memForm = this.clickMember;
      axios.post('${API_URL}', memForm)
        .then(function (response) {
          //console.log(response);
          this.clickMember = {};
          if (response.data.error) {
            this.errorMessage = response.data.message;
          }
          else {
            this.successMessage = response.data.message
            this.getAllMembers();
          }
        });
    },

    selectMember(posts) {
      this.clickMember = posts;
    },

    toFormData(obj) {
      var form_data = FormData();
      for (var key in obj) {
        form_data.append(key, obj[key]);
      }
      return form_data;
    },

    // clearMessage() {
    //   this.errorMessage = '';
    //   this.successMessage = '';
    // }

  }
};
</script>
<style scoped>
.myModal{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: rgba(0, 0, 0, 0.4);
}
 
.modalContainer{
    width: 555px;
    background: #FFFFFF;
    margin:auto;
    margin-top:50px;
}
 
.modalHeader{
    padding:10px;
    background: #008CBA;
    color: #FFFFFF;
    height:50px;
    font-size:20px;
    padding-left:15px;
}
 
.editHeader{
    padding:10px;
    background: #4CAF50;
    color: #FFFFFF;
    height:50px;
    font-size:20px;
    padding-left:15px;
}
 
.deleteHeader{
    padding:10px;
    background: #f44336;
    color: #FFFFFF;
    height:50px;
    font-size:20px;
    padding-left:15px;
}
 
.modalBody{
    padding:40px;
}
 
.modalFooter{
    height:36px;
}
 
.footerBtn{
    margin-right:10px;
    margin-top:-9px;
}
 
.closeBtn{
    background: #008CBA;
    color: #FFFFFF;
    border:none;
}
 
.closeEditBtn{
    background: #4CAF50;
    color: #FFFFFF;
    border:none;
}
 
.closeDelBtn{
    background: #f44336;
    color: #FFFFFF;
    border:none;
}
</style>