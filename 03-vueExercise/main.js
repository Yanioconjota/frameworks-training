Vue.component("app-hobbies", {
  props: ["hobbies"],
  template: `
    <ul class="unstyled-list">
      <li class="pillow" v-for="(hobby, index) in hobbies" v-on:click="removehobbie(hobby, index)">{{ hobby }}</li>
    </ul>
  `,
  methods: {
    removehobbie: function (hobby, index) {
      //takes 2 arguments, the first is the custom name but in lowercase event, the second is the data you want to pass
      this.$emit("removehobbie", { hobby, index });
      //console.log(hobby, index)
    },
  },
});

new Vue({
  el: "#app",
  data: {
    hobby: "",
    hobbies: [
      "👃 Smelling my fingers after scratching my nuts",
      "🦨 To fart in close and crowded places",
      "⚰️ Saying awkward things at funerals",
      "🖕 Cracking my fingers or fingering my crack",
      "😱 To Make weird noises at the gym",
    ],
    removed: "",
    hide: true,
  },
  methods: {
    addhobbie: function () {
      if (this.hobby.trim() == "" || this.hobby === null) {
        return;
      }
      this.hobbies.push(this.hobby);
      console.log(this.hobby);
      this.hobby = null;
      this.removed = "";
    },
    hobbieCounterStyle: function () {
      if (this.hobbies.length <= 3) {
        return false;
      } else if (this.hobbies.length >= 6) {
        return true;
      }
    },
    hobbieRemoved(hobby) {
      this.hobbies.splice(hobby.index, 1);
      this.removed = hobby.hobby;
      console.log(hobby);
    },
  },
});