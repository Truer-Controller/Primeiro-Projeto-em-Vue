<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nome
          </th>
          <th class="text-left">
            E-mail
          </th>
          <th class="text-left">
            Contato
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
        >
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>


<script>
export default {
    name: 'ListaComponente',
    props: {
        users: Array,
    }
}
</script>