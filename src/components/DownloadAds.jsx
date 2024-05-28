import React from 'react'

function DownloadAds() {
    const downloadStyle = 'border-[2px] border-[#232a4e] rounded-[13px] h-[3rem] w-[10rem]'

  return (
    <div className='download_images flex'>
        <img 
            src={require("../image/App Store.png")} alt="" 
            className={downloadStyle + ` mr-[2rem]`}
        />

        <img 
            src={require("../image/Google Play.png")} alt=""
            className={downloadStyle}
        />
    </div>
  )
}

export default DownloadAds