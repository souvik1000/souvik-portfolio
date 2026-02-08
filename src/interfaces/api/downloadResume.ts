export namespace GET {
  // TODO: Change the name of the file to the url
  const getURL = () => "Souvik_Ghosh_Resume.pdf";

  export const service = () => {
    fetch(getURL())
      .then((response) => response.blob())
      .then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting all property into anchor tag and click on it to download
        let anchorTag = document.createElement("a");
        anchorTag.download = "Souvik_Ghosh_Software_Developer.pdf";
        anchorTag.href = fileURL;
        anchorTag.click();
      });
  };
}
