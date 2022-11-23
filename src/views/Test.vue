<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header d-flex flex-row">
        <h4 class="card-title align-self-center">Users Manager</h4>
      </div>
      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th class="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="Empyloyee in posts" :key="Empyloyee.Emp_ID">
              <td>{{ Empyloyee.Emp_ID }}</td>
              <td>{{ Empyloyee.Emp_Name }}</td>
              <td>{{ Empyloyee.Emp_Mail }}</td>
              <td>{{ Empyloyee.Emp_Phone }}</td>
              <td class="text-right">

                <!--- BUTTON COMPONENT HERE --->
                <!-- <button class="btn btn-link btn-info btn-icon btn-sm" data-toggle="modal" data-target="#userInfoModal"
                  @click="getEmployeeInfo(Empyloyee.Emp_ID)">
                  <i class="icon-alert-circle-exc">เพิ่ม</i>
                </button> -->

                <button class="btn btn-link btn-warning btn-icon btn-sm" data-toggle="modal"
                  data-target="#userEditModal" aria-expanded="false" aria-controls="userEditModal"
                  @click="getEmployeeInfo(Empyloyee.Emp_ID)">
                  <i class="icon-pencil">แก้ไข</i>
                </button>

                <button class="btn btn-link btn-danger btn-icon btn-sm" data-bs-toggle="modal"
                  data-bs-target="#userRemoveModal" aria-expanded="false" aria-controls="userRemoveModal"
                  @click="getEmployeeInfo(Empyloyee.Emp_ID)">
                  <!-- @click="getUserInfo(user)" -->
                  <i class="bi bi-bucket"></i>ลบออก
                </button>

                <!-- <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  Button with data-bs-target
                </button> -->
                <!--- END BUTTON COMPONENT --->

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="collapse" id="collapseExample">
    <div class="card card-body">
      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user
      activates the relevant trigger.
    </div>
  </div>

  <!-- MODALS -->
  <!-- ADD USER MODAL -->
  <!-- <div class="modal modal-black fade" id="addUserModal" tabindex="-1" role="dialog" aria-labelledby="addUserModal"
    aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="addUserModal">Add new user</h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
            <i class="tim-icons icon-simple-remove"></i>
          </button>
        </div>
        <form class="form-horizontal">
          <div class="modal-body">
            <div class="d-flex flex-row">
              <label class="col-md-4 col-form-label">Name</label>
              <div class="col-md-6">
                <div class="form-group">
                  <input type="name" name="name" class="form-control" v-model="newUser.name" />
                </div>
              </div>
            </div>
            <div class="d-flex flex-row">
              <label class="col-md-4 col-form-label">Username</label>
              <div class="col-md-6">
                <div class="form-group">
                  <input type="username" name="username" class="form-control" v-model="newUser.username" />
                </div>
              </div>
            </div>
            <div class="d-flex flex-row">
              <label class="col-md-4 col-form-label">Email</label>
              <div class="col-md-6">
                <div class="form-group">
                  <input type="email" name="email" class="form-control" v-model="newUser.email" />
                </div>
              </div>
            </div>
            <div class="d-flex flex-row">
              <label class="col-md-4 col-form-label">Password</label>
              <div class="col-md-6">
                <div class="form-group">
                  <input type="password" name="password" class="form-control" v-model="newUser.password" />
                </div>
              </div>
            </div>
            <div class="d-flex flex-row">
              <label class="col-md-4 col-form-label">Confirm Password</label>
              <div class="col-md-6">
                <div class="form-group">
                  <input type="password" name="confirmPassword" class="form-control"
                    v-model="newUser.confirmPassword" />
                </div>
              </div>
            </div>
            <div class="d-flex flex-row">
              <label class="col-md-4 col-form-label">Roles</label>
              <div class="col-md-6">
                <div class="form-group">
                  <input type="roles" name="roles" class="form-control" v-model="newUser.roles" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" @click.stop.prevent="addUser()">
              Create user
            </button>
          </div>
        </form>
      </div>
    </div>
  </div> -->
  <!-- END ADD USER MODAL -->

  <!-- USER's INFO MODAL -->
  <div class="modal modal-black fade" id="userInfoModal" tabindex="-1" role="dialog" aria-labelledby="userInfoModal"
    aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="userInfoModal">
            <strong class="text-primary">
              {{ EmployeeInfo.Emp_Name }}
            </strong>'s Basic Information
          </h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
            <i class="tim-icons icon-simple-remove"></i>
          </button>
        </div>
        <div class="modal-body" id="userInfo">
          <div class="row">
            <div class="col-6">
              <p>ID: {{ EmployeeInfo.Emp_ID }}</p>
              <p>Phone: {{ EmployeeInfo.Emp_Phone }}</p>
              <p>Username: {{ EmployeeInfo.Emp_Identity_ID }}</p>
            </div>
            <div class="col-6">
              <p>Name: {{ EmployeeInfo.Emp_Name }}</p>
              <p>Email: {{ EmployeeInfo.Emp_Mail }}</p>
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex flex-row-reverse">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- END USER's INFO MODAL -->

  <!-- EDIT USER MODAL -->
  <div class="modal modal-black fade" id="userEditModal" tabindex="-1" role="dialog" aria-labelledby="userEditModal"
    aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="userEditModal">
            Edit user
            <strong class="text-primary">
              {{ EmployeeInfo.Emp_Name }}
            </strong>
          </h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
            <i class="tim-icons icon-simple-remove"></i>
          </button>
        </div>
        <form class="form-horizontal" method="PUT">
          <div class="modal-body">
            <div class="d-flex flex-row">
              <label class="col-md-3 col-form-label">ID</label>
              <div class="col-md-9">
                <div class="form-group">
                  <input type="text" class="form-control" name="username" v-model="EmployeeInfo.Emp_ID" />
                </div>
              </div>
            </div>
            <div class="d-flex flex-row">
              <label class="col-md-3 col-form-label">Name</label>
              <div class="col-md-9">
                <div class="form-group">
                  <input type="text" class="form-control" name="username" v-model="EmployeeInfo.Emp_Name" />
                </div>
              </div>
            </div>
            <div class="d-flex flex-row">
              <label class="col-md-3 col-form-label">Email</label>
              <div class="col-md-9">
                <div class="form-group">
                  <input type="email" name="email" class="form-control" v-model="EmployeeInfo.Emp_Mail" />
                </div>
              </div>
            </div>
            <div class="d-flex flex-row">
              <label for="input gender1" class="form-label">สิทธ์การเข้าถึง</label>
              <select id="input gender" class="form-select" v-model="this.EmployeeInfo.Role">
                <option value="Employee">Employee</option>
                <option value="Admin">Admin</option>
                <option value="Executive">Executive</option>
              </select>
            </div>
          </div>
          <div class="modal-footer d-flex flex-row">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="submit" class="btn btn-primary" data-dismiss="modal" @click="updateUser()">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- END EDIT USER MODAL -->

  <!-- REMOVE USER MODAL -->
  <div class="modal modal-black fade" id="userRemoveModal" tabindex="-1" role="dialog" aria-labelledby="userRemoveModal"
    aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="userRemoveModal">
            Confirm delete user
            <!-- <strong class="text-primary">
              {{ userInfo.Emp_ID }} - {{ userInfo.Emp_Name }}
            </strong> -->
          </h4>
          <button type="button" class="close" data-dismiss="modal">
            <i class="tim-icons icon-simple-remove"></i>
          </button>
        </div>
        <div class="modal-body h4 text-center mt-4">
          Delete user
          <strong class="text-danger">
            {{ EmployeeInfo.Emp_ID }} - {{ EmployeeInfo.Emp_Name }}
          </strong>
        </div>
        <div class="modal-footer d-flex flex-row">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Cancel
          </button>
          <button type="button" class="btn btn-danger" data-dismiss="modal" @click="deleteUser()">
            Delete User
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- END REMOVE USER MODAL -->
  <!-- END MODALS -->
