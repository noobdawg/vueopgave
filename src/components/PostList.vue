 <template>
  <div class="grid-container">
    <article v-for="post in posts" :key="post.id">
      <img :src="post.image" class="img1" />
      <h3 class="hm">{{ post.description }}</h3>
      <router-link :to="{ name: 'Update', params: { post: post } }">
        <button class="btn1">Rediger køretøj</button>
      </router-link>
      <button class="btn2" v-on:click="deletePost(post)">Slet køretøj</button>
    </article>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  data() {
    return {
      posts: [],
    };
  },
  firestore: {
    posts: postRef,
  },
  methods: {
    deletePost(post) {
      postRef.doc(post.id).delete()
    }
  }
};
</script>

<style scoped>
/* ---------- Grid container ---------- */
.grid-container {
  display: grid;
  grid-template-columns: 100%;
  padding: 10px;
}
@media (min-width: 600px) {
  .grid-container {
    grid-template-columns: 50% 50%;
  }
}
@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: 33.33% 33.33% 33.33%;
  }
}
.grid-container article {
  text-align: center;
  padding: 10px;
}
.grid-container img {
  max-width: 300px;
  width: 100%;
}
.grid-container h3 {
  font-weight: 250;
  margin: 0 0 1.5em;
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


.img1 {
  border-radius: 8px;

}
.img1:hover {
  border-radius: 8px;
  display: none;

}


</style>