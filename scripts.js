// https://docs.google.com/spreadsheets/d/1hQQVtx3uKtBCYzlXAp1VDTaHFrhk4Bm_8Q1cvPz2-gc/edit?usp=sharing
const sheet = $(".sheet")[0];
const output = $(".output")[0];
const url = "https://docs.google.com/spreadsheets/d/";
const ssid = "1hQQVtx3uKtBCYzlXAp1VDTaHFrhk4Bm_8Q1cvPz2-gc";
const query = `/gviz/tq?`;

const endpoint = `${url}${ssid}${query}`;
sheet.textContent = endpoint;

let rowsSheet = [];

fetch(endpoint)
  .then((res) => res.text())
  .then((data) => {
    const formatData = data.substring(47).slice(0, -2);
    const json = JSON.parse(formatData);
    rowsSheet = json.table.rows;
    console.log({ rowsSheet });
    rowsSheet.forEach((row) => {
      const rowElm = document.createElement("div");
      const columnsInRow = row.c;
      columnsInRow.forEach((cell) => {
        const box = document.createElement("div");
        box.textContent = cell?.v;
        box.classList.add("box");
        rowElm.append(box);
      });
      output.append(rowElm);
    });
  });

const KEYS_VI = Object.keys(vi);

$("#log_keys_vi").on("click", () => {
  console.log({ KEYS_VI });
});

$("#log_keys_en").on("click", () => {
  const objectDataLangEN = {};

  KEYS_VI.forEach((key) => {
    const rowDataForKey = rowsSheet.find((row) => {
      const columnsInRow = row.c;
      const keyLang = columnsInRow[3]?.v;
      return key === keyLang;
    });
    objectDataLangEN[key] = rowDataForKey
      ? rowDataForKey.c[6]?.v || ""
      : "Chưa có key này";
  });

  console.log({ objectDataLangEN });
});

$("#log_keys_th").on("click", () => {
  const objectDataLangTH = {};

  KEYS_VI.forEach((key) => {
    const rowDataForKey = rowsSheet.find((row) => {
      const columnsInRow = row.c;
      const keyLang = columnsInRow[3]?.v;
      return key === keyLang;
    });
    objectDataLangTH[key] = rowDataForKey
      ? rowDataForKey.c[7]?.v || ""
      : "Chưa có key này";
  });

  console.log({ objectDataLangTH });
});

$("#log_keys_ms").on("click", () => {
  const objectDataLangMS = {};

  KEYS_VI.forEach((key) => {
    const rowDataForKey = rowsSheet.find((row) => {
      const columnsInRow = row.c;
      const keyLang = columnsInRow[3]?.v;
      return key === keyLang;
    });
    objectDataLangMS[key] = rowDataForKey
      ? rowDataForKey.c[7]?.v || ""
      : "Chưa có key này";
  });

  console.log({ objectDataLangMS });
});
