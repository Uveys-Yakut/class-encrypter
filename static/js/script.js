const htmlFiles = [];
const cssFiles = [];

function generateFileList(json) {
    const container = document.getElementById('fl-lst-cntnr');
    container.innerHTML = '';

    Object.keys(json).forEach(file => {
        const wrapper = document.createElement('div');
        wrapper.className = 'cntnt-itm_wrpr';

        const header = document.createElement('div');
        header.className = 'itm-hdr_wrpr';

        const headerContent = document.createElement('div');
        headerContent.className = 'hdr-cntnt_cntnr';

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 32 32');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('style', 'width: 1.5rem !important; position: relative; top: 1px;');
        
        if (file.endsWith('.php')) {
            svg.innerHTML = `<defs>
                                <radialGradient id="a" cx="-16.114" cy="20.532" r="18.384" gradientTransform="translate(26.52 -9.307)" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stop-color="#ffffff"/>
                                    <stop offset="0.5" stop-color="#4c6b96"/>
                                    <stop offset="1" stop-color="#231f20"/>
                                </radialGradient>
                            </defs>
                            <title>file_type_php</title>
                            <ellipse cx="16" cy="16" rx="14" ry="7.365" style="fill:url(#a)"/>
                            <ellipse cx="16" cy="16" rx="13.453" ry="6.818" style="fill:#6280b6"/>
                            <path d="M18.725,18.2l.667-3.434a1.752,1.752,0,0,0-.372-1.719,2.929,2.929,0,0,0-2-.525H15.867l.331-1.7a.219.219,0,0,0-.215-.26h-1.6a.219.219,0,0,0-.215.177l-.709,3.646a2.051,2.051,0,0,0-.477-1.054,2.783,2.783,0,0,0-2.2-.807H7.7a.219.219,0,0,0-.215.177l-1.434,7.38a.219.219,0,0,0,.215.26H7.869a.219.219,0,0,0,.215-.177l.347-1.785h1.2a5.167,5.167,0,0,0,1.568-.2,3.068,3.068,0,0,0,1.15-.689,3.538,3.538,0,0,0,.68-.844l-.287,1.475a.219.219,0,0,0,.215.26h1.6a.219.219,0,0,0,.215-.177l.787-4.051h1.094c.466,0,.6.093.64.133s.1.165.025.569l-.635,3.265a.219.219,0,0,0,.215.26h1.62A.219.219,0,0,0,18.725,18.2ZM11.33,15.366a1.749,1.749,0,0,1-.561,1.092,2.171,2.171,0,0,1-1.315.321H8.742l.515-2.651h.921c.677,0,.949.145,1.059.266A1.181,1.181,0,0,1,11.33,15.366Z" style="fill:#fff"/><path d="M25.546,13.332a2.783,2.783,0,0,0-2.2-.807H20.255a.219.219,0,0,0-.215.177l-1.434,7.38a.219.219,0,0,0,.215.26h1.608a.219.219,0,0,0,.215-.177l.347-1.785h1.2a5.167,5.167,0,0,0,1.568-.2,3.068,3.068,0,0,0,1.15-.689,3.425,3.425,0,0,0,1.076-1.927A2.512,2.512,0,0,0,25.546,13.332Zm-1.667,2.034a1.749,1.749,0,0,1-.561,1.092A2.171,2.171,0,0,1,22,16.778H21.29l.515-2.651h.921c.677,0,.949.145,1.059.266A1.181,1.181,0,0,1,23.879,15.366Z" style="fill:#fff"/><path d="M10.178,13.908a1.645,1.645,0,0,1,1.221.338,1.34,1.34,0,0,1,.145,1.161,1.945,1.945,0,0,1-.642,1.223A2.361,2.361,0,0,1,9.454,17H8.476l.6-3.089ZM6.261,20.124H7.869l.381-1.962H9.627a4.931,4.931,0,0,0,1.5-.191,2.84,2.84,0,0,0,1.07-.642,3.207,3.207,0,0,0,1.01-1.808,2.3,2.3,0,0,0-.385-2.044,2.568,2.568,0,0,0-2.035-.732H7.7Z" style="fill:#000004"/><path d="M14.387,10.782h1.6L15.6,12.744h1.421a2.767,2.767,0,0,1,1.85.468,1.548,1.548,0,0,1,.305,1.516l-.667,3.434H16.89l.635-3.265a.886.886,0,0,0-.08-.76,1.121,1.121,0,0,0-.8-.2H15.37l-.822,4.228h-1.6Z" style="fill:#000004"/><path d="M22.727,13.908a1.645,1.645,0,0,1,1.221.338,1.34,1.34,0,0,1,.145,1.161,1.945,1.945,0,0,1-.642,1.223A2.361,2.361,0,0,1,22,17h-.978l.6-3.089ZM18.81,20.124h1.608l.381-1.962h1.377a4.931,4.931,0,0,0,1.5-.191,2.84,2.84,0,0,0,1.07-.642,3.207,3.207,0,0,0,1.01-1.808,2.3,2.3,0,0,0-.385-2.044,2.568,2.568,0,0,0-2.035-.732H20.244Z" style="fill:#000004"/>`;
        } else {
            svg.innerHTML = `<path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"/>
                             <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"/>
                             <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"/>`;
        }
        
        headerContent.appendChild(svg);

        const fileName = document.createElement('span');
        fileName.textContent = file;
        headerContent.appendChild(fileName);

        header.appendChild(headerContent);
        const arrowIcon = document.createElement('i');
        arrowIcon.className = 'fa-solid fa-angle-down';
        header.appendChild(arrowIcon);

        wrapper.appendChild(header);

        const subItemsWrapper = document.createElement('div');
        subItemsWrapper.className = 'sub-itms_wrpr';

        const subItemsContainer = document.createElement('div');
        subItemsContainer.className = 'cntnt_wrpr';

        if (Array.isArray(json[file])) {
            json[file].forEach(cssFile => {
                const subItem = document.createElement('div');
                subItem.className = 'sub-itm_wrpr';

                const icon = document.createElement('i');
                icon.className = 'fa-regular fa-circle-dot';
                subItem.appendChild(icon);

                const itemContent = document.createElement('div');
                itemContent.className = 'itm-cntnt_cntnr';

                const fileSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                fileSvg.setAttribute('viewBox', '0 0 32 32');
                fileSvg.setAttribute('fill', 'none');
                fileSvg.innerHTML = `<path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/>
                                     <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/>
                                     <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/>`;
                itemContent.appendChild(fileSvg);

                const cssFileName = document.createElement('span');
                cssFileName.textContent = cssFile;
                itemContent.appendChild(cssFileName);

                subItem.appendChild(itemContent);
                subItemsContainer.appendChild(subItem);
            });
        }

        subItemsWrapper.appendChild(subItemsContainer);
        wrapper.appendChild(subItemsWrapper);
        container.appendChild(wrapper);
    });

    document.querySelectorAll('.itm-hdr_wrpr').forEach(header => {
        header.addEventListener('click', (e) => {
            const nextElement = header.nextElementSibling;
            const arrowIcon = header.querySelector('i');
            const isVisible = header.classList.toggle('vsbl');
            
            if (isVisible) {
                header.style.borderBottom = "1px solid var(--brdr-color)";
                nextElement.style.height = `${nextElement.scrollHeight}px`;
                arrowIcon.style.transform = "rotate(0)";
                if (header.parentElement.parentElement.children.length <= 1) {
                    document.querySelectorAll(".sub-itms_wrpr").forEach(el => {
                        el.style.borderBottom = "1px solid var(--brdr-color)";
                    });
                }
            } else {
                setTimeout(() => {
                    header.style.borderBottom = "unset";
                }, 340);
                nextElement.style.height = "0";
                arrowIcon.style.transform = "rotate(-90deg)";
                if (header.parentElement.parentElement.children.length <= 1) {
                    document.querySelectorAll(".sub-itms_wrpr").forEach(el => {
                        el.style.borderBottom = "0";
                    });
                }
            }
        });
    });
}
function updateFileList(inputElement, fileArray, sectionTitle) {
    const files = Array.from(inputElement.files);
    const fileListContainer = document.getElementById('fl-lst');
    fileListContainer.style.marginTop = "20px";

    let section = document.getElementById(sectionTitle);
    if (!section) {
        section = document.createElement('div');
        section.id = sectionTitle;
        section.innerHTML = `<h4>${sectionTitle.replace(/_/g, ' ')}</h4><div id="${sectionTitle}-list" class="fl-lst-cntnt"></div>`;
        fileListContainer.appendChild(section);
    }
    const fileList = document.getElementById(`${sectionTitle}-list`);

    files.forEach(file => {
        if (!fileArray.some(f => f.name === file.name)) {
            fileArray.push(file);

            const fileItem = document.createElement('div');
            fileItem.className = 'fl-itm';

            const fileName = document.createElement('span');
            fileName.textContent = file.name;

            fileItem.appendChild(fileName);

            fileList.appendChild(fileItem);
        }
    });

    fileListContainer.style.display = 'block';

    inputElement.value = '';  
}
function showError(message) {
    const errorMessage = document.getElementById('err-msg');
    if (errorMessage) {
        errorMessage.textContent = message;
        errorMessage.classList.remove('hide');
        errorMessage.classList.add('show');
        
        setTimeout(() => {
            errorMessage.classList.remove('show');
            errorMessage.classList.add('hide');
        }, 4000);
    }
}

