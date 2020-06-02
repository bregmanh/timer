let args = process.argv;
args = args.slice(2);
sorted_arr = args.sort(function(a, b){
  return a-b;
});

for (let i = 0; i < sorted_arr.length; i++) {
  let item = Number(sorted_arr[i])
  if (item < 0 || typeof item !== "number") {
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, item * 1000);
  }

}
