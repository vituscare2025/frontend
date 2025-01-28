import React from 'react';

export default function IconBoxStyle1({ title, subTitle, iconUrl }) {
  return (
    <div className="cs_iconbox cs_style_1 cs_shadow_1 cs_radius_15">
      <div className="cs_iconbox_top">
        <div className="cs_iconbox_icon cs_radius_15 cs_center" style={{border:"5px solid #2C2F76"}}>
          <img src={iconUrl} alt="Icon" />
        </div>
        <h2 className="red_color cs_iconbox_title cs_medium cs_fs_20 m-0">{title}</h2>
      </div>
      <p className=" cs_iconbox_text">{subTitle}</p>
    </div>
  );
}
