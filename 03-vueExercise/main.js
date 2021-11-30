Vue.component("app-hobbies", {
  props: ["hobbies"],
  data: function () {
    return {
      hobbie: "",
    };
  },
  template: `
    <ul class="unstyled-list">
      <li class="pillow" v-for="(hobbie, index) in hobbies" v-on:click="removehobbie(hobbie, index)">{{ hobbie }}</li>
    </ul>
  `,
  methods: {
    removehobbie: function (hobbie, index) {
      //takes 2 arguments, the first is the custom name but in lowercase event, the second is the data you want to pass
      this.$emit("removehobbie", { hobbie, index });
      //console.log(hobbie, index)
    },
  },
});

new Vue({
  el: "#app",
  data: {
    hobbie: "",
    hobbies: [
      "👃 Smelling my fingers after scratching my nuts",
      "🦨 To fart in close and crowded places",
      "⚰️ Saying awkward things at funerals",
      "🖕 Cracking my fingers or fingering my crack",
      "😱 To Make weird noises at the gym"
    ],
    removed: "",
    hide: true,
  },
  methods: {
    addhobbie: function () {
      if (this.hobbie.trim() == "" || this.hobbie === null) {
        return;
      }
      this.hobbies.push(this.hobbie);
      console.log(this.hobbie);
      this.hobbie = null;
      this.removed = "";
    },
    hobbieCounterStyle: function () {
      if (this.hobbies.length <= 3) {
        return false;
      } else if (this.hobbies.length >= 6) {
        return true;
      }
    },
    itemWasClicked(event) {
      this.hobbies.splice(event.index, 1);
      this.removed = event.hobbie;
      console.log(event);
    },
  },
});