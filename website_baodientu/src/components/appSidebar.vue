<template>
  <div class="wrapper d-flex">
    <!-- Sidebar -->
    <aside id="sidebar" :class="{ expand: isExpand }" class="vh-100">
      <div class="d-flex align-items-center">
        <button class="toggle-btn btn me-2" @click="toggleSidebar">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="sidebar-logo">
          <router-link to="/" class="text-light text-decoration-none">LHExpress</router-link>
        </div>
      </div>
      <ul class="sidebar-nav">
        <li class="sidebar-item">
          <router-link :to="{ name: 'catelogy' }" class="sidebar-link text-decoration-none" :active-class="'active'">
            <i class="fa-solid fa-tags"></i>
            <span>Doanh mục</span>
          </router-link>
        </li>
        <li class="sidebar-item">
          <router-link :to="{ name: 'account_manager'}" class="sidebar-link text-decoration-none" :active-class="'active'">
            <i class="fa-solid fa-users"></i>
            <span>Tài Khoản</span>
          </router-link>
        </li>
        
        <li class="sidebar-item">
          <router-link :to="{ name: 'newspaper_manager'}" class="sidebar-link text-decoration-none" :active-class="'active'">
            <i class="fa-solid fa-newspaper"></i>
            <span>Bài viết</span>
          </router-link>
        </li>
      </ul>
    </aside>
    <nav class="navbar navbar-expand-sm  bg-primary fixed-top border-bottom " id="navbar">
      <div class="container-fluid d-flex justify-content-end align-items-center">
          <a href="#" class="nav-notifi text-light me-2" title="Thông báo" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="bottom" data-bs-content="Content">
            <i class="fa-solid fa-bell"></i>
            <span class="badge bg-danger">{{ notif }}</span>
          </a>
          <div class="dropdown">
            <router-link class="navbar-logo dropdown-toggle" to="/" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="@/assets/image/admin.png" alt="image-admin" class="img-fluid rounded-circle border-black" style="width: 2.45rem; height: 2.45rem;">
            </router-link> 
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
              <li><router-link to="/" class="dropdown-item">Thông tin cá nhân</router-link></li>
              <li><router-link to="/" class="dropdown-item">Đổi mật khẩu</router-link></li>
              <li><router-link to="/" class="dropdown-item">Đăng xuất</router-link></li>
            </ul>
          </div>
      </div>

      
    </nav>
    <!-- Main Content -->
    <div class="main flex-grow-1 p-3" :class="{ 'main-expanded': isExpand }">
      <div class="container">
        <div class="d-flex mb-3">
          <h3>{{ $route.meta.title }}</h3>
          <div class="ms-auto d-flex align-items-end" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active"><router-link to="/">Trang chủ</router-link></li>
              <li class="breadcrumb-item" aria-current="page">{{ $route.meta.title }}</li>
            </ol>
          </div>
        </div>
        <div class="border-top border-3 border-primary rounded-top">
          <router-view />
        </div>
       
      </div>   
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { Popover } from 'bootstrap';
import { RouterLink } from 'vue-router';

const isExpand = ref(false);

const toggleSidebar = () => {
  isExpand.value = !isExpand.value;
};

const notification = ref([
  { message: '🧑‍💻 Kháng cự cấm tài khoản' },
  { message: 'Đã xóa bài viêt' },
  { message: 'Đã cấm tài khoản a' },
  { message: 'Có người liên hệ' },
])

  const notif = notification.value.length;

onMounted(() => {
    const popoverTrigger = document.querySelector('.nav-notifi');
    new Popover(popoverTrigger, {
    content: `
      <div>
        <div class="list-group list-group-flush">
          ${notification.value.map(item => `<a href ="#" class="list-group-item list-group-item-action">${item.message}</a>`).join('')}
        </div>
      </div>
    `,
    html: true, // Cho phép nội dung HTML
    placement: 'bottom', // Vị trí popover
  });
  popoverTrigger.addEventListener('shown.bs.popover', () => {
      const popoverBody = document.querySelector('.popover-body');
      if (popoverBody) {
        popoverBody.style.padding = '0px'; // Thay đổi giá trị padding
      }
    });
  }
);

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.dropdown-toggle::after {
  content: none !important; /* Xóa caret */
  border: none !important; /* Xóa đường viền */
}

nav{
    position: fixed;
    height: 4rem;
    width: 100%;
    z-index: 999;
    border-bottom: 10px solid #ffffff;
}


li {
    list-style: none;
}

h1 {
    font-weight: 600;
    font-size: 1.5rem;
}

body {
    font-family: 'Poppins', sans-serif;
}

.main {
    min-height: 100vh;
    width: 100%;
    margin-left: 70px;
    overflow: hidden;
    transition: margin-left 0.35s ease;
    background-color: #fafbfe;
}

.main-expanded {
  transition: margin-left 0.35s ease;
  margin-left: 260px; /* Khoảng cách bằng chiều rộng của sidebar mở rộng */
}

#sidebar {
    position: fixed;
    width: 70px;
    min-width: 70px;
    height: 100vh;
    z-index: 1000;
    transition: all .25s;
    background-color: #0e2238;
    display: flex;
    flex-direction: column;
}

#sidebar.expand {
    width: 260px;
    min-width: 260px;
}

.toggle-btn {
    background-color: transparent;
    cursor: pointer;
    border: 0;
    padding: 1rem 1.5rem;
}

.toggle-btn i {
    font-size: 1.5rem;
    color: #FFF;
}

.sidebar-logo {
    margin: auto 0;
}

.sidebar-logo router-link {
    color: #FFF;
    font-size: 1.15rem;
    font-weight: 600;
}

#sidebar:not(.expand) .sidebar-logo,
#sidebar:not(.expand) .sidebar-link span {
    display: none;
}

.sidebar-nav {
    padding: 2rem 0;
    flex: 1 1 auto;
}

.sidebar-link {
    padding: .625rem 1.625rem;
    color: #FFF;
    display: block;
    font-size: 0.9rem;
    white-space: nowrap;
    border-left: 3px solid transparent;
}

.sidebar-link i {
    font-size: 1.1rem;
    margin-right: .75rem;
}

.sidebar-link:hover {
    background-color: rgba(255, 255, 255, .075);
    border-left: 3px solid #3b7ddd;
}

.sidebar-item {
    position: relative;
}

#sidebar:not(.expand) .sidebar-item .sidebar-dropdown {
    position: absolute;
    top: 0;
    left: 70px;
    background-color: #0e2238;
    padding: 0;
    min-width: 15rem;
    display: none;
}

#sidebar:not(.expand) .sidebar-item:hover .has-dropdown+.sidebar-dropdown {
    display: block;
    max-height: 15em;
    width: 100%;
    opacity: 1;
}

#sidebar.expand .sidebar-link[data-bs-toggle="collapse"]::after {
    border: solid;
    border-width: 0 .075rem .075rem 0;
    content: "";
    display: inline-block;
    padding: 2px;
    position: absolute;
    right: 1.5rem;
    top: 1.4rem;
    transform: rotate(-135deg);
    transition: all .2s ease-out;
}

#sidebar.expand .sidebar-link[data-bs-toggle="collapse"].collapsed::after {
    transform: rotate(45deg);
    transition: all .2s ease-out;
}

.sidebar-icon {
    display: inline-block;
    width: 40px;
    height: 40px;
}

.sidebar-link.active {
  background-color: rgba(255, 255, 255, 0.1); /* Màu nền khi được chọn */
  border-left: 3px solid #3b7ddd; /* Đường viền trái để làm nổi bật */
  color: #fff; /* Màu chữ */
}
</style>

