<template>
  <div class="home">
    <main>
      <div class="topInfo">
        <h1>Dalton</h1>

        <p>
          Dalton is a very dark theme, with a dark blue. Available for some
          programs, like Neovim and Alacritty.
        </p>

        <div class="colorBox">
          <Color background="#0C0A0F" color="white" />
          <Color background="#F50C40" color="white" />
          <Color background="#FF8F00" color="black" />
          <Color background="#30DB22" color="white" />
          <Color background="#F0EE00" color="black" />
          <Color background="#2B7DF0" color="white" />
          <Color background="#32BCD9" color="white" />
        </div>

        <div class="daltonlogobox">
          <img
            src="@/assets/daltonlogo.png"
            alt="Dalton Logo"
            class="daltonlogo"
          />
        </div>
      </div>
      <div class="dalton-benefits">
        <h1>Dalton benefits</h1>

        <ul class="dalton-benefits-list">
          <li class="dalton-benefits-item">
            Dalton is a very good theme for colorblind people, mostly Deutan.
            Because the colors are very easy to differentiate.
          </li>
          <li class="dalton-benefits-item">
            Very dark colors, perfect for people who loves dark themes
          </li>
          <li class="dalton-benefits-item">
            Dalton has few colors, making easy to create a Dalton theme for your
            favorite app
          </li>
          <li class="dalton-benefits-item">
            Blue is the principal color of Dalton palette. So, if you love blue,
            you will love this theme.
          </li>
        </ul>
      </div>
      <div class="dalton-apps">
        <h1>Apps with Dalton theme</h1>
        <div class="dalton-apps-content">
          <Project
            name="Neovim/Vim"
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Neovim-mark-flat.svg/836px-Neovim-mark-flat.svg.png"
            url="https://github.com/edersonferreira/dalton-vim"
          />

          <Project
            name="Vscode"
            logo="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhoing.io%2Fstorage%2F2020%2F10%2Fvscode-logo-2.png&f=1&nofb=1"
            url="https://github.com/edersonferreira/dalton-vscode"
          />

          <Project
            name="Dmenu"
            logo="https://tools.suckless.org/dmenu/patches/border/dmenu_border.png"
            url="https://github.com/edersonferreira/dalton-dmenu"
          />

          <Project
            name="Alacritty"
            logo="https://raw.githubusercontent.com/alacritty/alacritty/master/extra/logo/compat/alacritty-term%2Bscanlines.png"
            url="https://github.com/edersonferreira/dalton-alacritty"
          />

          <Project
            name="Discord"
            logo="https://www.thrifter.com/sites/thrifter.com/files/styles/medium/public/article-images/2018/11/discord.png?itok=Gvzs4qq2"
            url="https://github.com/edersonferreira/dalton-discord"
          />

          <Project
            name="Rofi"
            logo="https://user-images.githubusercontent.com/406245/62415221-8f422500-b626-11e9-976a-5e6e225d6918.png"
            url="https://github.com/edersonferreira/dalton-rofi"
          />
        </div>
      </div>
      <div class="dalton-story">
        <h1>Story</h1>

        <p>
          I created Dalton theme because I wasn't finding a good theme for Vim,
          Because or all the themes was not too dark, and the colors wasn't
          contrasting.
        </p>

        <p>
          So, I created a new theme basing in
          <a href="https://github.com/ayu-theme/ayu-vim" target="blank"
            >Ayu Dark Theme</a
          >, changing the colors to more darken and blue colors.
        </p>

        <p>
          With the time, I started to create more Dalton theme ports to more
          programs, making the best desktop aesthetics for me.
        </p>
      </div>
    </main>
  </div>
</template>

<script>
import Color from "@/components/Color.vue";
import Project from "@/components/Project.vue";

export default {
  name: "Home",
  components: { Color, Project },
};
</script>

<style>
@import "styles.css";
</style>
