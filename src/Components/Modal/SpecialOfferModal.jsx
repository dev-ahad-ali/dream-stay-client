const SpecialOfferModal = () => {
  return (
    <dialog id='offer-modal' className='modal'>
      <div className='modal-box'>
        <form method='dialog'>
          {/* if there is a button in form, it will close the modal */}
          <button className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2'>
            ✕
          </button>
        </form>
        <h3 className='text-lg font-bold'>Hello!</h3>
        <p className='py-4'>40% Off</p>
      </div>
    </dialog>
  );
};

export default SpecialOfferModal;
