import React from "react";
import H5P from "./H5P";
import TextCopied from "../assets/textCopied.svg";
import h5p from "../assets/qr.svg";
import file from "../assets/fileCheck.svg";
import tag from "../assets/tagHtml.svg";
import link from "../assets/link.svg";
import qr from "../assets/qr.svg";
import pdf from "../assets/pdf.svg";
const Sharing = () => {
  return (
    <div className="flex flex-col border-r bg-blue-50 border-blue-50 rounded-lg p-4">
      <h2>Sharing Options</h2>
      <div className="flex flex-col items-start gap-1 p-4 border bg-white border-gray-300 rounded-2xl" style={{width:"450px"}}>
        <H5P label="Download als H5p-Dateia" icon={h5p} popup={"downloaded H5P"} />
        <H5P label="Text Kopieren" icon={TextCopied} popup={"Text Copied"}/>
        <H5P label="Losungen Kopieren" icon={file} popup={"Kopieren Succesful"} />
        <H5P label="Einbetten als iframe" icon={tag} popup={"iframe als"}/>
        <H5P label="Aufgabe pre Link teilen" icon={link} popup={"link teikien"}/>
        <H5P label="Create QR Code" icon={qr} popup={"QR Code Created"}/>
        <H5P label="Download PDF" icon={pdf} popup={"pdf Downloaded"}/>
      </div>
    </div>
  );
};

export default Sharing;
