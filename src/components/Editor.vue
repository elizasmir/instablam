<template>
  <div class="editor">
    <title>Editor</title>
      
      <section class="preview">
        <canvas data-caman-hidpi-disabled id="canvas-id"></canvas>
      </section>
      
      <div v-if="isOnline">

      <section class="filters">
        <button @click="brightMinus" id="bright-minus">-</button>
        <span class="filter-name">Brightness</span>
        <button @click="brightPlus" id="bright-plus">+</button>
      </section>

      <section class="filters">
        <button @click="noiseMinus" id="noise-minus">-</button>
        <span class="filter-name">Noise</span>
        <button @click="noisePlus" id="noise-plus">+</button>
      </section>

      <section class="filters">
        <button @click="sepiaMinus" id="sepia-minus">-</button>
        <span class="filter-name">Sepia</span>
        <button @click="sepiaPlus" id="sepia-plus">+</button>
      </section>

      <section class="filters">
        <button @click="contrMinus" id="contr-minus">-</button>
        <span class="filter-name">Contrast</span>
        <button @click="contrPlus" id="contr-plus">+</button>
      </section>

      <section class="filters">
        <button @click="expoMinus" id="exposure-minus">-</button>
        <span class="filter-name">Exposure</span>
        <button @click="expoPlus" id="exposure-plus">+</button>
      </section>

      <section class="filters">
        <button @click="blurMinus" id="blur-minus">-</button>
        <span class="filter-name">Blur</span>
        <button @click="blurPlus" id="blur-plus">+</button>
      </section>

      <!-- <section class="links">
      <button @click="backToCamera" class="try-again">Back</button>
      </section>-->

      <section class="links">
        <a :href="imageURL" download>
          <button class="download">Download</button>
        </a>
      </section>
    </div>

    <Offline v-else />
  </div>
</template>

<script>
import Offline from "@/components/Offline.vue";

export default {
  name: "Editor",
  props: ["photo"],
  components: { Offline },
  data() {
    return {
      imageURL: ""
    };
  },
  mounted() {
    let ratio = window.innerHeight < window.innerWidth ? 16 / 9 : 9 / 16;
    const canvas = document.querySelector("canvas");

    this.photo.width = window.innerWidth < 1280 ? window.innerWidth : 1280;
    this.photo.height = window.innerWidth / ratio;

    const ctx = canvas.getContext("2d");

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(this.photo, 0, 0, canvas.width, canvas.height);
    this.imageURL = canvas.toDataURL("image/png");
  },
  methods: {
    // backToCamera() {
    //   this.$router.push('/camera');
    // },
    brightMinus() {
      Caman("#canvas-id", this.imageURL, function() {
        this.brightness(-2).render();
      });
      this.imageURL = document.querySelector("canvas").toDataURL("image/png");
    },
    brightPlus() {
      Caman("#canvas-id", this.imageURL, function() {
        this.brightness(2).render();
      });
      this.imageURL = document.querySelector("canvas").toDataURL("image/png");
    },
    noiseMinus() {
      Caman("#canvas-id", this.imageURL, function() {
        this.noise(-2).render();
      });
      this.imageURL = document.querySelector("canvas").toDataURL("image/png");
    },
    noisePlus() {
      Caman("#canvas-id", this.imageURL, function() {
        this.noise(2).render();
      });
      this.imageURL = document.querySelector("canvas").toDataURL("image/png");
    },
    sepiaMinus() {
      Caman("#canvas-id", this.imageURL, function() {
        this.sepia(-2).render();
      });
      this.imageURL = document.querySelector("canvas").toDataURL("image/png");
    },
    sepiaPlus() {
      Caman("#canvas-id", this.imageURL, function() {
        this.sepia(2).render();
      });
      this.imageURL = document.querySelector("canvas").toDataURL("image/png");
    },
    contrMinus() {
      Caman("#canvas-id", this.imageURL, function() {
        this.contrast(-2).render();
      });
      this.imageURL = document.querySelector("canvas").toDataURL("image/png");
    },
    contrPlus() {
      Caman("#canvas-id", this.imageURL, function() {
        this.contrast(2).render();
      });
      this.imageURL = document.querySelector("canvas").toDataURL("image/png");
    },
    expoMinus() {
      Caman("#canvas-id", this.imageURL, function() {
        this.exposure(-2).render();
      });
      this.imageURL = document.querySelector("canvas").toDataURL("image/png");
    },
    expoPlus() {
      Caman("#canvas-id", this.imageURL, function() {
        this.exposure(2).render();
      });
      this.imageURL = document.querySelector("canvas").toDataURL("image/png");
    },
    blurMinus() {
      Caman("#canvas-id", this.imageURL, function() {
        this.stackBlur(-2).render();
      });
      this.imageURL = document.querySelector("canvas").toDataURL("image/png");
    },
    blurPlus() {
      Caman("#canvas-id", this.imageURL, function() {
        this.stackBlur(2).render();
      });
      this.imageURL = document.querySelector("canvas").toDataURL("image/png");
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

.editor {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
.preview {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
#canvas-id {
  width: 100%;
  max-width: 1024px;
  height: auto;
}
canvas {
  margin-bottom: 40px;
}
.filter-name {
  font-size: 0.7em;
  background: $peach;
  padding: 5px;
  display: inline-block;
  color: $white;
  width: 100px;
  border-radius: 3px;
  margin: 4px;
}
.filters,
.links {
  display: inline-block;
  margin: 5px 15px;
}
.editor button {
  border: none;
  color: $white;
  border-radius: 4px;
  font-size: 1.2em;
  padding: 2px 10px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #ffffff;
}
.links button {
  color: $peach;
  font-family: $MC;
  font-size: 0.9em;
}
</style>