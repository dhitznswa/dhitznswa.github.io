function navopen() {
  const NavContent = document.querySelector("#nav-content");
  NavContent.classList.toggle("hidden");
}

async function backsound() {
  const audio = await new Audio("dist/audio/backsound.mp3");
  audio.play();
}

function redirect(url) {
  return (location.href = url);
}

$("#sendMsgButton").on("click", function () {
  submitForm();
});

async function submitForm() {
  const nama = $("#nama").val();
  const email = $("#email").val();
  const message = $("#message").val();

  if (
    nama == "" ||
    nama == null ||
    nama == undefined ||
    email == "" ||
    email == null ||
    email == undefined ||
    message == "" ||
    message == null ||
    message == undefined
  ) {
    alert("Semua field wajib diisi !");
    return false;
  }

  if (nama.length < 3) {
    alert("Nama minimal 3 karakter !");
    return false;
  }

  if (email.length < 3) {
    alert("Email minimal 3 karakter !");
    return false;
  }

  if (message.length < 3) {
    alert("Message minimal 3 karakter !");
    return false;
  }

  var formData = {
    "entry.555522536": "My Portfolio (dhitznswa.github.io)",
    "entry.866987216": nama,
    "entry.640262114": email,
    "entry.1362183442": message,
  };

  const form_id = "1FAIpQLSdrC6Ypb0NyA6INJSQC87ipcEn8K-cVWetlrzErYgs02FH_jg";

  $.ajax({
    url: `https://docs.google.com/forms/d/e/${form_id}/formResponse`,
    data: formData,
    type: "POST",
    dataType: "json",
    statusCode: {
      //the status code from the POST request
      0: function (data) {
        //0 is when Google gives a CORS error, don't worry it went through
        //success
        alert(
          "Pesan anda telah terkirim, saya akan menghubungi anda lewat email yang anda masukan."
        );
        location.reload();
      },
      200: function (data) {
        //200 is a success code. it went through!
        //success
        alert(
          "Pesan anda telah terkirim, saya akan menghubungi anda lewat email yang anda masukan."
        );
        location.reload();
      },
      403: function (data) {
        //403 is when something went wrong and the submission didn't go through
        //error
        return false;
      },
    },
  });
}
