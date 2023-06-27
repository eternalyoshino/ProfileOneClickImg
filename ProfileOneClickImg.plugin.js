/**
 * @name ProfileOneClickImg
 * @description Lets you click users' avatars on their profile page to view a bigger version in your browser.
 * @version 1.0.0
 * @author ETERNXLXTY
 * @authorLink https://betterdiscord.app/developer/eternxlxty
 */

module.exports = class linkProfilePicture {
  stop() {}
  start() {
    document.addEventListener("click", LinkProfilePicture, true);
    document.addEventListener("click", LinkBannerPicture, true);
    this.stop = document.removeEventListener.bind(
      document,
      "click",
      LinkProfilePicture,
      true
    );
    this.stop = document.removeEventListener.bind(
      document,
      "click",
      LinkBannerPicture,
      true
    );
    function LinkProfilePicture({ target }) {
      if (target.classList.contains("avatar-3QF_VA")) {
        window.open(
          target
            .querySelector("img")
            .src.replace(/(?:\?size=\d{3,4})?$/, "?size=4096"),
          "_blank"
        );
      }
    }

    function LinkBannerPicture({ target }) {
      if (
        target.style.backgroundImage &&
        target.style.backgroundImage.includes("banner")
      ) {
        let url = target.style.backgroundImage;
        url = url.substring(4, url.length - 1).replace(/["']/g, "");
        url = url.replace(/(?:\?size=\d{3,4})?$/, "?size=4096");
        window.open(url);
      }
    }
  }
};
