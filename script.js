  // Back to Top Button
    const backToTop = document.getElementById("backToTop");

    window.onscroll = function() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    };

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