</template>

<script >
import * as Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios'
// const app = createApp()
// app.use(VueAxios, axios)
// import DataTable from 'datatables.net-vue3';
const API_URL = "http://192.168.1.43:3000/employee";
export default {
  data() {
    return {
      posts: [],
      EmployeeInfo: {
        Emp_ID: '',
        Emp_Identity_ID: '',
        Emp_Name: '',
        Emp_Birthday: '',
        Emp_Sex: '',
        Emp_IssueDate: '',
        Emp_Address: '',
        Emp_Phone: '',
        Emp_Mail: '',
        Emp_bloodtype: '',
        Emp_sick: '',
        pwd: '',
        Emp_nationality: '',
        Emp_race: '',
        Emp_Scanpic: '',
        Emp_religion: '',
        Emp_Addressnow: '',
        Emp_Pic: '',
        Role: ''
      }
    }
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios.get(`http://192.168.1.43:3000/employee`)
        .then((response) => {
          this.posts = response.data
          console.log(response)
        })
        .catch((error) => console.log(error.response))
    },
    deleteUser(Emp_ID) {
      axios.delete(`${API_URL}/` + Emp_ID)//+ result.Emp_ID,${this.EmployeeInfo.Emp_ID}
        .then(() => {
          this.getUser();
          // console.log(request);
        })
        .catch((error) => {
          console.log("ERRRR:: ", error.response.data);
        });
    },
    async getEmployeeInfo(Emp_ID) {
      await axios
        .get(`${API_URL}/${Emp_ID}`)
        .then((res) => {
          this.EmployeeInfo.Emp_ID = res.data.Emp_ID;
          this.EmployeeInfo.Emp_Name = res.data.Emp_Name;
          this.EmployeeInfo.Emp_Mail = res.data.Emp_Mail;
          this.EmployeeInfo.pwd = res.data.pwd;
          this.EmployeeInfo.Emp_Identity_ID = res.data.Emp_Identity_ID;
          this.EmployeeInfo.Emp_Phone = res.data.Emp_Phone;
          this.EmployeeInfo.Emp_Birthday = res.data.Emp_Birthday;
          this.EmployeeInfo.Emp_Sex = res.data.Emp_Sex;
          this.EmployeeInfo.Emp_Address = res.data.Emp_Address;
          this.EmployeeInfo.Emp_bloodtype = res.data.Emp_bloodtype;
          this.EmployeeInfo.Emp_sick = res.data.Emp_sick;
          this.EmployeeInfo.Emp_nationality = res.data.Emp_nationality;
          this.EmployeeInfo.Emp_race = res.data.Emp_race;
          this.EmployeeInfo.Emp_religion = res.data.Emp_religion;
          this.EmployeeInfo.Emp_Addressnow = res.data.Emp_Addressnow;
          this.EmployeeInfo.Role = res.data.Role;
        },
        // console.log(res)
        )
        .catch((error) => {
          console.log("ERRRR:: ", error.response.data);
        })
        // console.log(res);
    },
    updateUser() {
      axios
        .put(`${API_URL}/${this.EmployeeInfo.Emp_ID}`, {
          Emp_ID: this.EmployeeInfo.Emp_ID,
          Emp_Identity_ID: this.EmployeeInfo.Emp_Identity_ID,
          Emp_Name: this.EmployeeInfo.Emp_Name,
          Emp_Birthday: this.EmployeeInfo.Emp_Birthday,
          Emp_Sex: this.EmployeeInfo.Emp_Sex,
          Emp_Address: this.EmployeeInfo.Emp_Address,
          Emp_Phone: this.EmployeeInfo.Emp_Phone,
          Emp_Mail: this.EmployeeInfo.Emp_Mail,
          Emp_bloodtype: this.EmployeeInfo.Emp_bloodtype,
          Emp_sick: this.EmployeeInfo.Emp_sick,
          pwd: this.EmployeeInfo.pwd,
          Emp_nationality: this.EmployeeInfo.Emp_nationality,
          Emp_race: this.EmployeeInfo.Emp_race,
          Emp_religion: this.EmployeeInfo.Emp_religion,
          Emp_Addressnow: this.EmployeeInfo.Emp_Addressnow,
          Role: this.EmployeeInfo.Role
        })
        .then((res) => {
          this.getUser();
        })
        .catch((error) => {
          console.log("ERRRR:: ", error.response.data);
        });
    },
    // async addEmployee() {
    //   await axios.post(`${API_URL}/`, this.EmployeeInfo)
    //     .then(function (response) {
    //       alert('การเพิ่มข้อมูลผู้ใช้สำเร็จ ' + response)
    //     })
    // },
    // onChangeFileUpload() {
    //   this.post.Emp_Pic = this.$refs.file[0];
    // },
  }
};

</script>