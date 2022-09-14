export const GenerateWordColor = (word) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let colors = [
    "#DCFFDE",
    "#BDEEDF",
    "#FFBCCD",
    "#FDFCDD",
    "#DECEDF",
    "#FDDDCB",
    "#FFFDEE",
    "#CBDDEC",
    "#EBFCFB",
    "#EFEFBD",
    "#DFBDFE",
    "#CDFEDF",
    "#BBDEFE",
    "#DEDCDF",
    "#BEFDBC",
    "#DFCDEE",
    "#BCFBEC",
    "#ECFEFD",
    "#EDDCBF",
    "#ECFEFE",
    "#BFDDFE",
    "#EEFFCB",
    "#FBEDCD",
    "#BEFDFC",
    "#CCDBEB",
    "#BDCECD",
  ];

  return colors[alphabet.indexOf(word[0])];
};
