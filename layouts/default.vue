<template>
  <div class="default-layout">
    <LayoutsNavbar />
    <div class="container">
      <div class="default-layout__wrapper">

        <div class="default-layout__sidebar">
          <b-menu>
            <b-menu-list label="Menu">
              <b-menu-item icon="information-outline" label="Info"></b-menu-item>
              <b-menu-item icon="settings" expanded>
                <template #label="props">
                  Administrator
                  <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
                </template>
                <b-menu-item icon="account" label="Users"></b-menu-item>
                <b-menu-item icon="cellphone-link">
                  <template #label>
                    Devices
                    <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                        <template #trigger>
                            <b-icon icon="dots-vertical"></b-icon>
                        </template>
                        <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
                        <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
                        <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
                    </b-dropdown>
                  </template>
                </b-menu-item>
                <b-menu-item icon="cash-multiple" label="Payments" disabled></b-menu-item>
              </b-menu-item>
              <b-menu-item icon="account" label="My Account">
                <b-menu-item label="Account data"></b-menu-item>
                <b-menu-item label="Addresses"></b-menu-item>
              </b-menu-item>
            </b-menu-list>
            <b-menu-list>
              <b-menu-item label="Expo" icon="link" tag="router-link" target="_blank" to="/expo"></b-menu-item>
            </b-menu-list>
            <b-menu-list label="Actions">
              <b-menu-item label="Logout"></b-menu-item>
            </b-menu-list>
          </b-menu>
        </div>
        <main class="default-layout__main">
          <Nuxt />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
<style lang="scss">
  .default-layout {
    padding-top: 56px;
    &__wrapper {
      display: flex;
    }
    &__sidebar {
      width: 240px;
    }
    &__main {
      flex: 1;
    }
  }
</style>
