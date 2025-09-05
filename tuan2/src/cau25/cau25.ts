// 25. Create a function downloadFile that simulates downloading a file in 3 seconds and logs
// when done.
var downloadFile = async (fileName: string): Promise<void> => {
  return new Promise((resolve) => {
    console.log(`Start downloading ${fileName}...`);
    setTimeout(() => {
      console.log(`${fileName} downloaded successfully!`);
      resolve();
    }, 3000);
  });
};

var main = async () => {
  await downloadFile("example.zip");
};

main();
