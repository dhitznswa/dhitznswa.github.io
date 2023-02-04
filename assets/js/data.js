fetch("assets/json/galery.json")
  .then((res) => {
    console.log(res);
    if (!res.ok) {
      console.log("Error");
    }
    return res.json();
  })
  .then((data) => {
    data.forEach((i) => {
      const gb = document.querySelector(".galery-box");
      gb.insertAdjacentHTML(
        "beforeend",
        `
        <div class="col" data-aos="zoom-in">
            <a href="Javascript:void(0)" class="" data-bs-toggle="modal" data-bs-target="#${i["uniq"]}">
                <img
                    src="${i["url"]}"
                    alt="${i["alt"]}"
                    class="img-thumbnail img-fluid shadow"
                />
            </a>
        </div>

        <div class="modal fade" id="${i["uniq"]}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="${i["uniq"]}Label" aria-hidden="true">
            <div class="modal-dialog modal-lg ">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="${i["uniq"]}Label">Gambar ${i["alt"]} - Preview</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img
                        src="${i["url"]}"
                        alt="${i["alt"]}"
                        class="img-thumbnail img-fluid "
                    />
                </div>
                </div>
            </div>
        </div>

      `
      );
    });
  });
