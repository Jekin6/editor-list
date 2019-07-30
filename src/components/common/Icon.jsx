/* eslint-disable max-len, react/prop-types */
import React from 'react';
import Icon from 'antd/lib/icon';
import Tooltip from 'antd/lib/tooltip';

const icon = {
  letterSpacing() {
    return (
      <svg viewBox="0 0 1024 1024" width="18" fill="currentColor">
        <path d="M603.99999969 476.00000031h156l-79.99999969-156z" />
        <path d="M104 164.00000031v495.99999937h828V164.00000031H104z m244.00000031 456c-12 0-24-7.99999969-28.00000031-20.00000063L152 260.00000031c-7.99999969-16.00000031-4.00000031-36 12-48 16.00000031-7.99999969 36 0 43.99999969 15.99999937l140.00000062 284.00000063 139.99999969-284.00000063c4.00000031-16.00000031 24-24 40.00000031-15.99999937 16.00000031 7.99999969 19.99999969 28.00000031 12 48l-168 339.99999937c-4.00000031 12-12 19.99999969-24 20.00000063z m516-4.00000031c-4.00000031 4.00000031-7.99999969 4.00000031-16.00000031 4.00000031-12 0-24-7.99999969-28.00000031-20.00000063l-27.99999938-55.99999968h-224.00000062l-27.99999938 55.99999968c-7.99999969 16.00000031-28.00000031 24-44.00000062 16.00000032-16.00000031-7.99999969-19.99999969-28.00000031-12-48l168-340.00000032c12-24 43.99999969-24 56.00000062 0l168 340.00000032c7.99999969 19.99999969 4.00000031 40.00000031-12 48z" />
        <path d="M104 824l120 91.99999969v-63.99999938h580.00000031v63.99999938l127.99999969-91.99999969-127.99999969-96V792.00000031H224v-64.00000031z" />
      </svg>
    );
  },
  overflow() {
    return (
      <svg width="18" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M747.79 453.255c-17.624-15.63-33.63-30.343-50.338-44.194a30.45 30.45 0 0 0-16.87-6.467c-19.186-0.755-38.426-0.27-51.846-0.27 21.558 22.798 44.733 48.074 68.824 72.489 13.635 13.904 29.103 26.246 42.684 40.205a29.804 29.804 0 0 1 8.192 18.27c0.97 23.552 0.377 47.158 0.377 73.297-4.634-3.826-7.653-6.036-10.401-8.623-66.183-62.518-132.204-125.143-198.656-187.23a35.355 35.355 0 0 0-20.372-8.084c-18.325-1.186-36.649-0.378-56.805-0.378 17.623 17.624 33.576 33.954 50.122 49.745 75.722 72.22 151.713 144.06 227.166 216.441 4.85 4.635 8.192 12.773 8.515 19.456 1.078 23.121 0.378 46.188 0.378 73.136l-379.797-361.85c0 24.145-0.539 44.895 0.432 65.482 0.269 4.42 5.605 9 9.431 12.558 96.202 91.513 192.566 182.973 288.876 274.486 1.886 1.724 3.45 3.719 7.006 7.491-29.319 0-55.943 0.647-82.513-0.539-5.712-0.27-11.749-6.413-16.438-10.887-65.913-62.086-131.557-124.335-197.254-186.583-2.264-2.048-4.69-3.934-9.324-7.815 0 23.175-0.377 43.924 0.323 64.674 0 3.557 4.204 7.437 7.384 10.402 42.2 39.504 84.615 78.794 126.868 118.19 3.503 3.342 6.845 6.9 12.396 12.558-29.642 0-56.697 0.216-83.699-0.323-3.449 0-7.383-3.18-10.24-5.767-14.12-12.234-27.917-24.792-41.93-37.133-2.856-2.533-6.09-4.69-11.048-8.408v50.769H0.216V35.84h747.627l-0.054 417.415z m65.374-57.452v-59.284h59.446v59.284h-59.446z m124.658 0v-58.96h59.823v58.906h-59.877z m0 241.61V578.13h59.985v59.284h-59.985zM313.398 819.362h59.877v59.5h-59.877v-59.5z m624.424 59.446v-59.285h59.985v59.285h-59.985z m-626.31 63.003h61.17v57.936h-61.17v-57.936z m686.295-424.368h-59.5v-57.936h59.5v57.882z m-0.054 241.395H938.2V700.9h59.553v57.937z m-559.75 240.91v-57.452h59.984v57.451h-59.984z m185.236-57.29v57.235h-59.662v-57.236h59.662z m65.158-0.594h59.392v57.883h-59.392v-57.883z m184.806 0.27v57.775h-60.04V942.08h60.04z m124.981 0.162v57.397h-59.877v-57.397h59.877z" />
      </svg>
    );
  },
  width() {
    return (
      <svg width="18" fill="currentColor" viewBox="0 0 1024 1024" >
        <path d="M889.856 405.504h-745.472c-51.2 0-92.672 41.472-92.672 92.672v363.008c0 51.2 41.472 92.672 92.672 92.672h745.472c51.2 0 92.672-41.472 92.672-92.672v-363.008c0-51.2-41.472-92.672-92.672-92.672z m38.4 455.68c0 21.504-16.896 38.4-38.4 38.4h-745.472c-21.504 0-38.4-16.896-38.4-38.4v-363.008c0-21.504 16.896-38.4 38.4-38.4h745.472c21.504 0 38.4 16.896 38.4 38.4v363.008zM95.744 347.648v-250.368c0-15.36-11.776-27.136-27.136-27.136s-27.136 11.776-27.136 27.136v250.368c0 15.36 11.776 27.136 27.136 27.136 14.848 0.512 27.136-12.288 27.136-27.136zM241.664 331.264c8.704 8.192 23.04 8.192 31.232 0 8.704-8.704 8.704-22.528 0-31.232l-55.296-55.296h582.144l-55.808 55.296c-8.704 8.704-8.704 22.528 0 31.232 8.704 8.704 22.528 8.704 31.232 0l77.824-77.824c17.408-17.408 17.408-45.056 0-62.464L775.168 113.152c-8.704-8.704-22.528-8.704-31.232 0-8.704 8.704-8.704 22.528 0 31.232l55.808 55.808h-583.168l55.808-55.296c8.704-8.704 8.704-22.528 0-31.232s-22.528-8.704-31.232 0l-77.824 77.312c-17.408 17.408-17.408 45.056 0 62.464l78.336 77.824zM947.2 375.296c14.848 0 27.136-12.8 27.136-27.136v-250.88c0-15.36-11.776-27.136-27.136-27.136s-27.136 11.776-27.136 27.136v250.368c-0.512 15.36 11.776 27.648 27.136 27.648z" />
      </svg>
    );
  },
  height() {
    return (
      <svg width="18" fill="currentColor" viewBox="0 0 1024 1024" >
        <path d="M525.824 43.52h-363.008c-51.2 0-92.672 41.472-92.672 92.16v741.888c0 51.2 41.472 92.16 92.672 92.16h363.008c51.2 0 92.672-41.472 92.672-92.16V135.68c0-50.688-41.472-92.16-92.672-92.16z m37.888 834.048c0 20.992-16.896 37.888-38.4 37.888h-362.496c-21.504 0-38.4-16.896-38.4-37.888V135.68c0-20.992 16.896-37.888 38.4-37.888h363.008c21.504 0 38.4 16.896 38.4 37.888v741.888h-0.512zM926.72 925.696h-250.368c-14.848 0-27.136 12.8-27.136 27.136 0 15.36 11.776 27.136 27.136 27.136H926.72c15.36 0 27.136-11.776 27.136-27.136s-11.776-27.136-27.136-27.136zM879.104 281.088c8.704 8.704 22.528 8.704 31.232 0s8.704-22.528 0-31.232l-77.824-77.312c-17.408-17.408-45.056-17.408-62.464 0l-77.824 77.312c-8.704 8.704-8.704 22.528 0 31.232 8.704 8.704 22.528 8.704 31.232 0l55.296-55.296v578.56l-54.784-54.784c-8.704-8.704-22.528-8.704-31.232 0-8.192 8.192-8.192 22.528 0 31.232l77.824 77.312c17.408 17.408 45.056 17.408 62.464 0l77.312-77.312c8.704-8.704 8.704-22.528 0-31.232s-22.528-8.704-31.232 0l-55.808 55.808V225.792l55.808 55.296zM676.352 105.984H926.72c15.36 0 27.136-11.776 27.136-27.136S942.08 51.712 926.72 51.712h-250.368c-14.848 0-27.136 12.288-27.136 27.136 0 15.36 11.776 27.136 27.136 27.136z" />
      </svg>
    );
  },
  position() {
    return (
      <svg width="18" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M672 893.344V800a32 32 0 0 1 64 0v93.344A192.16 192.16 0 0 0 893.344 736H800a32 32 0 0 1 0-64h93.344A192.16 192.16 0 0 0 736 514.656V608a32 32 0 0 1-64 0v-93.344A192.16 192.16 0 0 0 514.656 672H608a32 32 0 0 1 0 64h-93.344A192.16 192.16 0 0 0 672 893.344z m224-445.376a319.712 319.712 0 0 0-64-37.344V224a32 32 0 0 0-32-32H160a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h230.4c4.512 22.272 11.36 43.68 20.224 64H128a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64h704a64 64 0 0 1 64 64v256zM704 960a256 256 0 1 1 0-512 256 256 0 0 1 0 512z" />
      </svg>
    );
  },
  repeat() {
    return (
      <svg width="18" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M832 64H192c-70.7 0-128 57.3-128 128v640c0 70.7 57.3 128 128 128h640c70.7 0 128-57.3 128-128V192c0-70.7-57.3-128-128-128z m64 768c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h640c35.3 0 64 28.7 64 64v640z" />
        <path d="M224 224h256v256H224zM544 224h256v256H544zM224 544h256v256H224zM544 544h256v256H544z" />
      </svg>
    );
  },
  imagePosition() {
    return (
      <svg width="16" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M0 280.774194h99.096774V99.096774h181.67742V0H0v280.774194zM99.096774 743.225806H0v280.774194h280.774194V924.903226H99.096774v-181.67742zM743.225806 0v99.096774H924.903226v181.67742h99.096774V0h-280.774194zM924.903226 924.903226h-181.67742v99.096774h280.774194v-280.774194H924.903226V924.903226zM512 512m-132.129032 0a132.129032 132.129032 0 1 0 264.258064 0 132.129032 132.129032 0 1 0-264.258064 0Z" />
      </svg>
    );
  },
  size() {
    return (
      <svg width="18" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M195.584 973.312c-15.872 0-26.112-13.312-26.112-26.112V79.872c0-15.872 10.752-26.112 26.112-26.112 15.872 0 24.576 15.36 24.576 28.672l2.048 864.768c0 12.8-10.752 26.112-26.624 26.112zM828.416 973.312c-15.872 0-26.112-13.312-26.112-26.112V79.872c0-15.872 10.752-26.112 26.112-26.112s26.112 13.312 26.112 26.112v866.816c0 13.312-10.752 26.624-26.112 26.624z" />
        <path d="M936.96 220.16H87.04c-15.872 0-25.6-8.704-25.6-24.576 0-15.872 13.312-26.112 26.112-26.112h848.384c15.872 0 26.112 10.752 26.112 26.112 0.512 15.872-9.216 24.576-25.088 24.576zM936.448 854.528H87.552c-15.872 0-26.112-10.752-26.112-26.112s13.312-26.112 26.112-26.112h848.384c15.872 0 26.112 10.752 26.112 26.112s-10.24 26.112-25.6 26.112zM309.248 728.064c-5.12 0-7.68 0-13.312-2.56-2.56-2.56-5.12-5.12-5.12-10.752V470.016c0-7.68 5.12-13.312 10.752-15.872s13.312 0 18.432 2.56l60.416 57.856L517.12 377.344 459.264 316.928c-5.12-5.12-5.12-13.312-2.56-18.432s7.68-10.752 15.872-10.752h245.248c10.752 0 18.432 7.68 18.432 18.432v245.248c0 7.68-5.12 15.872-13.312 15.872-10.752 2.56-10.752 2.56-73.728-60.416l-134.144 134.144c63.488 63.488 63.488 63.488 57.856 73.728-2.56 7.68-7.68 10.752-15.872 10.752l-247.808 2.56zM332.8 527.36v158.72h168.96c-10.752-10.752-10.752-8.192-26.624-26.624-2.56-2.56-5.12-12.8-5.12-18.432 0-5.12 2.56-7.68 5.12-13.312l160.768-160.768c2.56-2.56 7.68-5.12 13.312-5.12 5.12 0 7.68 7.68 13.312 10.24 15.872 15.872 23.552 24.064 34.304 34.304V327.68h-174.08l37.376 39.424c7.68 7.68 7.68 23.552 0 28.672L399.36 556.544c-7.68 7.68-18.432 2.56-26.112-5.12L332.8 527.36z" />
      </svg>
    );
  },
  attachment() {
    return (
      <svg width="18" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M147.788439 631.036094l136.38625-165.67532c69.708642-83.85278 47.485501-85.872786 118.199029-7.076162 62.638619 69.706595 44.451398 81.830727 103.047957 7.076162l111.122867-143.463436c63.650669-80.81663 54.552453-71.727625 106.081037 13.139252l178.813548 296.001551L147.788439 631.036094 147.788439 631.036094zM774.874571 804.214295 148.739091 804.214295c-31.332612 0-25.801642-26.483164-25.801642-57.574277 0-61.025888-4.38896-65.632813 54.91982-65.632813l597.017302 0c-20.144806 11.521404-34.691103 34.544771-34.691103 61.026912C740.182444 768.519328 754.730789 791.549857 774.874571 804.214295zM277.958104 354.074178c35.809577 0 65.647139-29.837562 65.647139-67.146283 0-37.299511-29.837562-68.63417-65.647139-68.63417-37.307697 0-67.154469 31.334659-67.154469 68.63417C210.803635 324.236616 240.65143 354.074178 277.958104 354.074178zM847.181387 679.854962c-5.597485-2.15099-12.305257-3.229554-20.144806-3.229554-7.826246 0-14.548344 1.080611-21.255093 3.229554-25.738198 8.625448-43.639916 33.405831-43.639916 61.419861 0 29.093619 17.901719 52.8026 43.639916 61.417815 12.935614 4.443196 35.801391 3.230578 41.398876 1.081635 26.859741-8.624425 45.88198-33.405831 45.88198-62.497403C893.063367 713.25977 874.041128 688.48041 847.181387 679.854962zM816.976458 777.910209 805.782511 777.910209l-10.072403 0 0-74.344219 10.072403 0 11.192923 0L816.975435 777.910209zM858.37431 777.910209l-11.192923 0-10.061147 0 0-74.344219 10.061147 0 11.192923 0L858.37431 777.910209z" />
      </svg>
    );
  },
  offset() {
    return (
      <svg width="18" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M931.5 142.4H896v663.1c0 49.3-39.9 89.2-89.2 89.2H157.9v39.9c0 49.3 39.9 89.2 89.2 89.2h684.3c49.3 0 89.2-39.9 89.2-89.2v-703c0.1-49.3-39.9-89.2-89.1-89.2z" />
        <path d="M802.7 926.1h-676c-68.8 0-124.8-56-124.8-124.8v-676C1.9 56.5 57.9 0.5 126.7 0.5h676.1c68.8 0 124.7 56 124.7 124.8v676.1c-0.1 68.7-56 124.7-124.8 124.7z m-676-862.7c-34.1 0-61.9 27.8-61.9 61.9v676.1c0 34.1 27.8 61.9 61.9 61.9h676.1c34.1 0 61.9-27.8 61.9-61.9V125.3c0-34.1-27.7-61.9-61.9-61.9H126.7z" />
      </svg>
    );
  },
  blur() {
    return (
      <svg width="18" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M773.740236 476.496391h-51.7752c0-121.247458-98.69686-219.943294-219.943295-219.943294S282.078447 355.249957 282.078447 476.496391h-51.775201c0-149.865239 121.854279-271.718495 271.718495-271.718494s271.718495 121.853255 271.718495 271.718494z" />
        <path d="M907.425981 475.181443h-25.8876c0-213.269291-173.426865-386.696156-386.696156-386.696156s-386.697179 173.426865-386.697179 386.696156H82.257445c0-227.52804 185.055716-412.583756 412.583757-412.583756S907.425981 247.653403 907.425981 475.181443z" />
        <path d="M684.920328 912.12398l34.902928 49.278333 95.740528-73.593112-34.903951-49.273216-280.676518-396.274302-34.902928-49.278334-95.739504 73.593112 34.901904 49.27731 280.677541 396.270209zM318.836629 393.940141l34.901904 49.278333 95.740528-73.593112-34.904974-49.273217-19.390629-27.378557-34.901905-49.278333-95.739505 73.592088 34.902928 49.278333 19.391653 27.374465zM278.295284 505.078357s-45.097104 163.54275 107.09411 244.321518C215.159338 734.041072 170.06121 897.582799 170.06121 897.582799S215.159338 734.041072 62.968124 653.262304c170.230056 15.359826 215.32716-148.183947 215.32716-148.183947zM877.17705 519.124258s0 87.497796 83.853803 104.997356c-83.853803 17.499559-83.853803 104.997356-83.853803 104.997355s0-87.497796-83.853803-104.997355c83.853803-17.499559 83.853803-104.997356 83.853803-104.997356z" />
      </svg>
    );
  },
  spread() {
    return (
      <svg width="18" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M64 960h896V64H64v896zM960 0a64 64 0 0 1 64 64v896a64 64 0 0 1-64 64H64a64 64 0 0 1-64-64V64a64 64 0 0 1 64-64h896zM192 192h128V128H128v192h64V192z m640 128h64V128h-192v64h128v128z m64 384h-64v128h-128v64h192v-192z m-576 128H192v-128H128v192h192v-64zM448 192h128V128H448v64z m0 704h128v-64H448v64zM128 576h64V448H128v128z m704 0h64V448h-64v128z" />
      </svg>
    );
  },
  block() {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M2 4h12v8H2V4zm10 2H4v4h8V6z" />
        <path opacity=".6" fillRule="evenodd" clipRule="evenodd" d="M2 1h12v1H2V1zm0 13h12v1H2v-1z" />
      </svg>
    );
  },
  flex() {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path opacity=".6" fillRule="evenodd" clipRule="evenodd" d="M2 2h12v12H2V2zM1 1h14v14H1V1z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M7 4H4v8h3V4zm2 0h3v8H9V4z" />
      </svg>
    );
  },
  'inline-block': () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M4 4h8v8H4V4zm6 2H6v4h4V6z" />
        <path opacity=".6" fillRule="evenodd" clipRule="evenodd" d="M1 2h1v12H1V2zm14 0h-1v12h1V2z" />
      </svg>
    );
  },
  inline() {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path opacity=".6" fillRule="evenodd" clipRule="evenodd" d="M1 2h1v12H1V2zm14 0h-1v12h1V2z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M7.25 3L3.5 13h2l1-3h3l1 3h2L8.75 3h-1.5zm1.917 6L8 5.5 6.833 9h2.334z" />
      </svg>
    );
  },
  'alignItems-stretch': () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path d="M0 0h16v1H0zm0 15h16v1H0z" />
        <path stroke="currentColor" d="M3.5 2.5h3v11h-3zm5 0h3v11h-3z" />
      </svg>
    );
  },
  'alignItems-flex-start': () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path d="M0 0h16v1H0z" />
        <path stroke="currentColor" d="M3.5 2.5h3v7h-3zm5 0h3v5h-3z" />
      </svg>
    );
  },
  'alignItems-center': () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path stroke="currentColor" d="M3.5 3.5h3v8h-3zm5 1h3v6h-3z" />
        <path d="M0 7h16v1H0z" />
      </svg>
    );
  },
  'alignItems-flex-end': () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path d="M0 15h16v1H0z" />
        <path stroke="currentColor" d="M3.5 6.5h3v7h-3zm5 2h3v5h-3z" />
      </svg>
    );
  },
  'alignItems-baseline': () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path d="M0 7h16v1H0z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 3H8v7h4V3zm-1 1H9v3h2V4zM7 3H3v9h4V3zM6 4H4v3h2V4z" />
      </svg>
    );
  },
  'justifyContent-flex-start': () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path stroke="currentColor" d="M2.5 4.5h3v7h-3zm5 0h3v7h-3z" />
        <path d="M0 0h1v16H0z" />
      </svg>
    );
  },
  'justifyContent-center': () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path stroke="currentColor" d="M2.5 4.5h3v7h-3zm7 0h3v7h-3z" />
        <path d="M7 0h1v16H7z" />
      </svg>
    );
  },
  'justifyContent-flex-end': () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path d="M15 0h1v16h-1z" />
        <path stroke="currentColor" d="M5.5 4.5h3v7h-3zm5 0h3v7h-3z" />
      </svg>
    );
  },
  'justifyContent-space-between': () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path d="M15 0h1v16h-1zM0 0h1v16H0z" />
        <path stroke="currentColor" d="M10.5 4.5h3v7h-3zm-8 0h3v7h-3z" />
      </svg>
    );
  },
  'justifyContent-space-around': () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path d="M15 0h1v16h-1zM0 0h1v16H0z" />
        <path stroke="currentColor" d="M9.5 4.5h3v7h-3zm-6 0h3v7h-3z" />
      </svg>
    );
  },
  float() {
    return (
      <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
        <path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m438.857143-512a436.224 436.224 0 0 0-81.298286-254.098286l-106.057143 106.057143a286.683429 286.683429 0 0 1 0 295.972572l106.057143 106.057142A436.187429 436.187429 0 0 0 950.857143 512zM512 292.571429a219.428571 219.428571 0 1 0 219.428571 219.428571 219.428571 219.428571 0 0 0-219.428571-219.428571z m0 658.285714a436.224 436.224 0 0 0 254.098286-81.298286l-106.057143-106.057143a286.72 286.72 0 0 1-295.972572 0l-106.057142 106.057143A436.224 436.224 0 0 0 512 950.857143zM73.142857 512a436.187429 436.187429 0 0 0 81.298286 254.098286l106.057143-106.057143a286.683429 286.683429 0 0 1 0-295.972572l-106.057143-106.057142A436.224 436.224 0 0 0 73.142857 512z m184.758857-357.558857l106.057143 106.057143a286.683429 286.683429 0 0 1 295.972572 0l106.057142-106.057143a437.686857 437.686857 0 0 0-508.086857 0z" />
      </svg>
    );
  },
  'float-left': () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path fill="currentColor" d="M0 4h8v8H0z" />
        <path opacity=".6" fillRule="evenodd" clipRule="evenodd" d="M10 4h6v2h-6V4zm0 3h6v2h-6V7zm4 3h-4v2h4v-2z" />
      </svg>
    );
  },
  'float-right': () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 4h8v8H8z" />
        <path opacity=".6" fillRule="evenodd" clipRule="evenodd" d="M0 4h6v2H0V4zm0 3h6v2H0V7zm4 3H0v2h4v-2z" />
      </svg>
    );
  },
  'float-close': () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.414 8l3.293-3.293-1.414-1.414L8 6.586 4.707 3.293 3.293 4.707 6.586 8l-3.293 3.293 1.414 1.414L8 9.414l3.293 3.293 1.414-1.414L9.414 8z" />
      </svg>
    );
  },
  'clear-left': () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path opacity=".6" d="M1 3h4v4H1z" />
        <path d="M7 3h8v4H7z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M10 8v1a2 2 0 0 1-2 2H4v2h4a4 4 0 0 0 4-4V8h-2zm-6.01 5L4 15l-3-3 3-3-.01 2v2z" fill="currentColor" />
      </svg>
    );
  },
  'clear-right': () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path opacity=".6" fill="currentColor" d="M11 3h4v4h-4z" />
        <path fill="currentColor" d="M1 3h8v4H1z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M6 8v1a2 2 0 0 0 2 2h4v2H8a4 4 0 0 1-4-4V8h2zm6.01 5L12 15l3-3-3-3 .01 2v2z" fill="currentColor" />
      </svg>
    );
  },
  'clear-both': () => {
    return (
      <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
        <path fill="currentColor" d="M2 3h12v4H2z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M9 8v1a2 2 0 0 0 2 2h2v2h-2a4 4 0 0 1-4-4V8h2zm4.01 5L13 15l3-3-3-3 .01 2v2z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M7 8v1a2 2 0 0 1-2 2H3v2h2a4 4 0 0 0 4-4V8H7zm-4.01 5L3 15l-3-3 3-3-.01 2v2z" />
      </svg>
    );
  },
  'bg-type': () => (
    <svg viewBox="0 0 1024 1024" width="18" fill="currentColor">
      <path d="M203.629 173.072h273.397v273.401h-273.397v-273.401zM823.632 308.669l-129.652-127.415-127.415 129.646 129.655 127.41 127.41-129.642zM200.368 542.497h273.401v273.401h-273.401v-273.401zM548.629 542.497h273.397v273.401h-273.397v-273.401zM548.629 542.497z" />
    </svg>
  ),
  'bg-type-linear': () => (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
      <defs>
        <linearGradient id="svg-type-background-linear-gradient" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 10 -10 0 10 0)">
          <stop stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path transform="translate(3 3)" fill="url(#svg-type-background-linear-gradient)" d="M0 0h10v10H0z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15 1H1v14h14V1zm-1 1H2v12h12V2z" />
    </svg>
  ),
  'bg-type-radial': () => (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
      <defs>
        <radialGradient id="svg-type-background-radial-gradient" cx=".5" cy=".5" r=".5" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 10 -10 0 10 0)">
          <stop stopColor="currentColor" stopOpacity="0" />
          <stop offset=".1" stopColor="currentColor" stopOpacity="0" />
          <stop offset="1" stopColor="currentColor" />
        </radialGradient>
      </defs>
      <path transform="translate(3 3)" fill="url(#svg-type-background-radial-gradient)" d="M0 0h10v10H0z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15 1H1v14h14V1zm-1 1H2v12h12V2z" />
    </svg>
  ),
  clip: () => (
    <svg viewBox="0 0 1024 1024" width="18px" fill="currentColor">
      <path d="M682.666667 256 341.333333 256C315.733333 256 298.666667 238.933333 298.666667 213.333333s17.066667-42.666667 42.666667-42.666667l341.333333 0c25.6 0 42.666667 17.066667 42.666667 42.666667S708.266667 256 682.666667 256z" />
      <path d="M682.666667 853.333333 341.333333 853.333333c-25.6 0-42.666667-17.066667-42.666667-42.666667s17.066667-42.666667 42.666667-42.666667l341.333333 0c25.6 0 42.666667 17.066667 42.666667 42.666667S708.266667 853.333333 682.666667 853.333333z" />
      <path d="M810.666667 725.333333c-25.6 0-42.666667-17.066667-42.666667-42.666667L768 341.333333c0-25.6 17.066667-42.666667 42.666667-42.666667s42.666667 17.066667 42.666667 42.666667l0 341.333333C853.333333 708.266667 836.266667 725.333333 810.666667 725.333333z" />
      <path d="M213.333333 725.333333c-25.6 0-42.666667-17.066667-42.666667-42.666667L170.666667 341.333333c0-25.6 17.066667-42.666667 42.666667-42.666667s42.666667 17.066667 42.666667 42.666667l0 341.333333C256 708.266667 238.933333 725.333333 213.333333 725.333333z" />
      <path d="M832 64H192c-70.7 0-128 57.3-128 128v640c0 70.7 57.3 128 128 128h640c70.7 0 128-57.3 128-128V192c0-70.7-57.3-128-128-128z m64 768c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h640c35.3 0 64 28.7 64 64v640z" />
    </svg>
  ),
  extent: () => (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
      <path opacity=".6" fillRule="evenodd" clipRule="evenodd" d="M14 2H2v12h9v1H1V1h14v10h-1V2z" />
      <path opacity=".4" fillRule="evenodd" clipRule="evenodd" d="M11 13.12V14H2V2h12v9h-.88L8.976 6.854a2.5 2.5 0 1 0-2.12 2.12L11 13.122z" />
      <circle cx="1.5" cy="1.5" r="1.5" transform="translate(5 5)" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8.586 7.88c-.186.28-.427.52-.707.706L13.29 14H12v1h3v-3h-1v1.293L8.586 7.88z" />
    </svg>
  ),
  'farthest-corner': () => (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
      <path opacity=".6" fillRule="evenodd" clipRule="evenodd" d="M14 2H2v12h9v1H1V1h14v10h-1V2z" />
      <path opacity=".4" fillRule="evenodd" clipRule="evenodd" d="M11 13.12V14H2V2h12v9h-.88L8.976 6.854a2.5 2.5 0 1 0-2.12 2.12L11 13.122z" />
      <circle cx="1.5" cy="1.5" r="1.5" transform="translate(5 5)" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8.586 7.88c-.186.28-.427.52-.707.706L13.29 14H12v1h3v-3h-1v1.293L8.586 7.88z" />
    </svg>
  ),
  'farthest-side': () => (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
      <path opacity=".6" fillRule="evenodd" clipRule="evenodd" d="M13 2H2v12h11v1H1V1h12v1z" />
      <path opacity=".4" fillRule="evenodd" clipRule="evenodd" d="M13.85 5a7.465 7.465 0 0 0-1.35-3H2v10.5A7.503 7.503 0 0 0 13.85 8H8.5a2.5 2.5 0 1 1 0-3h5.35z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 1h1v14h-1V7H8.95a2.513 2.513 0 0 0 0-1H14V1z" />
      <circle cx="1.5" cy="1.5" r="1.5" transform="translate(5 5)" />
    </svg>
  ),
  'closest-corner': () => (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
      <path opacity=".6" fillRule="evenodd" clipRule="evenodd" d="M14 2H5V1h10v14H1V5h1v9h12V2z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 1H1v3h1V2.707L4.414 5.12c.186-.28.427-.52.707-.706L2.71 2H4V1H2z" />
      <circle cx="1.5" cy="1.5" r="1.5" transform="translate(5 5)" />
      <path opacity=".4" fillRule="evenodd" clipRule="evenodd" d="M2 5v6.19A6.5 6.5 0 0 0 11.19 2H5v.88l1.146 1.145a2.5 2.5 0 1 1-2.12 2.12L2.878 5H2z" />
    </svg>
  ),
  'closest-side': () => (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
      <path opacity=".6" fillRule="evenodd" clipRule="evenodd" d="M1 3v12h14V3h-1v11H2V3H1z" />
      <path opacity=".4" fillRule="evenodd" clipRule="evenodd" d="M8 4.5a2.5 2.5 0 1 1-3 0V2H3.337A5.53 5.53 0 0 0 2 3.337v6.326A5.5 5.5 0 1 0 9.663 2H8v2.5z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 1h14v1H7v2.05a2.51 2.51 0 0 0-1 0V2H1V1z" />
      <circle cx="1.5" cy="1.5" r="1.5" transform="translate(5 5)" />
    </svg>
  ),
  shape: () => (
    <svg viewBox="0 0 1024 1024" width="18" fill="currentColor">
      <path d="M832 337.6 832 106.688C832 83.072 812.864 64 789.376 64L106.688 64C83.072 64 64 83.072 64 106.688l0 682.688C64 812.928 83.072 832 106.688 832l251.456 0c62.912 96.192 171.328 160 294.592 160 194.112 0 352-157.952 352-352C1004.736 511.424 935.232 399.04 832 337.6zM128 768 128 128l640 0 0 179.776C731.776 295.168 693.12 288 652.736 288 458.688 288 300.8 445.952 300.8 640c0 45.184 8.896 88.256 24.448 128L128 768zM652.736 928C494.016 928 364.8 798.784 364.8 640s129.216-288 287.936-288 288 129.216 288 288S811.52 928 652.736 928z" />
    </svg>
  )
};

export default ({ type, prompt, children }) => {
  const iconProps = {
    className: 'icon',
  };
  if (icon[type]) {
    iconProps.component = icon[type];
  } else {
    iconProps.type = type;
  }
  return (
    <Tooltip title={prompt}>
      {children || <Icon {...iconProps} />}
    </Tooltip>
  );
};
