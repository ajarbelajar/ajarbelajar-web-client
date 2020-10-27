<template>
  <div class="app-sidebar__scroll-content">
    <div class="list-group">
      <nuxt-link
        class="list-group-item"
        to="/home"
        active-class=""
        exact-active-class="active"
        @click.native="$sidebar.display(false)"
      >
        <i class="icon wb-home"></i>Home
      </nuxt-link>
      <nuxt-link
        class="list-group-item"
        to="/articles"
        active-class="active"
        @click.native="$sidebar.display(false)"
      >
        <i class="icon wb-order"></i>Artikel
      </nuxt-link>
      <nuxt-link
        class="list-group-item"
        to="/playlists"
        active-class="active"
        @click.native="$sidebar.display(false)"
      >
        <i class="icon wb-video"></i>Playlist
      </nuxt-link>
      <nuxt-link
        class="list-group-item"
        to="/categories"
        active-class="active"
        @click.native="$sidebar.display(false)"
      >
        <i class="icon wb-grid-4"></i>Kategori
      </nuxt-link>
      <nuxt-link
        class="list-group-item"
        to="/minitutors"
        active-class="active"
        @click.native="$sidebar.display(false)"
      >
        <i class="icon wb-users"></i>Minitutor
      </nuxt-link>
    </div>

    <div v-if="($auth && !$auth.minitutor) || !$auth" class="list-group">
      <nuxt-link
        class="list-group-item"
        to="/join-minitutor"
        active-class="active"
        @click.native="$sidebar.display(false)"
      >
        <i class="icon wb-dashboard"></i>Jadi Minitutor
      </nuxt-link>
    </div>

    <div v-if="$auth" class="list-group">
      <nuxt-link
        class="list-group-item"
        to="/dashboard/me"
        active-class="active"
        @click.native="$sidebar.display(false)"
      >
        <i class="icon wb-user-circle"></i>Dasbor kamu
      </nuxt-link>
      <nuxt-link
        v-if="$auth.minitutor && $auth.minitutor.active"
        class="list-group-item"
        to="/dashboard/minitutor"
        active-class="active"
        @click.native="$sidebar.display(false)"
      >
        <i class="icon wb-dashboard"></i>Dasbor MiniTutor
      </nuxt-link>
      <a
        href="#logout"
        class="list-group-item"
        @click.prevent="$logout() && $sidebar.display(false)"
      >
        <i class="icon wb-trash text-danger"></i>
        Keluar
      </a>
    </div>

    <div v-if="!$auth" class="list-group">
      <nuxt-link
        class="list-group-item"
        to="/register"
        @click.native="$sidebar.display(false)"
      >
        <i class="icon wb-user-circle"></i>Daftar
      </nuxt-link>
      <nuxt-link
        class="list-group-item"
        to="/login"
        @click.native="$sidebar.display(false)"
      >
        <i class="icon wb-user-circle"></i>Masuk
      </nuxt-link>
    </div>
  </div>
</template>
