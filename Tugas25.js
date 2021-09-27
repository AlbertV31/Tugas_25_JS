function angka() {
  var data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
  var asc = data.sort();
  var des = data.reverse();
  var fil = data.filter(data => data > 10);
  console.log("Sebelumnya :", data.join(" "));
  console.log("Ascending :", asc.join(" "));
  console.log("Descending :", des.join (" "));
  console.log("Filter > 10 :", fil.join(" "));
}

angka()
