<script setup>
import { ref , reactive , onMounted } from 'vue'
import { getStudent , addStudent , deleteStudent , updateStudent , deleteOneStudent } from '../api/student'

const dialogFormVisible = ref(false)
const formLabelWidth = '80px'

let status = ref(null)

let id = ref(null)

const form = reactive({
  name: '',
  age:'',
  sex:'',
  address:'',
  date:''
})

let ids = ref([])

let deleteid = ref(null)

const tableData = ref([])

let handleClick = (index,row) => {
  dialogFormVisible.value = true
  status.value = 2
  id.value = index + 1
}

let handleDelete = (index,row) => {
  // console.log(index);
  deleteid.value = index + 1
  console.log(deleteid.value);
  deleteOneStudent(deleteid.value).then(
    res => {
      console.log(res);
    },
    err => {
      console.log('这是一个错误'+err);
    }
  )
}

let adds = () => {
  dialogFormVisible.value = true
  status.value = 1
}

let submit = () => {
  dialogFormVisible.value = false
  let student = form
  // console.log(student);
  if (status.value == 1) {
    // console.log('这是添加');
    addStudent(student).then(
      res => {
        // console.log(res);
        window.location.reload();
      },
      err => {
        console.log(err);
      }
    )
  }

  if (status.value == 2) {
    // console.log('这是修改');
    updateStudent(id.value,student).then(
      res => {
        console.log(res);
        window.location.reload();
      },
      err => {
        console.log(err);
      }
    )
  }
  
}

let changes = (selection) => {
  let studentmsg = selection
  ids.value = studentmsg.map(item => {
    return item.id
  })
  console.log(ids.value);
}

let deletechange = (ids) => {
  // console.log(ids);
  let idss = ids.map(item => {
    return item
  })
  console.log(idss);
  deleteStudent(idss).then(
    res => {
      console.log(res);
      window.location.reload();
    },
    err => {
      console.log(err);
    }
  )
}

onMounted(() => {
  getStudent().then(
    res => {
      // console.log(res.data);
      tableData.value = res.data
    },
    err => {
      console.log(err);
    }
  )
})

// onMounted(async () => {
//   let studentlist = await getStudent()
//   console.log(studentlist);
// })

</script>

<template>
  <div>
    <div>
        <el-button type="primary" @click="adds">添加</el-button>
        <el-button type="danger" @click="deletechange(ids)">批量删除</el-button>
    </div>
    <div>
        <el-dialog v-model="dialogFormVisible" title="学生信息">
            <el-form :model="form">
            <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="年龄" :label-width="formLabelWidth">
                <el-input v-model="form.age" autocomplete="off" />
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth">
                <el-select v-model="form.sex" placeholder="选择性别">
                <el-option label="男" value="man" />
                <el-option label="女" value="woman" />
                </el-select>
            </el-form-item>
            <el-form-item label="地址" :label-width="formLabelWidth">
                <el-input v-model="form.address" autocomplete="off" />
            </el-form-item>
            <el-form-item label="时间" :label-width="formLabelWidth">
                <el-input v-model="form.date" autocomplete="off" />
            </el-form-item>
            </el-form>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="submit">提交</el-button>
            </span>
            </template>
        </el-dialog>
    </div>
    <div>
        <el-table :data="tableData" style="width: 100%" @selection-change="changes">
            <el-table-column type="selection" width="55" @click="select" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="age" label="Age" width="120" />
            <el-table-column prop="sex" label="Sex" width="120" />
            <el-table-column prop="address" label="Address" width="300" />
            <el-table-column prop="date" label="Date" width="150" />
            <el-table-column fixed="right" label="Operations" width="120">
              <template #default="scope">
                  <el-button link type="primary" size="small" @click="handleClick(scope.$index, scope.row)">修改</el-button>
                  <el-button link type="danger" size="small"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
        </el-table>
    </div>
  </div>
</template>

<style scoped lang="less">

</style>
