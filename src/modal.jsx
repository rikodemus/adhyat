import React from 'react';

const Modal = ({ isVisible, onClose, title}) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  };

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center overflow-auto'
      id='wrapper'
      onClick={handleClose}
    >
      <div className='w-[550px] h-[300x] bg-white rounded p-4 flex flex-col overflow-y-auto '>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-lg font-semibold'>{title}</h2>
          <button
            className='text-black text-xl'
            onClick={() => onClose()}
          >
            X
          </button>
        </div>
        <div className="flex items-center mb-4 relative text-sm font-bold ">
        <p>selamat udah jadi BPH di 1 tahun ini, mungkin w ga terlalu kenal sama kalian cumaa gapapapa kita ttp ada 
di 1 BPH ini. bnyk yang udah dilaluin selama 1 periode ini, up n down dilalui di KMK ini cumaa ttp kita
jalanin smua dengan hati yang ikhlas. jangan cape cape ikut KMK karna mungkin klian masih dibutuhin kan nantinya
jadi enjoy aja di adhyat. 
</p>
</div>

<h2 className=' text-sm font-bold'>
    smngt kuliah nya hidup emang ga gampang cuma harus dijalanin! mungkin kalo
    ada salah dri w bisa dimaapin karna w jga bukan orang paling bener di dunia ini 
    jadi harap dimaklumi yach. sekali lagi thank u uda jadi BPH di 1 periode semoga
    kalian diberkati Tuhan. semoga kita bisa ketemu di lain lain hari :D
</h2> 
      </div>
    </div>
  );
};

export default Modal;
