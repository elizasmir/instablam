<template>
  <div class="camera">
    <div v-if="!isEditor" class="preview-camera">
      <section class="stream-video">
        <video autoplay class="stream"></video>
      </section>

      <section class="photo-btn">
        <button @click="takePhoto">
          <img src="../assets/graphics/play.png" />
        </button>
      </section>
    </div>

    <div v-else>
      <Editor :photo="img"/>
    </div>
  </div>
</template>

<script>
import Editor from '@/components/Editor'

export default {
  name: "Camera",
  components: {
    Editor
  },
  data() {
    return { isEditor: false, img: null };
  },
  beforeMount() {
    this.getStream();
  },
  methods: {
    getStream() {
      if (
        "mediaDevices" in navigator &&
        "getUserMedia" in navigator.mediaDevices
      ) {
        let constrains = {
          video: {
            width: {
              min: 640,
              ideal: 1280,
              max: 1920
            },
            height: {
              min: 360,
              ideal: 720,
              max: 1080
            }
          }
        };
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then(stream => {
            const videoPlayer = document.querySelector("video");
            videoPlayer.srcObject = stream;
            videoPlayer.play();
          })
          .catch(function(err) {
            console.log(err.name + ": " + err.message);
          });
      }
    },
    takePhoto() {
      this.isEditor = true;
      this.img = document.querySelector("video");
    }
  }
};
</script>

<style>
.camera {
  display: flex;
  flex-direction: column;
  text-align: center;

  width: 100%;
  height: 100%;

  padding: 20px;
  box-sizing: border-box;
}
.stream {
  width: 100%;
  max-width: 1024px;

  margin: 0 auto;
  box-shadow: 6px 6px 10px 2px rgba(0, 0, 0, 1);
}
img {
  width: 70%;
  height: 60%;
}
.photo-btn {
  margin: 20px;
}
.photo-btn button {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  cursor: pointer;
  background: transparent;
}
 button:hover {
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}
</style>