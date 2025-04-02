<template>
  <div>
    <div class="container border-top border-3 border-primary rounded-top">
      <form>
        <div class="row mt-2">
          <div class="col-8">
            <input type="text" class="form-control" placeholder="Tên tài khoản, email" />
          </div>
          <div class="col-4">
            <button type="button" class="btn btn-primary w-50">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </form>
      <table class="table mt-3 table-hover table-striped">
        <thead class="table-primary">
          <tr>
            <th>STT</th>
            <th>Tên tài khoản</th>
            <th>Email</th>
            <th>Thời gian tạo</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody v-for="(acc, index) in account" :key="acc.id">
          <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ acc.name }}</td>
            <td>{{ acc.email }}</td>
            <td>{{ acc.time }}</td>
            <td>{{ acc.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const account = ref([{
    id: 1,
    name: 'Khưu Văn A',
    email: 'nva@gmail.com',
    time: '2023-10-01',
    status: 'Hoạt động',
  },
  {
    id: 2,
    name: 'Huỳnh Lê Văn B',
    email: 'nvb@gmail.com',
    time: '2023-10-01',
    status: 'Hoạt động',
  },
])
</script>

<style scope>

</style>