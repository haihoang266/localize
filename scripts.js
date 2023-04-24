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
      const columnsInRow = row.c.slice(0, 9);
      columnsInRow.forEach((cell) => {
        const box = document.createElement("div");
        box.textContent = cell?.v;
        box.classList.add("box");
        rowElm.append(box);
      });
      output.append(rowElm);
    });
  });

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
      ? rowDataForKey.c[6]?.v || key
      : HAS_NOT_KEY;
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
      ? rowDataForKey.c[7]?.v || key
      : HAS_NOT_KEY;
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
      ? rowDataForKey.c[8]?.v || key
      : HAS_NOT_KEY;
  });

  console.log({ objectDataLangMS });
});

$("#log_keys_value-has-variable").on("click", () => {
  const keysWithValueHasVariable = [];
  KEYS_VI.forEach((key) => {
    const hasVariable =
      objectDataLangVI[key].includes("{{") &&
      objectDataLangVI[key].includes("}}");
    if (hasVariable) {
      keysWithValueHasVariable.push(key);
    }
  });
  console.log({ keysWithValueHasVariable });
});

$("#log_keys_value-has-endline").on("click", () => {
  const keysWithValueHasEndline = [];
  KEYS_VI.forEach((key) => {
    const hasEndline = objectDataLangVI[key].includes("\n");
    if (hasEndline) {
      keysWithValueHasEndline.push(key);
    }
  });
  console.log({ keysWithValueHasEndline });
});

$("#log_keys_value-non-translate-vi-1_0").on("click", () => {
  const keysWithValueNonTranslateVI_1_0 = [];
  KEYS_VI.forEach((key) => {
    const rowDataForKey = rowsSheet.find((row) => {
      const columnsInRow = row.c;
      const keyLang = columnsInRow[3]?.v;
      return key === keyLang;
    });

    const textTranslateVI_1_0 = rowDataForKey?.c[5]?.v;
    if (!textTranslateVI_1_0 || textTranslateVI_1_0 === FIND_NOT_CONTENT) {
      keysWithValueNonTranslateVI_1_0.push(key);
    }
  });
  console.log({ keysWithValueNonTranslateVI_1_0 });
});

$("#log_keys_value-non-translate-en").on("click", () => {
  const keysWithValueNonTranslateEN = [];
  KEYS_VI.forEach((key) => {
    const rowDataForKey = rowsSheet.find((row) => {
      const columnsInRow = row.c;
      const keyLang = columnsInRow[3]?.v;
      return key === keyLang;
    });

    const textTranslateEN = rowDataForKey?.c[6]?.v;
    if (!textTranslateEN || textTranslateEN === FIND_NOT_CONTENT) {
      keysWithValueNonTranslateEN.push(key);
    }
  });
  console.log({ keysWithValueNonTranslateEN });
});

$("#log_keys_value-non-translate-th").on("click", () => {
  const keysWithValueNonTranslateTH = [];
  KEYS_VI.forEach((key) => {
    const rowDataForKey = rowsSheet.find((row) => {
      const columnsInRow = row.c;
      const keyLang = columnsInRow[3]?.v;
      return key === keyLang;
    });

    const textTranslateTH = rowDataForKey?.c[7]?.v;
    if (!textTranslateTH || textTranslateTH === FIND_NOT_CONTENT) {
      keysWithValueNonTranslateTH.push(key);
    }
  });
  console.log({ keysWithValueNonTranslateTH });
});

$("#log_keys_value-non-translate-ms").on("click", () => {
  const keysWithValueNonTranslateMS = [];
  KEYS_VI.forEach((key) => {
    const rowDataForKey = rowsSheet.find((row) => {
      const columnsInRow = row.c;
      const keyLang = columnsInRow[3]?.v;
      return key === keyLang;
    });

    const textTranslateMS = rowDataForKey?.c[8]?.v;
    if (!textTranslateMS || textTranslateMS === FIND_NOT_CONTENT) {
      keysWithValueNonTranslateMS.push(key);
    }
  });
  console.log({ keysWithValueNonTranslateMS });
});