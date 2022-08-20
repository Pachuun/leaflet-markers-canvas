const inlineStyles = target => {
    const selfCopyCss = elt => {
        const computed = window.getComputedStyle(elt);
        const css = {};
        for (let i = 0; i < computed.length; i++) {
            css[computed[i]] = computed.getPropertyValue(computed[i]);
        }

        for (const key in css) {
            elt.style[key] = css[key];
        }
        return css;
    };

    selfCopyCss(target);
    target.querySelectorAll('*').forEach(elt => selfCopyCss(elt));
}; // inline styles

const copyToCanvas = ({ template, scale, format, quality }) => {
    var svgData = new XMLSerializer().serializeToString(template);
    var canvas = document.createElement('canvas');
    var svgSize = template.getBoundingClientRect();

    //Resize can break shadows
    canvas.width = svgSize.width * scale;
    canvas.height = svgSize.height * scale;
    canvas.style.width = svgSize.width;
    canvas.style.height = svgSize.height;

    var ctxt = canvas.getContext('2d');
    ctxt.scale(scale, scale);

    var img = document.createElement('img');
    img.setAttribute('src', 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData))));
    return new Promise(resolve => {
        img.onload = () => {
            ctxt.drawImage(img, 0, 0);
            const file = canvas.toDataURL(`image/${format}`, (format = 'png'), quality);
            resolve(file);
        };
    });
};

const downloadImage = ({ file, name, format }) => {
    var a = document.createElement('a');
    a.className = "display-none";
    a.download = `${name}.${format}`;
    a.href = file;
    document.body.appendChild(a);
    a.click();
};

// module.exports 

const convert = async (target, name, { scale = 1, format = 'png', quality = 0.92, download = true } = {}) => {
    let template = document.createElement('template');
    template.innerHTML = target;


    //Set all the css styles inline
    inlineStyles(template);

    //Copy all html to a new canvas
    return await copyToCanvas({
        template,
        scale,
        format,
        quality
    })
        .then(file => {
            //Download if necessary
            if (download) downloadImage({ file, name, format });
            return file;
        })
        .catch(console.error);
};

export { convert };