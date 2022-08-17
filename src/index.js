const form=document.getElementById('generateform')

const qrcode=document.getElementById('qrcode')

const onGenerateSubmit=(e)=>{
    e.preventDefault();

    clearUI();

    const url=document.getElementById('url').value;
    const size=document.getElementById('size').value;

    if(url===''){
        alert('Please insert a URL')
    }else{
        showSpinner()
        setTimeout(()=>{
            hideSpinner()
            generateQrCode(url,size)

            setTimeout(()=>{
                const saveUrl=qrcode.querySelector('img').src;
                createSaveBtn(saveUrl)
            },50)
        },2000)
    }
};
const generateQrCode=(url,size)=>{
    const qrcode=new QRCode('qrcode',{
        text:url,
        width:size,
        height:size,
    })
}
const showSpinner=()=>{
    document.getElementById('spinner').style.display='block';
}
const hideSpinner=()=>{
    document.getElementById('spinner').style.display='none';
}
const clearUI=()=>{
    qrcode.innerHTML = '';
    const saveBtn=document.getElementById('save');
    if (saveBtn) saveBtn.remove();
}

const createSaveBtn=(saveUrl)=>{
    const link=document.createElement('a');
    link.id='save';
    link.classList='bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href=saveUrl;
    link.download='qrcode';
    link.innerHTML='Save Image';
    document.getElementById('generated').appendChild(link)

};
hideSpinner();
 
form.addEventListener('submit',onGenerateSubmit)