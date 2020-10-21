<template>
  <div>
    <div :id="id">
      <div class="expandable">
        <div class="inputs">
          <!-- <span>{{`${index + 1}.`}}</span> -->
          <v-text-field
            label="Description"
            solo
            :id="`desc${index}`"
            @change="descToList(index)"
          ></v-text-field>
        </div>
        <div class="icon-button-wrapper">
          <v-icon
            v-if="index == 0"
            class="description"
            @click="addDesc(index)"
            aria-hidden="false"
          >
            mdi-plus-circle</v-icon
          >
          <v-icon
            v-else
            class="description"
            @click="removeDesc()"
            aria-hidden="false"
          >
            mdi-minus-circle</v-icon
          >
          <!-- <v-icon v-else class="description" @click="removeDesc()" aria-hidden="false"> mdi-minus-circle-outline</v-icon> -->
        </div>
      </div>
      <Example
        @addEx="expandEx"
        @removeEx="removeEx"
        :isFirst="isFirst"
        :count="examples.length"
        :id="`ex_${index}`"
        :index="index"
        :el="examples"
      ></Example>
    </div>
  </div>
</template>

<script>
import Example from './Example';
import { mapState, mapActions } from 'vuex';
export default {
  props: ['id', 'index', 'list'],
  data() {
    return {
      // isExAdded: false,
      examples: ['s'],
      // descList: ["s"],
    };
  },
  components: {
    Example,
  },
  computed: {
    ...mapState(['card', 'meaning']),
    isFirst() {
      const val = this.list.length == 1 ? true : false;
      return val;
    },
    isExAdded() {
      if (this.examples.length > 1) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    ...mapActions(['computeDescription']),
    addMore(desc) {
      this.descList.push(desc);
      console.log(this.meaningList);
    },
    addDesc(e) {
      const index = e + 1;
      const val = true;
      // this.descList.push(e);
      this.$emit('computeDescItem', { index, val });
    },
    removeDesc() {},
    expandEx(e) {
      this.examples.push(e);
    },
    removeEx(e) {
      this.examples.splice(e, 1);
    },
    descToList(index) {
      const newDesc = document.getElementById(`desc${index}`).value;
      if (newDesc != '') {
        const param = { index: index, status: 'add', description: newDesc };
        this.computeDescription(param);
      } else {
        const param = { index: index, status: 'remove', description: newDesc };
        this.computeDescription(param);
      }
      // console.log(`${this.$refs.desc}-${index}`.value);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
}
.my-2 {
  display: flex;
  justify-content: center;
}
.expandable {
  display: flex;
  justify-content: space-between;
  span {
    padding-right: 5px;
  }

  .inputs {
    display: flex;
    align-items: center;
  }

  .icon-button-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 37px;
    padding: 5px;
    align-items: center;
    height: 50px;

    .v-icon {
      padding: 0 0 15px 0;
      cursor: pointer;
      font-size: 40px;
      color: #bccbce;
    }

    .description {
      color: #84c8d6;
    }
  }
}
</style>
