const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

window.onscroll = function () {
  const header = document.querySelector(".navbar");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-active");
  } else {
    header.classList.remove("navbar-active");
  }
};

// COntact Us

(() => {
  "use strict";

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzPzQ2gcTWPx1MGfaXqxmSk5FvdL3MbLZ0EXXxmpavIhF5m9sDWtBQWd4KvSBEtlfU/exec";
  const form = document.forms["form-contact-me"];

  const btnKirim = document.querySelector(".btn-kirim");
  const btnLoading = document.querySelector(".btn-loading");
  const nama = document.getElementById("nama");
  const toastLiveExample = document.getElementById("liveToast");
  const toastBody = document.querySelector(".toast-body");

  form.addEventListener(
    "submit",
    async (e) => {
      e.preventDefault();
      console.log(form.checkValidity());
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        form.classList.add("was-validated");
        const notifikasi = new Audio("/assets/sound/gagal.mp3");
        await notifikasi.play();
        toastBody.innerText = `Pastikan field disi dengan benar`;
        const toast = new bootstrap.Toast(toastLiveExample);
        toast.show();
      } else {
        btnLoading.classList.toggle("d-none");
        btnKirim.classList.toggle("d-none");
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then(async (response) => {
            form.classList.remove("was-validated");
            const notifikasi = new Audio("/assets/sound/sukses.mp3");
            await notifikasi.play();
            toastBody.innerText = `Terima kasih ${nama.value}, Pesan anda terkirim`;
            const toast = new bootstrap.Toast(toastLiveExample);
            await toast.show();
            btnLoading.classList.toggle("d-none");
            btnKirim.classList.toggle("d-none");
            form.reset();
          })
          .catch((error) => console.error("Error!", error.message));
      }
    },
    false
  );
})();
