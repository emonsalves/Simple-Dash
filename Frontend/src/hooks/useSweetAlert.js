import Swal from "sweetalert2";

const useSweetAlert = () => {
  const showAlert = ({title, text, icon, timer}) => {
    Swal.fire({
      title,
      text,
      icon,
      timer,
    });
  };

  return { showAlert };
};

export default useSweetAlert;