document.getElementById('html_files').addEventListener('change', function() {
    updateFileList(this, htmlFiles, 'PHP-HTML_Files');
});

document.getElementById('css_files').addEventListener('change', function() {
    updateFileList(this, cssFiles, 'CSS_Files');
});

document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();

    if (htmlFiles.length === 0 && cssFiles.length === 0) {
        showError('Please select at least one HTML or CSS file.');
        return;
    }

    if (htmlFiles.length === 0) {
        showError('Please select at least one HTML file.');
        return;
    }

    if (cssFiles.length === 0) {
        showError('Please select at least one CSS file.');
        return;
    }

    const formData = new FormData();
    htmlFiles.forEach(file => formData.append('html_files', file));
    cssFiles.forEach(file => formData.append('css_files', file));

    fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            showError(`File upload failed with status ${response.status}: ${response.statusText}`);
            return;
        }
        return response.json();
    })
    .then(data => {
        console.log(data);

        if (data.html_css_map) {        
            document.getElementsByClassName('sdbr_wrpr')[0].style.width = "240px";
            var elements = document.getElementsByClassName("fl-lst-cntnt");
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.gridTemplateColumns = "repeat(auto-fill, minmax(100px, 1fr))";
            }
            generateFileList(data.html_css_map);
        }
    
        if (data.zip_file_url) {
            fetch(data.zip_file_url)
            .then(response => {
                if (!response.ok) {
                    showError(`Failed to fetch ZIP file with status ${response.status}: ${response.statusText}`);
                    return;
                }
                return response.blob();
            })
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = data.zip_file_url.split('/').pop();
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => {
                showError(`Error downloading the ZIP file: ${error.message}`);
                console.error('Error:', error);
            });
        } else {
            showError('No ZIP file URL provided.');
        }
    
        console.log(document.getElementsByClassName('sdbr_wrpr'));
    })
    .catch(error => {
        showError(`An error occurred during file upload: ${error.message}`);
        console.error('Error:', error);
    });
});  