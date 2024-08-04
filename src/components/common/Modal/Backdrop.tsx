interface BackdropProps {
  closeModal: () => void;
  showBackdrop: boolean;
}

export const Backdrop: React.FC<BackdropProps> = ({
  closeModal,
  showBackdrop,
}) => {
  return (
    <div
      onClick={closeModal}
      className={`backdrop ${showBackdrop} && "showBackdrop"}`}
    ></div>
  );
};
