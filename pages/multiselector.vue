<template>
  <div>
    <div class="my-4 px-4" >
      <h4 class="label">Multiselector de objetos</h4>
      <div class="flex">
        <Multiselector
          clearable
          select-all
          multiselect
          prop="id"
          class="multi-select-container"
          transition-name="vertical"
          :options="options"
          v-model="optionsSelected"
        >
          <template v-slot:tag="{ tag, removeIt }">
            <div class="tag">
              <div class="selected-item">{{tag.name}}</div>
              <div class="remove-item" @click.stop="removeIt(tag)">&#215;</div>
            </div>
          </template>
          <template v-slot:clear-icon>
            <button type="button" class="icon-clear" v-if="optionsSelected.length > 0">&#215;</button>
          </template>
          <template v-slot:menu-activator>
            <div class="menu-activator"></div>
          </template>
          <template v-slot:select-all-items="{ isSelected }">
            <div
              :class="[
                'menu-item',
                { 'menu-item-selected': isSelected },
              ]"
            >
              <div
                v-show="isSelected"
                :class="{ 'selected-icon': isSelected }"
              >&#10003;</div>
              <span class="menu-item-name">Todos</span>
            </div>
          </template>
          <template v-slot:menu="{ menuItem, isHovered }">
            <div
              :class="[
                'menu-item',
                { 'menu-item-hover': isHovered },
                { 'menu-item-selected': menuItem.isSelected },
              ]"
            >
              <div
                v-show="menuItem.isSelected"
                :class="{ 'selected-icon': menuItem.isSelected }"
              >&#10003;</div>
              <span class="menu-item-name">{{menuItem.name}}</span>
            </div>
          </template>
        </Multiselector>
      </div>
      <code>
        <Multiselector
          clearable
          select-all
          multiselect
          prop="id"
          class="multi-select-container"
          transition-name="vertical"
          :options="options"
          v-model="optionsSelected"
        >
          <template v-slot:tag="{ tag, removeIt }">
            <div class="tag">
              <div class="selected-item">{{tag.name}}</div>
              <div class="remove-item" @click.stop="removeIt(tag)">&#215;</div>
            </div>
          </template>
          <template v-slot:clear-icon>
            <button type="button" class="icon-clear" v-if="optionsSelected.length > 0">&#215;</button>
          </template>
          <template v-slot:menu-activator>
            <div class="menu-activator"></div>
          </template>
          <template v-slot:select-all-items="{ isSelected }">
            <div
              :class="[
                'menu-item',
                { 'menu-item-selected': isSelected },
              ]"
            >
              <div
                v-show="isSelected"
                :class="{ 'selected-icon': isSelected }"
              >&#10003;</div>
              <span class="menu-item-name">Todos</span>
            </div>
          </template>
          <template v-slot:menu="{ menuItem, isHovered }">
            <div
              :class="[
                'menu-item',
                { 'menu-item-hover': isHovered },
                { 'menu-item-selected': menuItem.isSelected },
              ]"
            >
              <div
                v-show="menuItem.isSelected"
                :class="{ 'selected-icon': menuItem.isSelected }"
              >&#10003;</div>
              <span class="menu-item-name">{{menuItem.name}}</span>
            </div>
          </template>
        </Multiselector>
      </code>
    </div>
  </div>
</template>

<script>
import Multiselector from '~/my-components/multiselect-dl/src/components/multiselect-dl'

function data () {
  return {
    options: [
      { id: 1, name: 'Juan' },
      { id: 2, name: 'Noah' },
      { id: 3, name: 'Churry' },
      { id: 4, name: 'Kaki' },
      { id: 5, name: 'Pepito' }
    ],
    optionsSelected: []
  }
}

export default {
  name: 'selector',
  components: {
    Multiselector
  },
  data,
  layout: 'componentes'
}
</script>
