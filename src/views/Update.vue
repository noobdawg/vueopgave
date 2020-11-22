<template>
  <div class="update">
    <h1>Opdater</h1>
    <form>
      <input
        type="text"
        v-model="post.description"
        placeholder="Tilføj en beskrivelse"
        required
      />
      <input
        type="file"
        ref="fileInput"
        accept="image/*"
        v-on:change="previewImage"
      />
      <button class="btn1" type="button" v-on:click="triggerChooseImg">
        Tilføj billede
      </button>
      <div>
        <img :src="post.image" class="image-preview" />
      </div>
      <button class="btn2" type="button" v-on:click="updatePost">Opdater køretøje</button>
    </form>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  name: "Update",
  props: {
    post: Object
  },
  methods: {
    triggerChooseImg() {
      this.$refs.fileInput.click();
    },
    previewImage() {
      const imageFile = this.$refs.fileInput.files[0];
      const fileReader = new FileReader();
      fileReader.onload = event => {
        this.post.image = event.target.result;
      };
      fileReader.readAsDataURL(imageFile);
    },
    updatePost() {
      console.log(this.post);
      postRef.doc(this.post.id).set({
        description: this.post.description,
        image: this.post.image
      });
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
form {
  padding: 2em 1em 2.5em;
}
.btn1 {
  box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	background-color:#ffffff;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
  
}

.btn1:hover {
	background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
	background-color:#f6f6f6;
}

.btn2 {
  box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	background-color:#ffffff;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
  
}

.btn2:hover {
	background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
	background-color:#f6f6f6;
}
input {
  margin: 1em auto;
  width: 100%;
  max-width: 350px;
  padding: 12px 15px;
  box-sizing: border-box;
  display: block;
}
input[type="file"] {
  display: none;
}
.image-preview {
  max-width: 350px;
  width: 100%;
  padding: 1em 0;
  border-radius: 70px;
}
</style>