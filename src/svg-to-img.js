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

const copyToCanvas = ({ target, scale, format, quality }) => {
    //var svgData = new XMLSerializer().serializeToString(target);
    var canvas = document.createElement('canvas');
    //var svgSize = target.getBoundingClientRect();
    var template = document.createElement('template');
    template.innerHTML = target;
    var svg = template.content.firstChild;
    var dims = svg.attributes.getNamedItem('viewBox').value.match(/\d+/g);
    var height = svg.attributes.getNamedItem('height').value.match(/\d+/)[2];
    var width = svg.attributes.getNamedItem('width').value.match(/\d+/)[3];
    var svgSize = { width, height }

    //Resize can break shadows
    canvas.width = svgSize.width * scale;
    canvas.height = svgSize.height * scale;
    canvas.style.width = svgSize.width;
    canvas.style.height = svgSize.height;

    var ctxt = canvas.getContext('2d');
    ctxt.scale(scale, scale);

    var img = document.createElement('img');
    const buf = Buffer.from(unescape(encodeURIComponent(target)), "latin1");
    const buf64 = buf.toString('base64');
    img.setAttribute('src', 'data:image/svg+xml;base64,' + buf64);
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
    //let template = document.createElement('template');
    //template.innerHTML = target;


    //Set all the css styles inline
    //inlineStyles(target);

    //Copy all html to a new canvas
    return await copyToCanvas({
        target,
        scale,
        format,
        quality
    })
        .then(file => {
            return file;
        })
        .catch(console.error);
};

export { convert };