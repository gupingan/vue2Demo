<template>
  <input class="input" type="text" :value="value" v-on="listeners"/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseInputText extends Vue {
  @Prop() private value!: string;
  private get listeners () {
    return {
      ...this.$listeners,
      input: (event: any) => {
        this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.input {
  width: 100%;
  height: 100%;
  padding: 16px 10px;
  border: 3px solid #5e6799;
  font-size: 16px;
}
</style>
