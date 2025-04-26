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
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody v-for="(acc, index) in account" :key="acc.id">
          <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ acc.name }}</td>
            <td>{{ acc.email }}</td>
            <td>{{ acc.time }}</td>
            <td>{{ acc.status }}</td>
            <td class="action">

              <a href="#" class="text-danger me-2" v-if="acc.status === 'Đang hoạt động'" data-bs-toggle="modal" data-bs-target="#banAccount" >
                <i class="fa-solid fa-ban"></i>
              </a>
              <a href="#" class="text-primary me-2" v-else-if="acc.status === 'Bị khóa'" data-bs-toggle="modal" data-bs-target="#unclockAccount" >
                <i class="fa-solid fa-lock-open"></i>
              </a>
              <a href="#" class="text-success" @click="setSelectedAccount(acc.id)" data-bs-toggle="modal" data-bs-target="#checkcmtAccount">
                <i class="fa-solid fa-comment-slash"></i>
              </a>  
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Modal ban Account -->
    <div class="modal fade" id="banAccount" aria-labelledby="banAccountLabel" aria-hidden="true" @hidden="resetModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="banAccountLabel">Khóa tài khoản</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form class="form">
              <div class="row">
                <div class="col-12 mt-2">
                  <label for="reason" class="form-label">Lý do khóa tài khoản</label>
                  <textarea class="form-control" id="reason" rows="4" placeholder="Nhập lý do" v-model="reason"></textarea>
                </div>
                <div class="col-12 mt-2">
                  <label for="time" class="form-label">Thời gian khóa tài khoản</label>
                  <input type="date" class="form-control" id="time" :min="minDate" :disabled="ischeck" v-model="date" />
                </div>
                <div class="col-6 mt-2">
                  <label for="hour" class="form-label">Giờ</label>
                  <input type="number" class="form-control" id="hour" min="0" max="23" placeholder="Nhập giờ (0-23)" v-model="hour" :disabled="ischeck" />
                </div>
                <div class="col-6 mt-2">
                  <label for="minute" class="form-label">Phút</label>
                  <input type="number" class="form-control" id="minute" min="0" max="59" placeholder="Nhập phút (0-59)" v-model="minute" :disabled="ischeck" />
                </div>
                <div class="col-12 mt-2">
                  <div class="form-check">
                    <input type="checkbox" id="permanent" class="form-check-input" v-model="ischeck">
                    <label for="permanent" class="form-check-label" >Khóa vĩnh viễn</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
            <button type="button" class="btn btn-primary">Xác nhận</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal unclock Account -->
    <div class="modal fade" id="unclockAccount" aria-labelledby="unclockAccountLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="unclockAccountLabel">Mở khóa tài khoản</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Bạn có đồng ý mở khóa tài khoản này không?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
            <button type="button" class="btn btn-primary">Xác nhận</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal check cmt Account -->
    <div class="modal fade" id="checkcmtAccount" aria-labelledby="checkcmtAccountLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="checkcmtAccountLabel">Danh sách bình luận</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <table class="table table-hover table-striped">
              <thead class="table-primary">
                <tr>
                  <th>STT</th>
                  <th>Nội dung</th>
                  <th>Thời gian</th>
                </tr>
              </thead>
              <tbody >
                <tr v-for="(comment, index) in filteredComments" :key="index">
                  <td>
                    <form>
                      <input type="checkbox" class="form-check-input" id="checkComment">
                    </form>
                  </td>
                  <td>{{ comment.content }}</td>
                  <td>{{ comment.time }}</td>
                </tr>
                <tr v-if="filteredComments.length === 0">
                  <td colspan="3" class="text-center text-muted">Không có bình luận nào</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            <button type="button" class="btn btn-primary">Xóa</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue'

  const ischeck = ref(false)
  const selectedAccountId = ref(null); // Lưu trữ ID của tài khoản được chọn
  const reason = ref('');
  const date = ref('');
  const hour = ref('');
  const minute = ref('');
  const today = new Date();

  const minDate = ref(
    today.toISOString().split('T')[0]// Lấy phần ngày (YYYY-MM-DD)
  );

  const resetModal = () => {
  reason.value = '';
  date.value = '';
  hour.value = '';
  minute.value = '';
  ischeck.value = false;
  };
  const account = ref([{
    id: 1,
    name: 'Khưu Văn A',
    email: 'nva@gmail.com',
    time: '2023-10-01',
    status: 'Đang hoạt động',
  },
  {
    id: 2,
    name: 'Huỳnh Lê Văn B',
    email: 'nvb@gmail.com',
    time: '2023-10-01',
    status: 'Đang hoạt động',
  },
  {
    id: 3,
    name: 'Nguyễn Văn C',
    email: 'nvc@gmail.com',
    time: '2023-10-01',
    status: 'Bị khóa',
  }
])
  const comments = ref([
    {
      id: 1,
      comment: [
        {
          content: 'Bình luận 1',
          time: '2023-10-01',
        },
        {
          content: 'Bình luận 1',
          time: '2023-10-01',
        },
        {
          content: 'Bình luận 1',
          time: '2023-10-01',
        },
        {
          content: 'Bình luận 1',
          time: '2023-10-01',
        },
        {
          content: 'Bình luận 1',
          time: '2023-10-01',
        }]
    },
    {
      id: 2,
      comment: [
        {
          content: 'Bình luận 2',
          time: '2023-10-01',
        },
        {
          content: 'Bình luận 2',
          time: '2023-10-01',
        },
        {
          content: 'Bình luận 2',
          time: '2023-10-01',
        },
        {
          content: 'Bình luận 2',
          time: '2023-10-01',
        },
        {
          content: 'Bình luận 2',
          time: '2023-10-01',
        }]
    },
    {
      id: 3,
      comment: [
        {
          content: 'Bình luận 3',
          time: '2023-10-01',
        },
        {
          content: 'Bình luận 3',
          time: '2023-10-01',
        },
        {
          content: 'Bình luận 3',
          time: '2023-10-01',
        },
        {
          content: 'Bình luận 3',
          time: '2023-10-01',
        },
        {
          content: 'Bình luận 3',
          time: '2023-10-01',
        }]
    }
  ])

  // Hàm để gán ID của tài khoản được chọn
const setSelectedAccount = (id) => {
  selectedAccountId.value = id;
};

// Lọc bình luận dựa trên ID của tài khoản được chọn
const filteredComments = computed(() => {
  const group = comments.value.find((c) => c.id === selectedAccountId.value);
  return group ? group.comment : [];
});

onMounted(() => {
  const modal = document.getElementById('banAccount');
  modal.addEventListener('hidden.bs.modal', resetModal);
});
</script>

<style scope>

</style>