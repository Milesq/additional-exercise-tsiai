<div class="container">
  <div class="tile is-ancestor section">
    <div class="tile is-parent">
      <div class="tile is-child">
        <ShowAll {data} {fields} bind:selectedItem on:remove={remove} />
      </div>
    </div>

    <div class="tile is-vertical is-parent">
      <div class="tile is-child">
        <Edit data={data[selectedItem] || {}} {fields} on:save={update} />
      </div>
      <div class="tile is-child">
        <Create {fields} on:create={create} />
      </div>
    </div>
  </div>
</div>

<script>
  import { onMount } from 'svelte';
  import pick from 'lodash.pick';
  import ShowAll from './crud/ShowAll.svelte';
  import Edit from './crud/Edit.svelte';
  import Create from './crud/Create.svelte';
  import query, { gql } from '../utils/graphqlClient';
  let selectedItem = -1;

  const fields = [
    { name: 'english', label: 'Angielski', icon: 'fas fa-globe-africa' },
    { name: 'original', label: 'Polski', icon: 'fas fa-language' },
  ];

  let data = [];

  onMount(async () => {
    data = (
      await query(gql`
        query {
          words {
            id
            english
            original
          }
        }
      `)
    ).words;
  });

  async function create({ detail }) {
    const createWordQuery = gql`
      mutation($detail: CreateWordInput!) {
        createWord(input: $detail) {
          id
        }
      }
    `;

    const {
      createWord: { id },
    } = await query(createWordQuery, { detail });

    data = [...data, { ...detail, id }];
  }

  function update({ detail }) {
    const updateWordQuery = gql`
      mutation($id: ID!, $detail: UpdateWordInput!) {
        updateWord(id: $id, input: $detail) {
          id
        }
      }
    `;

    query(updateWordQuery, {
      id: data[selectedItem].id,
      detail: pick(detail, ['english', 'original']),
    }).then(console.log);

    data[selectedItem] = detail;
    selectedItem = -1;
  }

  function remove({ detail: i }) {
    const deleteWordQuery = gql`
      mutation($id: ID!) {
        deleteWord(id: $id)
      }
    `;

    query(deleteWordQuery, { id: data[i].id }).then(console.log);
    data = [...data.slice(0, i), ...data.slice(i + 1)];
  }
</script>
